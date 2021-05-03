import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { DeviceType } from 'src/app/models/device-type';
import { MediaQueryAlias } from 'src/app/models/media-query-alias';
import { MenuItemModel } from 'src/app/models/menu-item-model';
import { SignatureModel } from 'src/app/models/signature-model';
import {
  uiStoreActionAddSignature,
  uiStoreActionCloseMenu,
  uiStoreActionOpenMenu,
  uiStoreActionRemoveSignature,
  uiStoreActionSetDeviceWidth,
  uiStoreActionSetDocumentWidth,
  uiStoreActionSetScrollTop,
  uiStoreActionToggleMenu,
} from './ui-store-actions';
import {
  uiStoreSelectDeviceType,
  uiStoreSelectDocumentWidth,
  uiStoreSelectMediaQuery,
  uiStoreSelectMenuOpened,
  uiStoreSelectScrollTop,
  uiStoreSelectSignatures,
  uiStoreSelectSubMenuDefaultItems,
  uiStoreSelectSubMenuItems,
  uiStoreSelectSubMenuPrimaryItems,
} from './ui-store-selectors';
import { UiStoreState } from './ui-store-state';

@Injectable()
export class UiStoreFacade {
  private imgLoadedSubject = new Subject<void>();

  imgLoaded$: Observable<void>;

  constructor(private uiStore$: Store<UiStoreState>) {
    this.imgLoaded$ = this.imgLoadedSubject.asObservable();
  }

  selectSubMenuItems(): Observable<Array<MenuItemModel>> {
    return this.uiStore$.select(uiStoreSelectSubMenuItems);
  }

  selectMenuOpened(): Observable<boolean> {
    return this.uiStore$.select(uiStoreSelectMenuOpened);
  }

  selectSubMenuDefaultItems(): Observable<Array<MenuItemModel>> {
    return this.uiStore$.select(uiStoreSelectSubMenuDefaultItems);
  }

  selectSubMenuPrimaryItems(): Observable<Array<MenuItemModel>> {
    return this.uiStore$.select(uiStoreSelectSubMenuPrimaryItems);
  }

  selectMediaQuery(): Observable<MediaQueryAlias> {
    return this.uiStore$.select(uiStoreSelectMediaQuery);
  }

  selectDeviceType(): Observable<DeviceType> {
    return this.uiStore$.select(uiStoreSelectDeviceType);
  }

  selectScrollTop(): Observable<number> {
    return this.uiStore$.select(uiStoreSelectScrollTop);
  }

  selectDocumentWidth(): Observable<number> {
    return this.uiStore$.select(uiStoreSelectDocumentWidth);
  }

  selectSignatures(): Observable<Array<SignatureModel>> {
    return this.uiStore$.select(uiStoreSelectSignatures);
  }

  scrollTop(scrollTop: number): void {
    this.uiStore$.dispatch(uiStoreActionSetScrollTop(scrollTop));
  }

  openMenu(): void {
    this.uiStore$.dispatch(uiStoreActionOpenMenu());
  }

  closeMenu(): void {
    this.uiStore$.dispatch(uiStoreActionCloseMenu());
  }

  toggleMenu(): void {
    this.uiStore$.dispatch(uiStoreActionToggleMenu());
  }

  addSignature(signatureModel: SignatureModel): void {
    this.uiStore$.dispatch(uiStoreActionAddSignature(signatureModel));
  }

  removeSignature(signatureModel: SignatureModel): void {
    this.uiStore$.dispatch(uiStoreActionRemoveSignature(signatureModel));
  }

  setDeviceWidth(deviceWidth: number): void {
    this.uiStore$.dispatch(uiStoreActionSetDeviceWidth(deviceWidth));
  }

  setDocumentWidth(documentWidth: number): void {
    this.uiStore$.dispatch(uiStoreActionSetDocumentWidth(documentWidth));
  }

  imgLoaded() {
    this.imgLoadedSubject.next();
  }
}
