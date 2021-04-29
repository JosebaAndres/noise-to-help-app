import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Injectable()
export class CarouselService implements OnDestroy {
  private itemsMaxWidth: number;
  private itemsMaxHeight: number;
  private appCarousel: ElementRef<HTMLElement>;
  private carouselWidthSubject = new BehaviorSubject<number>(null);
  private carouselHeightSubject = new BehaviorSubject<number>(null);
  private destroy$ = new ReplaySubject<any>();
  private contentWidth: number;

  carouselWidth$: Observable<number>;
  carouselHeight$: Observable<number>;

  constructor(private uiStoreFacade: UiStoreFacade) {
    this.carouselWidth$ = this.carouselWidthSubject.asObservable();
    this.carouselHeight$ = this.carouselHeightSubject.asObservable();

    this.uiStoreFacade
      .selectDocumentWidth()
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshContentWidth();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }

  private refreshContentWidth(): void {
    this.contentWidth = this.appCarousel.nativeElement.offsetWidth;
    this.refreshCarouselSize();
  }

  setAppCarousel(value: ElementRef<HTMLElement>): void {
    this.appCarousel = value;
    this.refreshContentWidth();
  }

  setItemsMaxValues(width: number, height: number): void {
    this.itemsMaxWidth = width;
    this.itemsMaxHeight = height;
    this.refreshCarouselSize();
  }

  refreshCarouselSize(): void {
    if (this.contentWidth && this.itemsMaxWidth && this.itemsMaxHeight) {
      if (this.contentWidth > this.itemsMaxWidth) {
        this.carouselWidthSubject.next(this.itemsMaxWidth);
      } else {
        this.carouselWidthSubject.next(this.contentWidth);
      }
      this.carouselHeightSubject.next((this.carouselWidthSubject.value * this.itemsMaxHeight) / this.itemsMaxWidth);
    } else {
      this.carouselWidthSubject.next(0);
      this.carouselHeightSubject.next(0);
    }
  }
}
