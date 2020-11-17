import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventsStoreKey } from './events-store-key';
import { EventsStoreState } from './events-store-state';

const getEventsStoreState = createFeatureSelector<EventsStoreState>(eventsStoreKey);

export const eventsStoreSelectEvents = createSelector(getEventsStoreState, (state) => state.events);

export const eventsStoreSelectLoadEventsError = createSelector(getEventsStoreState, (state) => state.loadEventsError);

export const eventsStoreSelectLoadingEvents = createSelector(getEventsStoreState, (state) => state.loadingEvents);
