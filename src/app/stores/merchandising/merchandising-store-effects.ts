import { Injectable } from '@angular/core';
import {
  merchandisingStoreActionInitForm,
  merchandisingStoreActionSetPaypalFormValue,
  merchandisingStoreActionSetWithShipping,
} from './merchandising-store-actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { WITHOUT_SHIPPING_PAYPAL_FORM_VALUE, WITH_SHIPPING_PAYPAL_FORM_VALUE } from './merchandising-store-state';

@Injectable()
export class MerchandisingStoreEffects {
  initFormEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(merchandisingStoreActionInitForm),
      map(() => {
        return merchandisingStoreActionSetWithShipping(true);
      }),
    ),
  );

  setWithShipping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(merchandisingStoreActionSetWithShipping),
      map(({ withShipping }) => {
        if (withShipping) {
          return merchandisingStoreActionSetPaypalFormValue(WITH_SHIPPING_PAYPAL_FORM_VALUE);
        } else {
          return merchandisingStoreActionSetPaypalFormValue(WITHOUT_SHIPPING_PAYPAL_FORM_VALUE);
        }
      }),
    ),
  );

  constructor(private actions$: Actions) {}
}
