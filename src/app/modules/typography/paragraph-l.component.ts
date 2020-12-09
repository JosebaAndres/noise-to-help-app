import { ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { DeviceType } from 'src/app/models/device-type';
import { uiStoreSelectDeviceType } from 'src/app/stores/ui/ui-store-selectors';
import { UiStoreState } from 'src/app/stores/ui/ui-store-state';

@Component({
  selector: 'app-paragraph-l',
  templateUrl: './paragraph-l.component.html',
  styleUrls: ['./paragraph-l.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphLComponent implements OnDestroy {
  private destroy$ = new Subject<any>();

  deviceType$: Observable<DeviceType>;

  constructor(private uiStore$: Store<UiStoreState>) {
    this.deviceType$ = this.uiStore$.select(uiStoreSelectDeviceType);
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }
}
