import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { InstagramPageComponent } from './instagram-page.component';
import { InstagramPageRoutingModule } from './instagram-page-routing.module';

@NgModule({
  declarations: [InstagramPageComponent],
  imports: [CommonModule, InstagramPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [InstagramPageComponent],
})
export class InstagramPageModule {}
