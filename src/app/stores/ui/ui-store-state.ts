import { DeviceType } from 'src/app/models/device-type';
import { environment } from 'src/environments/environment';
import { MediaQueryAlias } from '../../models/media-query-alias';
import { MenuItemModel, MenuItemModelType } from '../../models/menu-item-model';

export interface UiStoreState {
  menuOpened: boolean;
  subMenuItems: Array<MenuItemModel>;
  mediaQuery: MediaQueryAlias;
  deviceType: DeviceType;
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
    description: 'Merchandising',
    routerLink: '/merchandising',
    type: MenuItemModelType.default,
  },
  {
    description: 'Eventos',
    routerLink: '/events',
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

export const SUB_MENU_ITEMS_DEV: Array<MenuItemModel> = SUB_MENU_ITEMS.concat([
  {
    description: 'Playground',
    routerLink: '/playground',
    type: MenuItemModelType.default,
  },
]);

export const initialUiStoreState: UiStoreState = {
  menuOpened: false,
  subMenuItems: !environment.playground ? SUB_MENU_ITEMS : SUB_MENU_ITEMS_DEV,
  mediaQuery: MediaQueryAlias.xs,
  deviceType: DeviceType.phone,
};
