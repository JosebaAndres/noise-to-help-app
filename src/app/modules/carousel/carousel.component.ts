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
import { ReplaySubject, Subject } from 'rxjs';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy, OnChanges {
  private destroy$ = new ReplaySubject<any>();
  private refreshCarousel$ = new Subject<void>();
  private contentWidth: number;

  @ViewChild('appCarousel', { static: true }) appCarousel: ElementRef<HTMLDivElement>;

  @Input()
  itemsMaxWidth: number;

  @Input()
  itemsMaxHeight: number;

  loading = true;
  carouselWidth: number = null;
  carouselHeight: number = null;

  constructor(private uiStoreFacade: UiStoreFacade, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsMaxWidth && changes.itemsMaxHeight) {
      this.refreshCarouselSize();
    }
  }

  ngOnInit(): void {
    this.refreshContentWidth();
    this.refreshLoading();

    this.refreshCarousel$.pipe(debounceTime(200)).subscribe(() => {
      this.refreshContentWidth();
      this.refreshLoading();
      this.cdr.markForCheck();
    });

    this.uiStoreFacade
      .selectDocumentWidth()
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.loading = true;
        this.refreshCarousel$.next();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }

  private refreshContentWidth() {
    this.contentWidth = this.appCarousel.nativeElement.offsetWidth;
    this.refreshCarouselSize();
  }

  private refreshCarouselSize() {
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

  private refreshLoading() {
    if (this.carouselWidth) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  }
}
