import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiStoreEffects } from './ui-store-effects';
import { UiStoreFacade } from './ui-store-facade';
import { uiStoreKey } from './ui-store-key';
import { uiReducer } from './ui-store-reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(uiStoreKey, uiReducer), EffectsModule.forFeature([UiStoreEffects])],
  declarations: [],
  providers: [UiStoreFacade],
})
export class UiStoreModule {}
