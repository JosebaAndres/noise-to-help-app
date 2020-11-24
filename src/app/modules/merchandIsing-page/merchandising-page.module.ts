import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { MerchandisingPageComponent } from './merchandising-page.component';
import { MerchandisingPageRoutingModule } from './merchandising-page-routing.module';

@NgModule({
  declarations: [MerchandisingPageComponent],
  imports: [CommonModule, MerchandisingPageRoutingModule, ViewModule],
  exports: [MerchandisingPageComponent],
})
export class MerchandisingUsPageModule {}
