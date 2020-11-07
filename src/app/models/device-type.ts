import { MediaQueryAlias } from './media-query-alias';

export const PHONE_MAX_MEDIA_QUERY_ALIAS = MediaQueryAlias.xs;
export const TABLET_MAX_MEDIA_QUERY_ALIAS = MediaQueryAlias.sm;

export enum DeviceType {
  phone = 1,
  tablet = 2,
  desktop = 3,
}
