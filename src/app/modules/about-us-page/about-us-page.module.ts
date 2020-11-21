import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { AboutUsPageComponent } from './about-us-page.component';
import { AboutUsPageRoutingModule } from './about-us-page-routing.module';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, AboutUsPageRoutingModule, ViewModule],
  exports: [AboutUsPageComponent],
})
export class AboutUsPageModule {}
