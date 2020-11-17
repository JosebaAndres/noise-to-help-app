import { ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { DeviceType } from '../../models/device-type';
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

  constructor(private uiStore$: Store<UiStoreState>) {
    this.deviceType$ = this.uiStore$.select(uiStoreSelectDeviceType);
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }
}
