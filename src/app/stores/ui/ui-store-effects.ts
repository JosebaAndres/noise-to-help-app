import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import {
  UiStoreActionCloseMenu,
  UiStoreActionCloseMenuSuccess,
  UiStoreActionOpenMenu,
  UiStoreActionOpenMenuSuccess,
  UiStoreActionToggleMenu,
  UiStoreActionTypes,
} from './ui-store-actions';
import { uiStoreSelectMenuOpened } from './ui-store-selectors';
import { UiStoreState } from './ui-store-state';

@Injectable()
export class UiStoreEffects {
  constructor(private actions$: Actions, private uiStore$: Store<UiStoreState>) {}

  @Effect()
  openMenuEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionOpenMenu>(UiStoreActionTypes.OpenMenu),
    map(() => new UiStoreActionOpenMenuSuccess({ menuOpened: true })),
  );

  @Effect()
  closeMenuEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionCloseMenu>(UiStoreActionTypes.CloseMenu),
    map(() => new UiStoreActionCloseMenuSuccess({ menuOpened: true })),
  );

  @Effect()
  toggleMenuEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionToggleMenu>(UiStoreActionTypes.ToggleMenu),
    switchMap(() => this.uiStore$.select(uiStoreSelectMenuOpened).pipe(take(1))),
    map((currentValue) => {
      return new UiStoreActionOpenMenuSuccess({ menuOpened: !currentValue });
    }),
  );
}
