import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  uiStoreSelectSubMenuDefaultItems,
  uiStoreSelectSubMenuItems,
  uiStoreSelectSubMenuPrimaryItems,
} from '../../stores/ui/ui-store-selectors';
import { UiStoreActionToggleMenu } from '../../stores/ui/ui-store-actions';
import { UiStoreState } from '../../stores/ui/ui-store-state';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../../models/menu-item-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  subMenuDefaultItems$: Observable<Array<MenuItemModel>>;
  subMenuPrimaryItems$: Observable<Array<MenuItemModel>>;

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.subMenuDefaultItems$ = this.uiStore$.select(uiStoreSelectSubMenuDefaultItems);
    this.subMenuPrimaryItems$ = this.uiStore$.select(uiStoreSelectSubMenuPrimaryItems);
  }

  toggleMenu(): void {
    this.uiStore$.dispatch(new UiStoreActionToggleMenu());
  }
}
