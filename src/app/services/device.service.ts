import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiStoreActionSetDeviceWidth } from '../stores/ui/ui-store-actions';
import { UiStoreState } from '../stores/ui/ui-store-state';

@Injectable()
export class DeviceService {
  constructor(private uiStore$: Store<UiStoreState>) {}

  initialize(): void {
    this.refreshStore();
  }

  refresh(): void {
    this.refreshStore();
  }

  private refreshStore(): void {
    this.uiStore$.dispatch(new UiStoreActionSetDeviceWidth(window.innerWidth));
  }
}
