import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-divider',
  templateUrl: './horizontal-divider.component.html',
  styleUrls: ['./horizontal-divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalDividerComponent {}
