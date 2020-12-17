import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaQueryAlias } from 'src/app/models/media-query-alias';
import { uiStoreSelectMediaQuery } from 'src/app/stores/ui/ui-store-selectors';
import { UiStoreState } from 'src/app/stores/ui/ui-store-state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  mediaQuery$: Observable<MediaQueryAlias>;

  constructor(private uiStore$: Store<UiStoreState>) {
    this.mediaQuery$ = this.uiStore$.select(uiStoreSelectMediaQuery);
  }
}
