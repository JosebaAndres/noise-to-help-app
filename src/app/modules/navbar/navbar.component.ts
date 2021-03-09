import { ChangeDetectionStrategy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { MenuItemModel } from '../../models/menu-item-model';
import { DeviceType } from 'src/app/models/device-type';
import { combineLatest } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';
import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

const SECONDARY_ICONS_POSITION_ANIMATION: AnimationTriggerMetadata = trigger('secondaryIconsPositionState', [
  state(
    'secondaryToolbar',
    style({
      top: '0px',
    }),
  ),
  state(
    'primaryToolbar',
    style({
      top: '{{top}}',
    }),
    { params: { top: '0px' } },
  ),
  transition('secondaryToolbar => primaryToolbar', animate('0.5s linear')),
  transition('primaryToolbar => secondaryToolbar', animate('0.5s linear')),
]);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [SECONDARY_ICONS_POSITION_ANIMATION],
})
export class NavbarComponent implements OnInit {
  private destroy$ = new ReplaySubject<any>();

  subMenuDefaultItems$: Observable<Array<MenuItemModel>>;
  subMenuPrimaryItems$: Observable<Array<MenuItemModel>>;
  secondaryNavbarTop$: Observable<number>;
  primaryNavbarTop$: Observable<number>;
  secondaryIconsPosition$: Observable<string>;
  secondaryIconsTop$: Observable<string>;
  secondaryIconsPositionState$: Observable<'secondaryToolbar' | 'primaryToolbar'>;
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
        if (values[0] === DeviceType.phone && values[1] > 1) {
          if (values[1] > 32) {
            return `${values[1] + 12}px`;
          } else {
            return `${values[1] + 12 + (32 - values[1])}px`;
          }
        } else {
          return `${0}px`;
        }
      }),
    );
    this.secondaryIconsPositionState$ = combineLatest([
      this.uiStoreFacade.selectDeviceType(),
      this.uiStoreFacade.selectScrollTop(),
    ]).pipe(
      map((values): 'primaryToolbar' | 'secondaryToolbar' => {
        if (values[0] === DeviceType.phone && values[1] > 1) {
          return 'primaryToolbar';
        } else {
          return 'secondaryToolbar';
        }
      }),
      takeUntil(this.destroy$),
    );
    this.isPhone$ = this.uiStoreFacade
      .selectDeviceType()
      .pipe(map((value) => (value === DeviceType.phone ? true : false)));
  }

  toggleMenu(): void {
    this.uiStoreFacade.toggleMenu();
  }
}
