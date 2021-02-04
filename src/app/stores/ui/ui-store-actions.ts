import { Action } from '@ngrx/store';
import { DeviceType } from 'src/app/models/device-type';
import { SignatureModel } from 'src/app/models/signature-model';
import { SignatureModule } from 'src/app/modules/signature/signature.module';
import { MediaQueryAlias } from '../../models/media-query-alias';

export enum UiStoreActionTypes {
  OpenMenu = '[UI] Open menu',
  CloseMenu = '[UI] Close menu',
  ToggleMenu = '[UI] Toggle menu',
  SetDeviceWidth = '[UI] set device width',
  SetMediaQuery = '[UI] set media query',
  SetDeviceType = '[UI] set device type',
  SetScrollTop = '[UI] set scroll top',
  SetDocumentWidth = '[UI] set document width',
  AddSignature = '[UI] add a signature',
  RemoveSignature = '[UI] remove a signature',
  SetSignatures = '[UI] set signature list',
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

export class UiStoreActionSetScrollTop implements Action {
  readonly type = UiStoreActionTypes.SetScrollTop;
  constructor(public payload: number) {}
}

export class UiStoreActionSetDocumentWidth implements Action {
  readonly type = UiStoreActionTypes.SetDocumentWidth;
  constructor(public payload: number) {}
}

export class UiStoreActionAddSignature implements Action {
  readonly type = UiStoreActionTypes.AddSignature;
  constructor(public payload: SignatureModel) {}
}

export class UiStoreActionRemoveSignature implements Action {
  readonly type = UiStoreActionTypes.RemoveSignature;
  constructor(public payload: SignatureModel) {}
}

export class UiStoreActionSetSignatures implements Action {
  readonly type = UiStoreActionTypes.SetSignatures;
  constructor(public payload: Array<SignatureModel>) {}
}

export type UiStoreActions =
  | UiStoreActionOpenMenu
  | UiStoreActionCloseMenu
  | UiStoreActionToggleMenu
  | UiStoreActionSetDeviceWidth
  | UiStoreActionSetMediaQuery
  | UiStoreActionSetDeviceType
  | UiStoreActionSetScrollTop
  | UiStoreActionSetDocumentWidth
  | UiStoreActionAddSignature
  | UiStoreActionRemoveSignature
  | UiStoreActionSetSignatures;
