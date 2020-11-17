import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsStoreEffects } from './events-store-effects';
import { eventsStoreKey } from './events-store-key';
import { eventsReducer } from './events-store-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(eventsStoreKey, eventsReducer),
    EffectsModule.forFeature([EventsStoreEffects]),
  ],
  declarations: [],
})
export class EventsStoreModule {}
