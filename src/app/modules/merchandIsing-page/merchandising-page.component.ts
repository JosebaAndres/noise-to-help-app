import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SignatureModel } from 'src/app/models/signature-model';
import { UiStoreActionAddSignature, UiStoreActionRemoveSignature } from 'src/app/stores/ui/ui-store-actions';
import { UiStoreState } from 'src/app/stores/ui/ui-store-state';

const LOGO_CAMISETAS_AHORA: SignatureModel = {
  id: 'logo-noise-to-help',
  imagePath: 'assets/images/logo-camisetas-ahora-200.png',
};

@Component({
  selector: 'app-merchandising-page',
  templateUrl: './merchandising-page.component.html',
  styleUrls: ['./merchandising-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchandisingPageComponent implements OnInit, OnDestroy {
  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.uiStore$.dispatch(new UiStoreActionAddSignature(LOGO_CAMISETAS_AHORA));
  }

  ngOnDestroy(): void {
    this.uiStore$.dispatch(new UiStoreActionRemoveSignature(LOGO_CAMISETAS_AHORA));
  }
}
