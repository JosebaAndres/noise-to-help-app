import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiStoreState } from './stores/ui/ui-store-state';
import { uiStoreSelectMenuOpened } from './stores/ui/ui-store-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  menuOpened$: Observable<boolean>;

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.menuOpened$ = this.uiStore$.select(uiStoreSelectMenuOpened);
  }
}
