import { animate, AnimationBuilder, AnimationFactory, style } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselService } from './carousel-service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CarouselService],
})
export class CarouselComponent implements OnInit, OnChanges {
  private currentSlide = 0;

  @ViewChild('carouselSizeElement', { static: true }) carouselSizeElement: ElementRef<HTMLElement>;

  @ViewChild('carouselContent', { static: false }) carouselContent: ElementRef<HTMLDivElement>;

  @Input()
  itemsMaxWidth: number;

  @Input()
  itemsMaxHeight: number;

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;

  carouselWidth$: Observable<number>;
  carouselHeight$: Observable<number>;

  currentSlideIsFirst = true;
  currentSlideIsLast = false;

  constructor(
    private carouselService: CarouselService,
    private builder: AnimationBuilder,
    private cdr: ChangeDetectorRef,
  ) {
    this.carouselWidth$ = this.carouselService.carouselWidth$;
    this.carouselHeight$ = this.carouselService.carouselHeight$;
  }

  private buildAnimation(offset): AnimationFactory {
    return this.builder.build([animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))]);
  }

  private refreshCurrentSlideIsFirst(): void {
    if (this.currentSlide === 0 && this.currentSlideIsFirst === false) {
      this.currentSlideIsFirst = true;
      this.cdr.markForCheck();
    } else if (this.currentSlideIsFirst === true) {
      this.currentSlideIsFirst = false;
      this.cdr.markForCheck();
    }
  }

  private refreshCurrentSlideIsLast(): void {
    if (this.currentSlide + 1 === this.items.length && this.currentSlideIsLast === false) {
      this.currentSlideIsLast = true;
      this.cdr.markForCheck();
    } else if (this.currentSlideIsLast === true) {
      this.currentSlideIsLast = false;
      this.cdr.markForCheck();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsMaxWidth && changes.itemsMaxHeight) {
      this.carouselService.setItemsMaxValues(this.itemsMaxWidth, this.itemsMaxHeight);
    }
  }

  ngOnInit(): void {
    this.carouselService.setAppCarousel(this.carouselSizeElement);
  }

  previous(): void {
    if (this.currentSlide !== 0) {
      this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
      this.carouselService.carouselWidth$.pipe(take(1)).subscribe((carouselWidth) => {
        const offset = this.currentSlide * carouselWidth;
        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        const player = myAnimation.create(this.carouselContent.nativeElement);
        player.play();
        this.refreshCurrentSlideIsFirst();
        this.refreshCurrentSlideIsLast();
      });
    }
  }

  next(): void {
    if (this.currentSlide + 1 !== this.items.length) {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
      this.carouselService.carouselWidth$.pipe(take(1)).subscribe((carouselWidth) => {
        const offset = this.currentSlide * carouselWidth;
        const myAnimation = this.buildAnimation(offset);
        const player = myAnimation.create(this.carouselContent.nativeElement);
        player.play();
        this.refreshCurrentSlideIsFirst();
        this.refreshCurrentSlideIsLast();
      });
    }
  }
}
