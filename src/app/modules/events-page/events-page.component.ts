import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeviceType } from '../../models/device-type';
import { uiStoreSelectDeviceType } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent {
  deviceType$: Observable<DeviceType>;

  constructor(private uiStore$: Store<UiStoreState>) {
    this.deviceType$ = this.uiStore$.select(uiStoreSelectDeviceType);
  }
}
