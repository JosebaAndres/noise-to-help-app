import { Action } from '@ngrx/store';

export enum UiStoreActionTypes {
  OpenMenu = '[UI] Open menu',
  CloseMenu = '[UI] Close menu',
  ToggleMenu = '[UI] Toggle menu',
}

export class UiStoreActionOpenMenu implements Action {
  readonly type = UiStoreActionTypes.OpenMenu;
}

export class UiStoreActionCloseMenu implements Action {
  readonly type = UiStoreActionTypes.CloseMenu;
}

export class UiStoreActionToggleMenu implements Action {
  readonly type = UiStoreActionTypes.ToggleMenu;
}

export type UiStoreActions = UiStoreActionOpenMenu | UiStoreActionCloseMenu | UiStoreActionToggleMenu;
