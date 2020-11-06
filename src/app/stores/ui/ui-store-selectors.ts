import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiStoreKey } from './ui-store-key';
import { UiStoreState } from './ui-store-state';

const getUiStoreState = createFeatureSelector<UiStoreState>(uiStoreKey);

export const uiStoreSelectMenuOpened = createSelector(getUiStoreState, (state) => state.menuOpened);

export const uiStoreSelectSubMenuItems = createSelector(getUiStoreState, (state) => state.subMenuItems);

export const uiStoreSelectMediaQuery = createSelector(getUiStoreState, (state) => state.mediaQuery);
