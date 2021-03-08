import { createFeatureSelector, createSelector } from '@ngrx/store';
import { merchandisingStoreKey } from './merchandising-store-key';
import { MerchandisingStoreState } from './merchandising-store-state';

const getMerchandisingStoreState = createFeatureSelector<MerchandisingStoreState>(merchandisingStoreKey);

export const merchandisingStoreSelectWithShipping = createSelector(
  getMerchandisingStoreState,
  (state) => state.withShipping,
);

export const merchandisingStoreSelectPaypalFormValue = createSelector(
  getMerchandisingStoreState,
  (state) => state.paypalFormValue,
);

export const merchandisingStoreSelectWomanSizes = createSelector(
  getMerchandisingStoreState,
  (state) => state.womanSizes,
);

export const merchandisingStoreSelectManSizes = createSelector(getMerchandisingStoreState, (state) => state.manSizes);
