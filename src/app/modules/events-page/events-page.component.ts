import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/models/event-model';
import { MediaQueryAlias } from 'src/app/models/media-query-alias';
import { EventsStoreActionLoadEvents } from 'src/app/stores/events/events-store-actions';
import { eventsStoreSelectEvents } from 'src/app/stores/events/events-store-selectors';
import { EventsStoreState } from 'src/app/stores/events/events-store-state';
import { uiStoreSelectMediaQuery } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent implements OnInit {
  mediaQuery$: Observable<MediaQueryAlias>;
  events$: Observable<Array<EventModel>>;

  constructor(private uiStore$: Store<UiStoreState>, private eventsStore$: Store<EventsStoreState>) {
    this.mediaQuery$ = this.uiStore$.select(uiStoreSelectMediaQuery);
    this.events$ = this.eventsStore$.select(eventsStoreSelectEvents);
  }

  ngOnInit(): void {
    this.eventsStore$.dispatch(new EventsStoreActionLoadEvents());
  }
}
