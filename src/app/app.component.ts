import { ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { uiStoreActionSetDeviceWidth, uiStoreActionSetDocumentWidth } from './stores/ui/ui-store-actions';
import { UiStoreState } from './stores/ui/ui-store-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.uiStore$.dispatch(uiStoreActionSetDeviceWidth(window.innerWidth));
    this.uiStore$.dispatch(uiStoreActionSetDocumentWidth(window.innerWidth));
  }

  constructor(private uiStore$: Store<UiStoreState>) {
    this.uiStore$.dispatch(uiStoreActionSetDeviceWidth(window.innerWidth));
    this.uiStore$.dispatch(uiStoreActionSetDocumentWidth(window.innerWidth));
  }
}
