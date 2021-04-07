import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselItemDirective } from './carousel-item.directive';

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective],
  imports: [CommonModule, IvyCarouselModule],
  exports: [CarouselComponent, CarouselItemDirective],
})
export class CarouselModule {}
