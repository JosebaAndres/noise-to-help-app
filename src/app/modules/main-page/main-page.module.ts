import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ViewModule } from '../view/view.module';
import { TypographyModule } from '../typography/typography.module';
import { UiStoreModule } from 'src/app/stores/ui/ui-store.module';
import { CardModule } from '../card/card.module';
import { ImgModule } from '../img/img.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, ViewModule, TypographyModule, UiStoreModule, CardModule, ImgModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
