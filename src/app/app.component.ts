import { ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { UiStoreFacade } from './stores/ui/ui-store-facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.uiStoreFacade.setDeviceWidth(window.innerWidth);
  }

  constructor(private uiStoreFacade: UiStoreFacade) {
    this.uiStoreFacade.setDeviceWidth(window.innerWidth);
  }
}
