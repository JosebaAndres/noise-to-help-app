import { createAction } from '@ngrx/store';

export const merchandisingStoreActionInitForm = createAction('[Merchandising] Init form');

export const merchandisingStoreActionSetWithShipping = createAction(
  '[Merchandising] set with shipping',
  (withShipping: boolean) => ({
    withShipping,
  }),
);

export const merchandisingStoreActionSetPaypalFormValue = createAction(
  '[Merchandising] set Paypal form value',
  (paypalFormValue: string) => ({
    paypalFormValue,
  }),
);
