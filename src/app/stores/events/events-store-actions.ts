import { Action } from '@ngrx/store';
import { DeviceType } from 'src/app/models/device-type';
import { EventModel } from 'src/app/models/event-model';
import { MediaQueryAlias } from '../../models/media-query-alias';

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
