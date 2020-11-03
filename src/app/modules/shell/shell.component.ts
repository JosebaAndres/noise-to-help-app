import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { uiStoreSelectMenuOpened } from '../../stores/ui/ui-store-selectors';
import { UiStoreState } from '../../stores/ui/ui-store-state';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  menuOpened$: Observable<boolean>;

  constructor(private uiStore$: Store<UiStoreState>) {}

  ngOnInit(): void {
    this.menuOpened$ = this.uiStore$.select(uiStoreSelectMenuOpened);
  }
}
