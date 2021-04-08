import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Injectable()
export class CarouselService implements OnDestroy {
  private itemsMaxWidth: number;
  private itemsMaxHeight: number;
  private appCarousel: ElementRef<HTMLDivElement>;
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private carouselWidthSubject = new BehaviorSubject<number>(null);
  private carouselHeightSubject = new BehaviorSubject<number>(null);
  private refreshCarousel$ = new Subject<void>();
  private destroy$ = new ReplaySubject<any>();
  private contentWidth: number;

  loading$: Observable<boolean>;
  carouselWidth$: Observable<number>;
  carouselHeight$: Observable<number>;

  constructor(private uiStoreFacade: UiStoreFacade) {
    this.loading$ = this.loadingSubject.asObservable();
    this.carouselWidth$ = this.carouselWidthSubject.asObservable();
    this.carouselHeight$ = this.carouselHeightSubject.asObservable();

    this.refreshCarousel$.pipe(debounceTime(200)).subscribe(() => {
      this.refreshContentWidth();
      this.refreshLoading();
    });

    this.uiStoreFacade
      .selectDocumentWidth()
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadingSubject.next(true);
        this.refreshCarousel$.next();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }

  setAppCarousel(value: ElementRef<HTMLDivElement>): void {
    this.appCarousel = value;
    this.refreshContentWidth();
    this.refreshLoading();
  }

  setItemsMaxValues(width: number, height: number): void {
    this.itemsMaxWidth = width;
    this.itemsMaxHeight = height;
    this.refreshCarouselSize();
  }

  private refreshContentWidth(): void {
    this.contentWidth = this.appCarousel.nativeElement.offsetWidth;
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

  private refreshLoading(): void {
    if (this.carouselWidthSubject.value) {
      this.loadingSubject.next(false);
    } else {
      this.loadingSubject.next(true);
    }
  }
}
