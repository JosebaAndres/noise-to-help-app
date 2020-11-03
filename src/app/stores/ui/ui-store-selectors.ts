import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiStoreKey } from './ui-store-key';
import { UiStoreState } from './ui-store-state';

const getUiStoreState = createFeatureSelector<UiStoreState>(uiStoreKey);

export const uiStoreSelectMenuOpened = createSelector(getUiStoreState, (state) => state.menuOpened);
