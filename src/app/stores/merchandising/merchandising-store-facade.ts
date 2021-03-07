import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  merchandisingStoreActionInitForm,
  merchandisingStoreActionSetWithShipping,
} from './merchandising-store-actions';
import {
  merchandisingStoreSelectPaypalFormValue,
  merchandisingStoreSelectWithShipping,
} from './merchandising-store-selectors';
import { MerchandisingStoreState } from './merchandising-store-state';

@Injectable()
export class MerchandisingStoreFacade {
  constructor(private merchandisingStore$: Store<MerchandisingStoreState>) {}

  selectWithShipping(): Observable<boolean> {
    return this.merchandisingStore$.select(merchandisingStoreSelectWithShipping);
  }

  selectPaypalFormValue(): Observable<string> {
    return this.merchandisingStore$.select(merchandisingStoreSelectPaypalFormValue);
  }

  initForm(): void {
    this.merchandisingStore$.dispatch(merchandisingStoreActionInitForm());
  }

  setWithShipping(value: boolean): void {
    this.merchandisingStore$.dispatch(merchandisingStoreActionSetWithShipping(value));
  }
}
