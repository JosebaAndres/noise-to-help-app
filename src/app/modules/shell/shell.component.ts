import { ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiStoreActionCloseMenu, UiStoreActionOpenMenu } from '../../stores/ui/ui-store-actions';
import { uiStoreSelectMenuOpened } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();

  sidenavOpened = false;

  constructor(private uiStore$: Store<UiStoreState>, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.uiStore$
      .select(uiStoreSelectMenuOpened)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (this.sidenavOpened !== value) {
          this.sidenavOpened = value;
          this.changeDetectorRef.markForCheck();
        }
      });
  }

  onSidenavOpenedChange(value): void {
    if (value) {
      this.uiStore$.dispatch(new UiStoreActionOpenMenu());
    } else {
      this.uiStore$.dispatch(new UiStoreActionCloseMenu());
    }
  }

  linkClicked(): void {
    this.uiStore$.dispatch(new UiStoreActionCloseMenu());
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
  }
}
