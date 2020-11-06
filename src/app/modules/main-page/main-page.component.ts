import { ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeviceType } from '../../models/device-type';
import { MediaQueryAlias } from '../../models/media-query-alias';
import { uiStoreSelectDeviceType, uiStoreSelectMediaQuery } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnDestroy {
  private destroy$ = new Subject<any>();

  deviceType$: Observable<DeviceType>;

  smallMainContent = true;
  mediumMainContent = false;
  bigMainContent = false;

  constructor(private uiStore$: Store<UiStoreState>, private changeDetectorRef: ChangeDetectorRef) {
    this.deviceType$ = this.uiStore$.select(uiStoreSelectDeviceType);
    this.uiStore$
      .select(uiStoreSelectMediaQuery)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value <= MediaQueryAlias.xs) {
          this.smallMainContent = true;
          this.mediumMainContent = false;
          this.bigMainContent = false;
        } else if (value <= MediaQueryAlias.sm) {
          this.smallMainContent = false;
          this.mediumMainContent = true;
          this.bigMainContent = false;
        } else {
          this.smallMainContent = false;
          this.mediumMainContent = false;
          this.bigMainContent = true;
        }
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }
}
