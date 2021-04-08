import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CarouselComponent, CarouselItemDirective],
})
export class CarouselModule {}
