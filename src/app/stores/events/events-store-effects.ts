import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EventsService } from 'src/app/services/events.service';
import {
  EventsStoreActionLoadEvents,
  EventsStoreActionLoadEventsFailure,
  EventsStoreActionLoadEventsSuccess,
  EventsStoreActionTypes,
} from './events-store-actions';

@Injectable()
export class EventsStoreEffects {
  constructor(private actions$: Actions, private eventsService: EventsService) {}

  @Effect()
  loadEventsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<EventsStoreActionLoadEvents>(EventsStoreActionTypes.LoadEvents),
    switchMap(() => this.eventsService.getEvents()),
    map((getEventsResult) => {
      return new EventsStoreActionLoadEventsSuccess({
        events: getEventsResult,
      });
    }),
    catchError(() => of(new EventsStoreActionLoadEventsFailure({ error: 'Error getting evets' }))),
  );
}
