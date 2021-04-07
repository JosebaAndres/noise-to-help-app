import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../view/view.module';
import { EventsPageComponent } from './events-page.component';
import { EventsPageRoutingModule } from './events-page-routing.module';
import { CardModule } from '../../card/card.module';
import { TypographyModule } from '../../typography/typography.module';
import { ImgModule } from '../../img/img.module';
import { TwoColumnsLayoutModule } from '../../two-columns-layout/two-columns-layout.module';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule,
    EventsPageRoutingModule,
    ViewModule,
    CardModule,
    TypographyModule,
    ImgModule,
    TwoColumnsLayoutModule,
  ],
  exports: [EventsPageComponent],
})
export class EventsPageModule {}