import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLComponent } from './card-l.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardLComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardLComponent],
})
export class CardLModule {}
