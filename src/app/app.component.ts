import { ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceService } from './services/device.service';
import { UiStoreActionSetDocumentWidth } from './stores/ui/ui-store-actions';
import { UiStoreState } from './stores/ui/ui-store-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.deviceService.refresh();
  }

  constructor(private deviceService: DeviceService) {}
}
