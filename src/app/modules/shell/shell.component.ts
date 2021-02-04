import { ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SignatureModel } from 'src/app/models/signature-model';
import { MenuItemModel } from '../../models/menu-item-model';
import {
  UiStoreActionCloseMenu,
  UiStoreActionOpenMenu,
  UiStoreActionSetScrollTop,
} from '../../stores/ui/ui-store-actions';
import {
  uiStoreSelectMenuOpened,
  uiStoreSelectSignatures,
  uiStoreSelectSubMenuItems,
} from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();

  sidenavOpened = false;
  subMenuItems$: Observable<Array<MenuItemModel>>;
  signatures$: Observable<Array<SignatureModel>>;

  @ViewChild('mainContent', { static: true, read: ElementRef }) mainContent: ElementRef<HTMLElement>;

  constructor(
    private uiStore$: Store<UiStoreState>,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subMenuItems$ = this.uiStore$.select(uiStoreSelectSubMenuItems);
    this.signatures$ = this.uiStore$.select(uiStoreSelectSignatures);

    this.uiStore$
      .select(uiStoreSelectMenuOpened)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (this.sidenavOpened !== value) {
          this.sidenavOpened = value;
          this.changeDetectorRef.markForCheck();
        }
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.mainContent.nativeElement.scroll({ top: 0 });
      });
    this.mainContent.nativeElement.addEventListener('scroll', () => {
      this.uiStore$.dispatch(new UiStoreActionSetScrollTop(this.mainContent.nativeElement.scrollTop));
    });
  }

  onSidenavOpenedChange(value): void {
    if (value) {
      this.uiStore$.dispatch(new UiStoreActionOpenMenu());
    } else {
      this.uiStore$.dispatch(new UiStoreActionCloseMenu());
    }
  }

  linkClicked(): void {
    this.uiStore$.dispatch(new UiStoreActionCloseMenu());
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }
}
