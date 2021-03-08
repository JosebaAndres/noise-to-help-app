import { ManSizeModel } from 'src/app/models/man-size-model copy';
import { WomanSizeModel } from 'src/app/models/woman-size-model';

export const WITH_SHIPPING_PAYPAL_FORM_VALUE = 'UZAHPQN88SEX4';
export const WITHOUT_SHIPPING_PAYPAL_FORM_VALUE = '3WK6CF92GLL48';

export interface MerchandisingStoreState {
  withShipping: boolean;
  paypalFormValue: string;
  womanSizes: Array<WomanSizeModel>;
  manSizes: Array<ManSizeModel>;
}

export const WOMAN_SIZES: Array<WomanSizeModel> = [
  {
    description: 'Anchura',
    s: 40,
    m: 43,
    l: 46,
    xl: 49,
    xxl: 52,
  },
  {
    description: 'Altura',
    s: 60,
    m: 62,
    l: 64,
    xl: 66,
    xxl: 68,
  },
];
export const MAN_SIZES: Array<ManSizeModel> = [
  {
    description: 'Ancho',
    xs: 48,
    s: 51,
    m: 53.5,
    l: 56,
    xl: 58.5,
    xxl: 61,
    xxxl: 66,
  },
  {
    description: 'Largo',
    xs: 68,
    s: 70,
    m: 72,
    l: 74,
    xl: 76,
    xxl: 78,
    xxxl: 82,
  },
];

export const initialMerchandisingStoreState: MerchandisingStoreState = {
  withShipping: true,
  paypalFormValue: 'UZAHPQN88SEX4',
  womanSizes: WOMAN_SIZES,
  manSizes: MAN_SIZES,
};
