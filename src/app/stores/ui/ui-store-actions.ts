import { createAction } from '@ngrx/store';
import { DeviceType } from 'src/app/models/device-type';
import { SignatureModel } from 'src/app/models/signature-model';
import { MediaQueryAlias } from '../../models/media-query-alias';

export const uiStoreActionOpenMenu = createAction('[UI] Open menu');

export const uiStoreActionCloseMenu = createAction('[UI] Close menu');

export const uiStoreActionToggleMenu = createAction('[UI] Toggle menu');

export const uiStoreActionSetDeviceWidth = createAction('[UI] set device width', (deviceWidth: number) => ({
  deviceWidth,
}));

export const uiStoreActionSetMediaQuery = createAction('[UI] set media query', (mediaQuery: MediaQueryAlias) => ({
  mediaQuery,
}));

export const uiStoreActionSetDeviceType = createAction('[UI] set device type', (deviceType: DeviceType) => ({
  deviceType,
}));

export const uiStoreActionSetScrollTop = createAction('[UI] set scroll top', (scrollTop: number) => ({
  scrollTop,
}));

export const uiStoreActionSetDocumentWidth = createAction('[UI] set document width', (documentWidth: number) => ({
  documentWidth,
}));

export const uiStoreActionAddSignature = createAction('[UI] add a signature', (signatureModel: SignatureModel) => ({
  signatureModel,
}));

export const uiStoreActionRemoveSignature = createAction(
  '[UI] remove a signature',
  (signatureModel: SignatureModel) => ({
    signatureModel,
  }),
);

export const uiStoreActionSetSignatures = createAction(
  '[UI] set signature list',
  (signatureModels: Array<SignatureModel>) => ({
    signatureModels,
  }),
);
