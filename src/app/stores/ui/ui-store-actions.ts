import { Action } from '@ngrx/store';

export enum UiStoreActionTypes {
  OpenMenu = '[UI] Open menu',
  OpenMenuSuccess = '[UI] Open menu Success',
  CloseMenu = '[UI] Close menu',
  CloseMenuSuccess = '[UI] Close menu Success',
  ToggleMenu = '[UI] Toggle menu',
}

export class UiStoreActionOpenMenu implements Action {
  readonly type = UiStoreActionTypes.OpenMenu;
}

export class UiStoreActionOpenMenuSuccess implements Action {
  readonly type = UiStoreActionTypes.OpenMenuSuccess;
  constructor(public payload: { menuOpened: boolean }) {}
}

export class UiStoreActionCloseMenu implements Action {
  readonly type = UiStoreActionTypes.CloseMenu;
}

export class UiStoreActionCloseMenuSuccess implements Action {
  readonly type = UiStoreActionTypes.CloseMenuSuccess;
  constructor(public payload: { menuOpened: boolean }) {}
}

export class UiStoreActionToggleMenu implements Action {
  readonly type = UiStoreActionTypes.ToggleMenu;
}

export type UiStoreActions =
  | UiStoreActionOpenMenu
  | UiStoreActionOpenMenuSuccess
  | UiStoreActionCloseMenu
  | UiStoreActionCloseMenuSuccess
  | UiStoreActionToggleMenu;
