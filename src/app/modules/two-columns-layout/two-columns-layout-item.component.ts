import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-columns-layout-item',
  templateUrl: './two-columns-layout-item.component.html',
  styleUrls: ['./two-columns-layout-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoColumnsLayoutItemComponent {}
