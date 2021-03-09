import { DeviceType } from 'src/app/models/device-type';
import { SignatureModel } from 'src/app/models/signature-model';
import { environment } from 'src/environments/environment';
import { MediaQueryAlias } from '../../models/media-query-alias';
import { MenuItemModel, MenuItemModelType } from '../../models/menu-item-model';

export interface UiStoreState {
  menuOpened: boolean;
  subMenuItems: Array<MenuItemModel>;
  mediaQuery: MediaQueryAlias;
  deviceType: DeviceType;
  scrollTop: number;
  documentWidth: number;
  signatures: Array<SignatureModel>;
}

export const SUB_MENU_ITEMS: Array<MenuItemModel> = [
  {
    description: 'Quienes somos',
    routerLink: '/about-us',
    type: MenuItemModelType.default,
  },
  {
    description: 'Hazte socio',
    routerLink: '/partners',
    type: MenuItemModelType.default,
  },
  {
    description: 'Colabora',
    routerLink: '/collaborate',
    type: MenuItemModelType.primary,
  },
  {
    description: 'Eventos',
    routerLink: '/events',
    type: MenuItemModelType.default,
  },
  {
    description: 'Merchandising',
    routerLink: '/merchandising',
    type: MenuItemModelType.default,
  },
  {
    description: 'FAQ',
    routerLink: '/questions',
    type: MenuItemModelType.default,
  },
  {
    description: 'Contacto',
    routerLink: '/contact',
    type: MenuItemModelType.default,
  },
];

export const SUB_MENU_ITEMS_IN_DEVELOPMENT: Array<MenuItemModel> = [];

export const SUB_MENU_ITEMS_PLAYGROUND: Array<MenuItemModel> = [
  {
    description: 'Playground',
    routerLink: '/playground',
    type: MenuItemModelType.default,
  },
];

function getMenuItems(): Array<MenuItemModel> {
  let result = [...SUB_MENU_ITEMS];
  if (environment.showFeaturesInDevelopment) {
    result = result.concat(SUB_MENU_ITEMS_IN_DEVELOPMENT);
  }
  if (environment.showPlayground) {
    result = result.concat(SUB_MENU_ITEMS_PLAYGROUND);
  }
  return result;
}

export const SIGNATURES: Array<SignatureModel> = [
  {
    id: 'logo-noise-to-help',
    imagePath: 'assets/images/logo-2-200.png',
  },
];

export const initialUiStoreState: UiStoreState = {
  menuOpened: false,
  subMenuItems: getMenuItems(),
  mediaQuery: MediaQueryAlias.xs,
  deviceType: DeviceType.phone,
  scrollTop: 0,
  documentWidth: 0,
  signatures: SIGNATURES,
};
