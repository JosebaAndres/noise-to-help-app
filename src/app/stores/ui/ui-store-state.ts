import { DeviceType } from 'src/app/models/device-type';
import { MediaQueryAlias } from '../../models/media-query-alias';
import { MenuItemModel } from '../../models/menu-item-model';

export interface UiStoreState {
  menuOpened: boolean;
  subMenuItems: Array<MenuItemModel>;
  mediaQuery: MediaQueryAlias;
  deviceType: DeviceType;
}

export const initialUiStoreState: UiStoreState = {
  menuOpened: false,
  subMenuItems: [
    {
      description: 'Quienes somos',
      routerLink: '/about-us',
    },
    {
      description: 'Eventos',
      routerLink: '/events',
    },
    {
      description: 'Participa',
      routerLink: '/take-part',
    },
    {
      description: 'Colabora',
      routerLink: '/collaborate',
    },
    {
      description: 'Contacto',
      routerLink: '/contact',
    },
  ],
  mediaQuery: MediaQueryAlias.xs,
  deviceType: DeviceType.phone,
};
