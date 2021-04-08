import {
  ChangeDetectionStrategy,
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
  @ViewChild('appCarousel', { static: true }) appCarousel: ElementRef<HTMLDivElement>;

  @Input()
  itemsMaxWidth: number;

  @Input()
  itemsMaxHeight: number;

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;

  loading$: Observable<boolean>;
  carouselWidth$: Observable<number>;
  carouselHeight$: Observable<number>;

  constructor(private carouselService: CarouselService) {
    this.loading$ = this.carouselService.loading$;
    this.carouselWidth$ = this.carouselService.carouselWidth$;
    this.carouselHeight$ = this.carouselService.carouselHeight$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsMaxWidth && changes.itemsMaxHeight) {
      this.carouselService.setItemsMaxValues(this.itemsMaxWidth, this.itemsMaxHeight);
    }
  }

  ngOnInit(): void {
    this.carouselService.setAppCarousel(this.appCarousel);
  }
}
