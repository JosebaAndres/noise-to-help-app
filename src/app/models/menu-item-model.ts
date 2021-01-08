export enum MenuItemModelType {
  default = 'default',
  primary = 'primary',
}

export interface MenuItemModel {
  description: string;
  routerLink: string;
  type: MenuItemModelType;
}
