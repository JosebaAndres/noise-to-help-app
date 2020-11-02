import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { AboutUsPageComponent } from './about-us-page.component';
import { AboutUsPageRoutingModule } from './about-us-page-routing.module';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, AboutUsPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [AboutUsPageComponent],
})
export class AboutUsPageModule {}
