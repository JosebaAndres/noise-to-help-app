import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ViewModule } from '../view/view.module';
import { ResponsiveBannerContainerModule } from '../responsive-banner-container/responsive-banner-container.module';
import { TypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, ViewModule, ResponsiveBannerContainerModule, TypographyModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
