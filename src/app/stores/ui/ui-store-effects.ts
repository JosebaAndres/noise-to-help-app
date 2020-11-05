import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import {
  UiStoreActionCloseMenu,
  UiStoreActionOpenMenu,
  UiStoreActionToggleMenu,
  UiStoreActionTypes,
} from './ui-store-actions';
import { uiStoreSelectMenuOpened } from './ui-store-selectors';
import { UiStoreState } from './ui-store-state';

@Injectable()
export class UiStoreEffects {
  constructor(private actions$: Actions, private uiStore$: Store<UiStoreState>) {}

  @Effect()
  toggleMenuEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionToggleMenu>(UiStoreActionTypes.ToggleMenu),
    switchMap(() => this.uiStore$.select(uiStoreSelectMenuOpened).pipe(take(1))),
    map((currentValue) => {
      if (currentValue) {
        return new UiStoreActionCloseMenu();
      } else {
        return new UiStoreActionOpenMenu();
      }
    }),
  );
}
