import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]',
})
export class CarouselItemDirective {
  constructor(renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'carousel-cell');
  }
}
