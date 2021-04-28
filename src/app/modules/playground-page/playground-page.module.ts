import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { PlaygroundPageComponent } from './playground-page.component';
import { PlaygroundPageRoutingModule } from './playground-page-routing.module';
import { CardModule } from '../card/card.module';
import { TypographyModule } from '../typography/typography.module';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [PlaygroundPageComponent],
  imports: [CommonModule, PlaygroundPageRoutingModule, ViewModule, CardModule, TypographyModule, AlertModule],
  exports: [PlaygroundPageComponent],
})
export class PlaygroundPageModule {}
