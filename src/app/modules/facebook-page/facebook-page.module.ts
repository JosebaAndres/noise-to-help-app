import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { FacebookPageComponent } from './facebook-page.component';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';

@NgModule({
  declarations: [FacebookPageComponent],
  imports: [CommonModule, FacebookPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [FacebookPageComponent],
})
export class FacebookPageModule {}
