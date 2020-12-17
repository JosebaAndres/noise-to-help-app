import { DeviceType } from 'src/app/models/device-type';
import { environment } from 'src/environments/environment';
import { MediaQueryAlias } from '../../models/media-query-alias';
import { MenuItemModel } from '../../models/menu-item-model';

export interface UiStoreState {
  menuOpened: boolean;
  subMenuItems: Array<MenuItemModel>;
  mediaQuery: MediaQueryAlias;
  deviceType: DeviceType;
}

export const SUB_MENU_ITEMS = [
  {
    description: 'Quienes somos',
    routerLink: '/about-us',
  },
  {
    description: 'Hazte socio',
    routerLink: '/partners',
  },
  {
    description: 'Colabora',
    routerLink: '/collaborate',
  },
  {
    description: 'Merchandising',
    routerLink: '/merchandising',
  },
  {
    description: 'Eventos',
    routerLink: '/events',
  },
  {
    description: 'FAQ',
    routerLink: '/questions',
  },
  {
    description: 'Contacto',
    routerLink: '/contact',
  },
];

export const SUB_MENU_ITEMS_DEV = SUB_MENU_ITEMS.concat([
  {
    description: 'Playground',
    routerLink: '/playground',
  },
]);

export const initialUiStoreState: UiStoreState = {
  menuOpened: false,
  subMenuItems: !environment.playground ? SUB_MENU_ITEMS : SUB_MENU_ITEMS_DEV,
  mediaQuery: MediaQueryAlias.xs,
  deviceType: DeviceType.phone,
};
