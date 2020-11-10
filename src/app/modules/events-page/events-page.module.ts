import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { EventsPageComponent } from './events-page.component';
import { EventsPageRoutingModule } from './events-page-routing.module';
import { CardModule } from '../card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, EventsPageRoutingModule, ViewModule, UnderConstructionModule, CardModule, FlexLayoutModule],
  exports: [EventsPageComponent],
})
export class EventsPageModule {}
