export enum MenuItemModelType {
  default,
  primary,
}

export interface MenuItemModel {
  description: string;
  routerLink: string;
  type: MenuItemModelType;
}
