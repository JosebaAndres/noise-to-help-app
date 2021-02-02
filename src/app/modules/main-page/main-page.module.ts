import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ViewModule } from '../view/view.module';
import { ResponsiveBannerContainerModule } from '../responsive-banner-container/responsive-banner-container.module';
import { TypographyModule } from '../typography/typography.module';
import { UiStoreModule } from 'src/app/stores/ui/ui-store.module';
import { CardModule } from '../card/card.module';
import { CardLModule } from '../card-l/card-l.module';
import { ImgModule } from '../img/img.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ViewModule,
    ResponsiveBannerContainerModule,
    TypographyModule,
    UiStoreModule,
    CardModule,
    CardLModule,
    ImgModule,
    UnderConstructionModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
