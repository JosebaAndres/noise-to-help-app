import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, ViewModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
