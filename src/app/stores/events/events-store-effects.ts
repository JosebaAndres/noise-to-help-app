import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { DeviceType, PHONE_MAX_MEDIA_QUERY_ALIAS, TABLET_MAX_MEDIA_QUERY_ALIAS } from '../../models/device-type';
import { LG_MAX_SIZE, MD_MAX_SIZE, MediaQueryAlias, SM_MAX_SIZE, XS_MAX_SIZE } from '../../models/media-query-alias';
import { NumberFuctions } from '../../models/number';
import {
  EventsStoreActionLoadEvents,
  EventsStoreActionLoadEventsSuccess,
  EventsStoreActionTypes,
} from './events-store-actions';
import { EventsStoreState } from './events-store-state';

@Injectable()
export class EventsStoreEffects {
  constructor(private actions$: Actions, private eventsStore$: Store<EventsStoreState>) {}

  @Effect()
  loadEventsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<EventsStoreActionLoadEvents>(EventsStoreActionTypes.LoadEvents),
    map(() => {
      return new EventsStoreActionLoadEventsSuccess({
        events: [
          {
            title: 'Subasta camiseta X',
            subtitle: 'Subasta camiseta mitika X usada en X',
            imagePath: './assets/events/001/content.jpg',
            avatarPath: './assets/events/001/avatar.jpg',
            description: [
              'Subasta de una camiseta mitika de la banda X usada por el cantante en el concierto X.',
              'Boletos en venta en X.',
            ],
          },
          {
            title: 'Concierto X',
            subtitle: 'Concierto benéfico el día xx/xx del grupo X',
            imagePath: './assets/events/002/content.jpg',
            avatarPath: './assets/events/002/avatar.jpeg',
            description: ['Concierto benéfico el día xx/xx del grupo X en la sala X.', 'Entradas en venta en X.'],
          },
        ],
      });
    }),
  );
}
