import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SignatureModel } from 'src/app/models/signature-model';
import { FormGroup, FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';
import { MerchandisingStoreFacade } from 'src/app/stores/merchandising/merchandising-store-facade';
import { WomanSizeModel } from 'src/app/models/woman-size-model';
import { ManSizeModel } from 'src/app/models/man-size-model copy';

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

  womanTableDisplayedColumns: string[] = ['description', 's', 'm', 'l', 'xl', 'xxl'];
  manTableDisplayedColumns: string[] = ['description', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  paypalFormValue$: Observable<string>;
  womanSizes$: Observable<Array<WomanSizeModel>>;
  manSizes$: Observable<Array<ManSizeModel>>;

  shippingForm = new FormGroup({
    withShipping: new FormControl(true),
  });

  constructor(private uiStoreFacade: UiStoreFacade, private merchandisingStoreFacade: MerchandisingStoreFacade) {}

  ngOnInit(): void {
    this.merchandisingStoreFacade.initForm();
    this.paypalFormValue$ = this.merchandisingStoreFacade.selectPaypalFormValue();
    this.womanSizes$ = this.merchandisingStoreFacade.selectWomanSizes();
    this.manSizes$ = this.merchandisingStoreFacade.selectManSizes();
    this.merchandisingStoreFacade
      .selectWithShipping()
      .pipe(take(1))
      .subscribe((value) => {
        this.shippingForm.controls.withShipping.setValue(value);
      });
    this.shippingForm.controls.withShipping.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.merchandisingStoreFacade.setWithShipping(value);
    });
    this.uiStoreFacade.addSignature(LOGO_CAMISETAS_AHORA);
    this.uiStoreFacade.addSignature(LOGO_CHICXS);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_CAMISETAS_AHORA);
    this.uiStoreFacade.removeSignature(LOGO_CHICXS);
    this.destroy$.next({});
  }
}
