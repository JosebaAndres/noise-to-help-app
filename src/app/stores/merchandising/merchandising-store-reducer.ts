import { createReducer, on } from '@ngrx/store';
import {
  merchandisingStoreActionSetPaypalFormValue,
  merchandisingStoreActionSetWithShipping,
} from './merchandising-store-actions';
import { initialMerchandisingStoreState } from './merchandising-store-state';

export const merchandisingReducer = createReducer(
  initialMerchandisingStoreState,
  on(merchandisingStoreActionSetWithShipping, (state, { withShipping }) => ({ ...state, withShipping: withShipping })),
  on(merchandisingStoreActionSetPaypalFormValue, (state, { paypalFormValue }) => ({
    ...state,
    paypalFormValue: paypalFormValue,
  })),
);
