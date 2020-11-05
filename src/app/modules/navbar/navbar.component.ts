import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { uiStoreSelectSubMenuItems } from '../../stores/ui/ui-store-selectors';
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
  subMenuItems$: Observable<Array<MenuItemModel>>;

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.subMenuItems$ = this.uiStore$.select(uiStoreSelectSubMenuItems);
  }

  toggleMenu(): void {
    this.uiStore$.dispatch(new UiStoreActionToggleMenu());
  }
}
