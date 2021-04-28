import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { AlertComponentType } from './alert-component-type';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnChanges {
  @Input() type: AlertComponentType = 'default';

  isInfo = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.refreshType();
    }
  }

  private refreshType() {
    switch (this.type) {
      case 'info':
        this.isInfo = true;
        break;
      default:
        this.isInfo = false;
        break;
    }
  }
}
