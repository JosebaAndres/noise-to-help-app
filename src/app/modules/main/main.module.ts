import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ViewModule],
  exports: [MainComponent],
})
export class MainModule {}
