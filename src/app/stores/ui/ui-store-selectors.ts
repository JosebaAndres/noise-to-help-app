import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuItemModelType } from 'src/app/models/menu-item-model';
import { uiStoreKey } from './ui-store-key';
import { UiStoreState } from './ui-store-state';

const getUiStoreState = createFeatureSelector<UiStoreState>(uiStoreKey);

export const uiStoreSelectMenuOpened = createSelector(getUiStoreState, (state) => state.menuOpened);

export const uiStoreSelectSubMenuItems = createSelector(getUiStoreState, (state) => state.subMenuItems);

export const uiStoreSelectSubMenuDefaultItems = createSelector(getUiStoreState, (state) =>
  state.subMenuItems.filter((item) => item.type === MenuItemModelType.default),
);

export const uiStoreSelectSubMenuPrimaryItems = createSelector(getUiStoreState, (state) =>
  state.subMenuItems.filter((item) => item.type === MenuItemModelType.primary),
);

export const uiStoreSelectMediaQuery = createSelector(getUiStoreState, (state) => state.mediaQuery);

export const uiStoreSelectDeviceType = createSelector(getUiStoreState, (state) => state.deviceType);

export const uiStoreSelectScrollTop = createSelector(getUiStoreState, (state) => state.scrollTop);

export const uiStoreSelectDocumentWidth = createSelector(getUiStoreState, (state) => state.documentWidth);

export const uiStoreSelectSignatures = createSelector(getUiStoreState, (state) => state.signatures);
