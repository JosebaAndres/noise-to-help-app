import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { DeviceType, PHONE_MAX_MEDIA_QUERY_ALIAS, TABLET_MAX_MEDIA_QUERY_ALIAS } from '../../models/device-type';
import { LG_MAX_SIZE, MD_MAX_SIZE, MediaQueryAlias, SM_MAX_SIZE, XS_MAX_SIZE } from '../../models/media-query-alias';
import { NumberFuctions } from '../../models/number';
import {
  UiStoreActionAddSignature,
  UiStoreActionCloseMenu,
  UiStoreActionOpenMenu,
  UiStoreActionRemoveSignature,
  UiStoreActionSetDeviceType,
  UiStoreActionSetDeviceWidth,
  UiStoreActionSetMediaQuery,
  UiStoreActionSetSignatures,
  UiStoreActionToggleMenu,
  UiStoreActionTypes,
} from './ui-store-actions';
import { uiStoreSelectMenuOpened, uiStoreSelectSignatures } from './ui-store-selectors';
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

  @Effect()
  setDeviceWidthEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionSetDeviceWidth>(UiStoreActionTypes.SetDeviceWidth),
    map((action: UiStoreActionSetDeviceWidth) => action.payload),
    map((value) => {
      let mediaQuery: MediaQueryAlias;
      if (NumberFuctions.isNumber(value)) {
        if (value <= XS_MAX_SIZE) {
          mediaQuery = MediaQueryAlias.xs;
        } else if (value <= SM_MAX_SIZE) {
          mediaQuery = MediaQueryAlias.sm;
        } else if (value <= MD_MAX_SIZE) {
          mediaQuery = MediaQueryAlias.md;
        } else if (value <= LG_MAX_SIZE) {
          mediaQuery = MediaQueryAlias.lg;
        } else {
          mediaQuery = MediaQueryAlias.xl;
        }
      } else {
        mediaQuery = MediaQueryAlias.xs;
      }
      return new UiStoreActionSetMediaQuery(mediaQuery);
    }),
  );

  @Effect()
  setMediaQueryEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionSetMediaQuery>(UiStoreActionTypes.SetMediaQuery),
    map((action: UiStoreActionSetMediaQuery) => action.payload),
    map((value) => {
      if (value <= PHONE_MAX_MEDIA_QUERY_ALIAS) {
        return new UiStoreActionSetDeviceType(DeviceType.phone);
      } else if (value <= TABLET_MAX_MEDIA_QUERY_ALIAS) {
        return new UiStoreActionSetDeviceType(DeviceType.tablet);
      } else {
        return new UiStoreActionSetDeviceType(DeviceType.desktop);
      }
    }),
  );

  @Effect()
  addSignatureEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionAddSignature>(UiStoreActionTypes.AddSignature),
    map((action: UiStoreActionAddSignature) => action.payload),
    switchMap((newSignature) =>
      this.uiStore$.select(uiStoreSelectSignatures).pipe(
        take(1),
        map((signatures) => {
          return new UiStoreActionSetSignatures([...signatures, ...[newSignature]]);
        }),
      ),
    ),
  );

  @Effect()
  removeSignatureEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UiStoreActionRemoveSignature>(UiStoreActionTypes.RemoveSignature),
    map((action: UiStoreActionRemoveSignature) => action.payload),
    switchMap((removeSignature) =>
      this.uiStore$.select(uiStoreSelectSignatures).pipe(
        take(1),
        map((signatures) => {
          const newSignatures = [...signatures];
          const removeSignatureIndex = newSignatures.indexOf(removeSignature);
          if (removeSignatureIndex !== -1) {
            newSignatures.splice(removeSignatureIndex, 1);
          }
          return new UiStoreActionSetSignatures(newSignatures);
        }),
      ),
    ),
  );
}
