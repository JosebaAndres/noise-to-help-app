import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { MerchandisingPageComponent } from './merchandising-page.component';
import { MerchandisingPageRoutingModule } from './merchandising-page-routing.module';
import { TypographyModule } from '../typography/typography.module';
import { ImgModule } from '../img/img.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MerchandisingStoreModule } from 'src/app/stores/merchandising/merchandising-store.module';

@NgModule({
  declarations: [MerchandisingPageComponent],
  imports: [
    CommonModule,
    MerchandisingPageRoutingModule,
    ViewModule,
    TypographyModule,
    ImgModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MerchandisingStoreModule,
  ],
  exports: [MerchandisingPageComponent],
})
export class MerchandisingUsPageModule {}
