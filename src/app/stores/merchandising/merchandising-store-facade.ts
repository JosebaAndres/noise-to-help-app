import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManSizeModel } from 'src/app/models/man-size-model copy';
import { WomanSizeModel } from 'src/app/models/woman-size-model';
import {
  merchandisingStoreActionInitForm,
  merchandisingStoreActionSetWithShipping,
} from './merchandising-store-actions';
import {
  merchandisingStoreSelectManSizes,
  merchandisingStoreSelectPaypalFormValue,
  merchandisingStoreSelectWithShipping,
  merchandisingStoreSelectWomanSizes,
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

  selectWomanSizes(): Observable<Array<WomanSizeModel>> {
    return this.merchandisingStore$.select(merchandisingStoreSelectWomanSizes);
  }

  selectManSizes(): Observable<Array<ManSizeModel>> {
    return this.merchandisingStore$.select(merchandisingStoreSelectManSizes);
  }

  initForm(): void {
    this.merchandisingStore$.dispatch(merchandisingStoreActionInitForm());
  }

  setWithShipping(value: boolean): void {
    this.merchandisingStore$.dispatch(merchandisingStoreActionSetWithShipping(value));
  }
}
