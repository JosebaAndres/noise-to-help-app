import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselItemComponent } from './carousel-item.component';

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent],
  imports: [CommonModule, IvyCarouselModule],
  exports: [CarouselComponent, CarouselItemComponent],
})
export class CarouselModule {}
