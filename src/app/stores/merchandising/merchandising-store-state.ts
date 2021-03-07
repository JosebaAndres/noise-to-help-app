export const WITH_SHIPPING_PAYPAL_FORM_VALUE = 'UZAHPQN88SEX4';
export const WITHOUT_SHIPPING_PAYPAL_FORM_VALUE = '3WK6CF92GLL48';

export interface MerchandisingStoreState {
  withShipping: boolean;
  paypalFormValue: string;
}

export const initialMerchandisingStoreState: MerchandisingStoreState = {
  withShipping: true,
  paypalFormValue: 'UZAHPQN88SEX4',
};
