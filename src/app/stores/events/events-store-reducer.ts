import { EventsStoreActions, EventsStoreActionTypes } from './events-store-actions';
import { initialEventsStoreState, EventsStoreState } from './events-store-state';

export function eventsReducer(state = initialEventsStoreState, action: EventsStoreActions): EventsStoreState {
  switch (action.type) {
    case EventsStoreActionTypes.LoadEvents: {
      return {
        ...state,
        loadingEvents: true,
      };
    }

    case EventsStoreActionTypes.LoadEventsFailure: {
      return {
        ...state,
        loadEventsError: action.payload.error,
      };
    }

    case EventsStoreActionTypes.LoadEventsSuccess: {
      return {
        ...state,
        events: action.payload.events,
      };
    }

    default: {
      return state;
    }
  }
}
