import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { MerchandisingPageComponent } from './merchandising-page.component';
import { MerchandisingPageRoutingModule } from './merchandising-page-routing.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';

@NgModule({
  declarations: [MerchandisingPageComponent],
  imports: [CommonModule, MerchandisingPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [MerchandisingPageComponent],
})
export class MerchandisingUsPageModule {}
