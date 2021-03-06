import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SignatureModel } from 'src/app/models/signature-model';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { uiStoreActionAddSignature, uiStoreActionRemoveSignature } from 'src/app/stores/ui/ui-store-actions';
import { Store } from '@ngrx/store';
import { UiStoreState } from 'src/app/stores/ui/ui-store-state';

const LOGO_CAMISETAS_AHORA: SignatureModel = {
  id: 'logo-noise-to-help',
  imagePath: 'assets/images/logo-camisetas-ahora-200.png',
};

const LOGO_CHICXS: SignatureModel = {
  id: 'logo-chicxs',
  imagePath: 'assets/images/logo-CHICXS-200.png',
};

@Component({
  selector: 'app-merchandising-page',
  templateUrl: './merchandising-page.component.html',
  styleUrls: ['./merchandising-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchandisingPageComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject<any>();

  paypalFormValue = 'UZAHPQN88SEX4';

  shippingForm = new FormGroup({
    withShipping: new FormControl(true),
  });

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.shippingForm.controls.withShipping.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value) {
        this.paypalFormValue = 'UZAHPQN88SEX4';
      } else {
        this.paypalFormValue = '3WK6CF92GLL48';
      }
    });
    this.uiStore$.dispatch(uiStoreActionAddSignature(LOGO_CAMISETAS_AHORA));
    this.uiStore$.dispatch(uiStoreActionAddSignature(LOGO_CHICXS));
  }

  ngOnDestroy(): void {
    this.uiStore$.dispatch(uiStoreActionRemoveSignature(LOGO_CAMISETAS_AHORA));
    this.uiStore$.dispatch(uiStoreActionRemoveSignature(LOGO_CHICXS));
    this.destroy$.next({});
  }
}
