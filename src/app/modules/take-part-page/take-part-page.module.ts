import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { TakePartPageComponent } from './take-part-page.component';
import { TakePartPageRoutingModule } from './take-part-page-routing.module';

@NgModule({
  declarations: [TakePartPageComponent],
  imports: [CommonModule, TakePartPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [TakePartPageComponent],
})
export class TakePartUsPageModule {}
