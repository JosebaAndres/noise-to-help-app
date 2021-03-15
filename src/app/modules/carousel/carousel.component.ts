import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy, OnChanges {
  private destroy$ = new ReplaySubject<any>();
  private contentWidth: number;

  @ViewChild('appCarousel', { static: true }) appCarousel: ElementRef<HTMLDivElement>;

  @Input()
  itemsMaxWidth: number;

  @Input()
  itemsMaxHeight: number;

  carouselWidth: number = null;
  carouselHeight: number = null;

  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsMaxWidth && changes.itemsMaxHeight) {
      this.refreshCarouselSize();
    }
  }

  ngOnInit(): void {
    this.refreshContentWidth();
    this.uiStoreFacade
      .selectDocumentWidth()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshContentWidth();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }

  refreshContentWidth() {
    this.contentWidth = this.appCarousel.nativeElement.offsetWidth;
    this.refreshCarouselSize();
  }

  refreshCarouselSize() {
    if (this.contentWidth && this.itemsMaxWidth && this.itemsMaxHeight) {
      if (this.contentWidth > this.itemsMaxWidth) {
        this.carouselWidth = this.itemsMaxWidth;
      } else {
        this.carouselWidth = this.contentWidth;
      }
      this.carouselHeight = (this.carouselWidth * this.itemsMaxHeight) / this.itemsMaxWidth;
    } else {
      this.carouselWidth = 0;
      this.carouselHeight = 0;
    }
  }
}
