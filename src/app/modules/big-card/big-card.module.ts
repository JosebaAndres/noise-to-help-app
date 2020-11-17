import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BigCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [BigCardComponent],
})
export class BigCardModule {}
