import { Action } from '@ngrx/store';
import { DeviceType } from 'src/app/models/device-type';
import { MediaQueryAlias } from '../../models/media-query-alias';

export enum UiStoreActionTypes {
  OpenMenu = '[UI] Open menu',
  CloseMenu = '[UI] Close menu',
  ToggleMenu = '[UI] Toggle menu',
  SetDeviceWidth = '[UI] set device width',
  SetMediaQuery = '[UI] set media query',
  SetDeviceType = '[UI] set device type',
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

export class UiStoreActionSetDeviceWidth implements Action {
  readonly type = UiStoreActionTypes.SetDeviceWidth;
  constructor(public payload: number) {}
}

export class UiStoreActionSetMediaQuery implements Action {
  readonly type = UiStoreActionTypes.SetMediaQuery;
  constructor(public payload: MediaQueryAlias) {}
}

export class UiStoreActionSetDeviceType implements Action {
  readonly type = UiStoreActionTypes.SetDeviceType;
  constructor(public payload: DeviceType) {}
}

export type UiStoreActions =
  | UiStoreActionOpenMenu
  | UiStoreActionCloseMenu
  | UiStoreActionToggleMenu
  | UiStoreActionSetDeviceWidth
  | UiStoreActionSetMediaQuery
  | UiStoreActionSetDeviceType;
