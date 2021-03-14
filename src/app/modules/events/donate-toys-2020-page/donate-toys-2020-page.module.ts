import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../view/view.module';
import { DonateToys2020PageComponent } from './donate-toys-2020-page.component';
import { DonateToys2020PageRoutingModule } from './donate-toys-2020-page-routing.module';
import { CardModule } from '../../card/card.module';
import { TypographyModule } from '../../typography/typography.module';
import { ImgModule } from '../../img/img.module';

@NgModule({
  declarations: [DonateToys2020PageComponent],
  imports: [CommonModule, DonateToys2020PageRoutingModule, ViewModule, TypographyModule],
  exports: [DonateToys2020PageComponent],
})
export class DonateToys2020PageModule {}
