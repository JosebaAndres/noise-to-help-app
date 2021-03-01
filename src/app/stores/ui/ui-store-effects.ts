import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs/operators';
import { DeviceType, PHONE_MAX_MEDIA_QUERY_ALIAS, TABLET_MAX_MEDIA_QUERY_ALIAS } from 'src/app/models/device-type';
import { LG_MAX_SIZE, MD_MAX_SIZE, MediaQueryAlias, SM_MAX_SIZE, XS_MAX_SIZE } from 'src/app/models/media-query-alias';
import { NumberFuctions } from 'src/app/models/number';
import { SignatureModel } from 'src/app/models/signature-model';
import {
  uiStoreActionAddSignature,
  uiStoreActionCloseMenu,
  uiStoreActionOpenMenu,
  uiStoreActionRemoveSignature,
  uiStoreActionSetDeviceType,
  uiStoreActionSetDeviceWidth,
  uiStoreActionSetMediaQuery,
  uiStoreActionSetSignatures,
  uiStoreActionToggleMenu,
} from './ui-store-actions';
import { uiStoreSelectMenuOpened, uiStoreSelectSignatures } from './ui-store-selectors';
import { UiStoreState } from './ui-store-state';

@Injectable()
export class UiStoreEffects {
  toggleMenuEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiStoreActionToggleMenu),
      switchMap(() => this.uiStore$.select(uiStoreSelectMenuOpened).pipe(take(1))),
      map((currentValue) => {
        if (currentValue) {
          return uiStoreActionCloseMenu();
        } else {
          return uiStoreActionOpenMenu();
        }
      }),
    ),
  );

  setDeviceWidthEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiStoreActionSetDeviceWidth),
      map(({ deviceWidth }) => {
        let mediaQuery: MediaQueryAlias;
        if (NumberFuctions.isNumber(deviceWidth)) {
          if (deviceWidth <= XS_MAX_SIZE) {
            mediaQuery = MediaQueryAlias.xs;
          } else if (deviceWidth <= SM_MAX_SIZE) {
            mediaQuery = MediaQueryAlias.sm;
          } else if (deviceWidth <= MD_MAX_SIZE) {
            mediaQuery = MediaQueryAlias.md;
          } else if (deviceWidth <= LG_MAX_SIZE) {
            mediaQuery = MediaQueryAlias.lg;
          } else {
            mediaQuery = MediaQueryAlias.xl;
          }
        } else {
          mediaQuery = MediaQueryAlias.xs;
        }
        return uiStoreActionSetMediaQuery(mediaQuery);
      }),
    ),
  );

  setMediaQueryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiStoreActionSetMediaQuery),
      map(({ mediaQuery }) => {
        if (mediaQuery <= PHONE_MAX_MEDIA_QUERY_ALIAS) {
          return uiStoreActionSetDeviceType(DeviceType.phone);
        } else if (mediaQuery <= TABLET_MAX_MEDIA_QUERY_ALIAS) {
          return uiStoreActionSetDeviceType(DeviceType.tablet);
        } else {
          return uiStoreActionSetDeviceType(DeviceType.desktop);
        }
      }),
    ),
  );

  addSignatureEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiStoreActionAddSignature),
      switchMap(({ signatureModel }) =>
        this.uiStore$.select(uiStoreSelectSignatures).pipe(
          take(1),
          map((signatures) => {
            return uiStoreActionSetSignatures([...signatures, ...[signatureModel]]);
          }),
        ),
      ),
    ),
  );

  removeSignatureEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiStoreActionRemoveSignature),
      switchMap(({ signatureModel }) =>
        this.uiStore$.select(uiStoreSelectSignatures).pipe(
          take(1),
          map((signatures) => {
            const newSignatures = [...signatures];
            const removeSignatureIndex = newSignatures.indexOf(signatureModel);
            if (removeSignatureIndex !== -1) {
              newSignatures.splice(removeSignatureIndex, 1);
            }
            return uiStoreActionSetSignatures(newSignatures);
          }),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private uiStore$: Store<UiStoreState>) {}
}
