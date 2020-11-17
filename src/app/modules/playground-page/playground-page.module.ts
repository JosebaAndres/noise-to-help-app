import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { PlaygroundPageComponent } from './playground-page.component';
import { PlaygroundPageRoutingModule } from './playground-page-routing.module';

@NgModule({
  declarations: [PlaygroundPageComponent],
  imports: [CommonModule, PlaygroundPageRoutingModule, ViewModule],
  exports: [PlaygroundPageComponent],
})
export class PlaygroundPageModule {}
