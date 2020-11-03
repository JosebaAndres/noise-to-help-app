import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiStoreActionToggleMenu } from '../../stores/ui/ui-store-actions';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private uiStore$: Store<UiStoreState>) {}

  toggleMenu(): void {
    this.uiStore$.dispatch(new UiStoreActionToggleMenu());
  }
}
