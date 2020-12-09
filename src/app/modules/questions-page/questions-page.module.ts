import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { QuestionsPageComponent } from './questions-page.component';
import { QuestionsPageRoutingModule } from './questions-page-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { TypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [QuestionsPageComponent],
  imports: [CommonModule, QuestionsPageRoutingModule, ViewModule, MatExpansionModule, TypographyModule],
  exports: [QuestionsPageComponent],
})
export class QuestionsUsPageModule {}
