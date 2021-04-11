import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../view/view.module';
import { Meandros2021PageComponent } from './meandros-2021-page.component';
import { Meandros2021RoutingModule } from './meandros-2021-routing.module';
import { TypographyModule } from '../../typography/typography.module';
import { ImgModule } from '../../img/img.module';
import { TwoColumnsLayoutModule } from '../../two-columns-layout/two-columns-layout.module';
import { CarouselModule } from '../../carousel/carousel.module';

@NgModule({
  declarations: [Meandros2021PageComponent],
  imports: [CommonModule, Meandros2021RoutingModule, ViewModule, TypographyModule, TwoColumnsLayoutModule, ImgModule],
  exports: [Meandros2021PageComponent],
})
export class Meandros2021Module {}
