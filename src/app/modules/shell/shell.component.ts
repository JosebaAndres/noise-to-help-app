import { ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DeviceType } from 'src/app/models/device-type';
import { SignatureModel } from 'src/app/models/signature-model';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';
import { MenuItemModel } from '../../models/menu-item-model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();
  private deviceType: DeviceType;

  sidenavOpened = false;
  subMenuItems$: Observable<Array<MenuItemModel>>;
  signatures$: Observable<Array<SignatureModel>>;

  @ViewChild('mainContent', { static: true, read: ElementRef }) mainContent: ElementRef<HTMLElement>;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.refreshDocumentWidth();
  }

  constructor(
    private uiStoreFacade: UiStoreFacade,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subMenuItems$ = this.uiStoreFacade.selectSubMenuItems();
    this.signatures$ = this.uiStoreFacade.selectSignatures();

    this.uiStoreFacade
      .selectMenuOpened()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (this.sidenavOpened !== value) {
          this.sidenavOpened = value;
          this.changeDetectorRef.markForCheck();
        }
      });

    this.uiStoreFacade
      .selectDeviceType()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.deviceType = value;
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        if (!this.deviceType || this.deviceType !== DeviceType.phone) {
          this.mainContent.nativeElement.scroll({ top: 0 });
        }
        if (this.mainContent.nativeElement.scrollTop > 32) {
          this.mainContent.nativeElement.scroll({ top: 32 });
        }
      });

    this.refreshDocumentWidth();
    this.uiStoreFacade.imgLoaded$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.refreshDocumentWidth();
    });
    this.mainContent.nativeElement.addEventListener('scroll', () => {
      this.uiStoreFacade.scrollTop(this.mainContent.nativeElement.scrollTop);
    });
  }

  onSidenavOpenedChange(value): void {
    if (value) {
      this.uiStoreFacade.openMenu();
    } else {
      this.uiStoreFacade.closeMenu();
    }
  }

  linkClicked(): void {
    this.uiStoreFacade.closeMenu();
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }

  private refreshDocumentWidth() {
    if (this.mainContent) {
      this.uiStoreFacade.setDocumentWidth(this.mainContent.nativeElement.scrollWidth);
    }
  }
}
