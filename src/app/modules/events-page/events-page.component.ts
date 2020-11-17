import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/models/event-model';
import { EventsStoreActionLoadEvents } from 'src/app/stores/events/events-store-actions';
import { eventsStoreSelectEvents } from 'src/app/stores/events/events-store-selectors';
import { EventsStoreState } from 'src/app/stores/events/events-store-state';
import { DeviceType } from '../../models/device-type';
import { uiStoreSelectDeviceType } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent implements OnInit {
  deviceType$: Observable<DeviceType>;
  events$: Observable<Array<EventModel>>;

  constructor(private uiStore$: Store<UiStoreState>, private eventsStore$: Store<EventsStoreState>) {
    this.deviceType$ = this.uiStore$.select(uiStoreSelectDeviceType);
    this.events$ = this.eventsStore$.select(eventsStoreSelectEvents);
  }

  ngOnInit(): void {
    this.eventsStore$.dispatch(new EventsStoreActionLoadEvents());
  }
}
