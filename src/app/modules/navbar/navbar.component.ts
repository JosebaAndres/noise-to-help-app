import { ChangeDetectionStrategy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  uiStoreSelectDeviceType,
  uiStoreSelectScrollTop,
  uiStoreSelectSubMenuDefaultItems,
  uiStoreSelectSubMenuPrimaryItems,
} from '../../stores/ui/ui-store-selectors';
import { uiStoreActionToggleMenu } from '../../stores/ui/ui-store-actions';
import { UiStoreState } from '../../stores/ui/ui-store-state';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../../models/menu-item-model';
import { DeviceType } from 'src/app/models/device-type';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.subMenuDefaultItems$ = this.uiStore$.select(uiStoreSelectSubMenuDefaultItems);
    this.subMenuPrimaryItems$ = this.uiStore$.select(uiStoreSelectSubMenuPrimaryItems);

    this.secondaryNavbarTop$ = combineLatest([
      this.uiStore$.select(uiStoreSelectDeviceType),
      this.uiStore$.select(uiStoreSelectScrollTop),
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
      this.uiStore$.select(uiStoreSelectDeviceType),
      this.uiStore$.select(uiStoreSelectScrollTop),
    ]).pipe(
      map((values) => {
        if (values[0] === DeviceType.phone) {
          return values[1] > 32 ? 0 : 32 - values[1];
        } else {
          return 32;
        }
      }),
    );
    this.secondaryIconsPosition$ = this.uiStore$
      .select(uiStoreSelectDeviceType)
      .pipe(map((value) => (value === DeviceType.phone ? 'absolute' : 'unset')));
    this.secondaryIconsTop$ = combineLatest([
      this.uiStore$.select(uiStoreSelectDeviceType),
      this.uiStore$.select(uiStoreSelectScrollTop),
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
    this.isPhone$ = this.uiStore$
      .select(uiStoreSelectDeviceType)
      .pipe(map((value) => (value === DeviceType.phone ? true : false)));
  }

  toggleMenu(): void {
    this.uiStore$.dispatch(uiStoreActionToggleMenu());
  }
}
