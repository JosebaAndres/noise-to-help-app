import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Component } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';

const TIMING = '250ms ease-in';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '.app-carousel__item',
})
// tslint:disable-next-line: directive-class-suffix
export class CarouselItemElement {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterViewInit {
  @Input()
  itemsMaxWidth: number;

  @Input()
  itemsMaxHeight: number;

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;

  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  next(): void {
    if (this.currentSlide + 1 !== this.items.length) {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
      const offset = this.currentSlide * this.itemWidth;
      const myAnimation = this.buildAnimation(offset);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
    }
  }

  private buildAnimation(offset): AnimationFactory {
    return this.builder.build([animate(TIMING, style({ transform: `translateX(-${offset}px)` }))]);
  }

  prev(): void {
    if (this.currentSlide !== 0) {
      this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
      const offset = this.currentSlide * this.itemWidth;

      const myAnimation: AnimationFactory = this.buildAnimation(offset);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
    }
  }

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit(): void {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`,
      };
    });
  }
}
