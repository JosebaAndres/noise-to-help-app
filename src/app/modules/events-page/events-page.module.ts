import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { EventsPageComponent } from './events-page.component';
import { EventsPageRoutingModule } from './events-page-routing.module';
import { CardModule } from '../card/card.module';
import { CardLModule } from '../card-l/card-l.module';
import { UiStoreModule } from 'src/app/stores/ui/ui-store.module';
import { EventsStoreModule } from 'src/app/stores/events/events-store.module';
import { TypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule,
    EventsPageRoutingModule,
    ViewModule,
    UnderConstructionModule,
    CardModule,
    CardLModule,
    UiStoreModule,
    EventsStoreModule,
    TypographyModule,
  ],
  exports: [EventsPageComponent],
})
export class EventsPageModule {}
