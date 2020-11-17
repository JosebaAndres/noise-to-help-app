import { EventModel } from 'src/app/models/event-model';

export interface EventsStoreState {
  events: Array<EventModel>;
  loadingEvents: boolean;
  loadEventsError: string;
}

export const initialEventsStoreState: EventsStoreState = {
  events: [],
  loadingEvents: false,
  loadEventsError: undefined,
};
