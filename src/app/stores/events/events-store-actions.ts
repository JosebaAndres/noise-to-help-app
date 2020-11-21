import { Action } from '@ngrx/store';
import { EventModel } from 'src/app/models/event-model';

export enum EventsStoreActionTypes {
  LoadEvents = '[Events] Load events',
  LoadEventsFailure = '[Events] Load events failure',
  LoadEventsSuccess = '[Events] Load events success',
}

export class EventsStoreActionLoadEvents implements Action {
  readonly type = EventsStoreActionTypes.LoadEvents;
}

export class EventsStoreActionLoadEventsFailure implements Action {
  readonly type = EventsStoreActionTypes.LoadEventsFailure;
  constructor(public payload: { error: string }) {}
}

export class EventsStoreActionLoadEventsSuccess implements Action {
  readonly type = EventsStoreActionTypes.LoadEventsSuccess;
  constructor(public payload: { events: Array<EventModel> }) {}
}

export type EventsStoreActions =
  | EventsStoreActionLoadEvents
  | EventsStoreActionLoadEventsFailure
  | EventsStoreActionLoadEventsSuccess;
