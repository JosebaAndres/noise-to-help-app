import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { PlaygroundPageComponent } from './playground-page.component';
import { PlaygroundPageRoutingModule } from './playground-page-routing.module';
import { CardModule } from '../card/card.module';
import { CardLModule } from '../card-l/card-l.module';
import { TypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [PlaygroundPageComponent],
  imports: [CommonModule, PlaygroundPageRoutingModule, ViewModule, CardModule, CardLModule, TypographyModule],
  exports: [PlaygroundPageComponent],
})
export class PlaygroundPageModule {}
