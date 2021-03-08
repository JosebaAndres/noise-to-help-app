import { ChangeDetectionStrategy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../../models/menu-item-model';
import { DeviceType } from 'src/app/models/device-type';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  subMenuDefaultItems$: Observable<Array<MenuItemModel>>;
  subMenuPrimaryItems$: Observable<Array<MenuItemModel>>;
  secondaryNavbarTop$: Observable<number>;
  primaryNavbarTop$: Observable<number>;
  secondaryIconsPosition$: Observable<string>;
  secondaryIconsTop$: Observable<number>;
  isPhone$: Observable<boolean>;

  @ViewChild('secondaryHiddenIcons', { static: true }) secondaryHiddenIcons: ElementRef<HTMLDivElement>;

  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.subMenuDefaultItems$ = this.uiStoreFacade.selectSubMenuDefaultItems();
    this.subMenuPrimaryItems$ = this.uiStoreFacade.selectSubMenuPrimaryItems();

    this.secondaryNavbarTop$ = combineLatest([
      this.uiStoreFacade.selectDeviceType(),
      this.uiStoreFacade.selectScrollTop(),
    ]).pipe(
      map((values) => {
        if (values[0] === DeviceType.phone) {
          return values[1] * -1;
        } else {
          return 0;
        }
      }),
    );
    this.primaryNavbarTop$ = combineLatest([
      this.uiStoreFacade.selectDeviceType(),
      this.uiStoreFacade.selectScrollTop(),
    ]).pipe(
      map((values) => {
        if (values[0] === DeviceType.phone) {
          return values[1] > 32 ? 0 : 32 - values[1];
        } else {
          return 32;
        }
      }),
    );
    this.secondaryIconsPosition$ = this.uiStoreFacade
      .selectDeviceType()
      .pipe(map((value) => (value === DeviceType.phone ? 'absolute' : 'unset')));
    this.secondaryIconsTop$ = combineLatest([
      this.uiStoreFacade.selectDeviceType(),
      this.uiStoreFacade.selectScrollTop(),
    ]).pipe(
      map((values) => {
        if (values[0] === DeviceType.phone) {
          if (values[1] > 32) {
            if (values[1] > 44) {
              return values[1] + 12;
            } else {
              return values[1] + values[1] - 32;
            }
          } else {
            return values[1];
          }
        } else {
          return 0;
        }
      }),
    );
    this.isPhone$ = this.uiStoreFacade
      .selectDeviceType()
      .pipe(map((value) => (value === DeviceType.phone ? true : false)));
  }

  toggleMenu(): void {
    this.uiStoreFacade.toggleMenu();
  }
}
