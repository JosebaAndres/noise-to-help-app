import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { QuestionsPageComponent } from './questions-page.component';
import { QuestionsPageRoutingModule } from './questions-page-routing.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';

@NgModule({
  declarations: [QuestionsPageComponent],
  imports: [CommonModule, QuestionsPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [QuestionsPageComponent],
})
export class QuestionsUsPageModule {}
