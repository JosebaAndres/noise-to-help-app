import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { PartnersPageComponent } from './partners-page.component';
import { PartnersPageRoutingModule } from './partners-page-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PartnersPageComponent],
  imports: [CommonModule, PartnersPageRoutingModule, ViewModule, RouterModule],
  exports: [PartnersPageComponent],
})
export class PartnersPageModule {}
