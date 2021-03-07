import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MerchandisingStoreEffects } from './merchandising-store-effects';
import { MerchandisingStoreFacade } from './merchandising-store-facade';
import { merchandisingStoreKey } from './merchandising-store-key';
import { merchandisingReducer } from './merchandising-store-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(merchandisingStoreKey, merchandisingReducer),
    EffectsModule.forFeature([MerchandisingStoreEffects]),
  ],
  declarations: [],
  providers: [MerchandisingStoreFacade],
})
export class MerchandisingStoreModule {}
