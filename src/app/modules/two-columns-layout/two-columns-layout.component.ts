import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-columns-layout',
  templateUrl: './two-columns-layout.component.html',
  styleUrls: ['./two-columns-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoColumnsLayoutComponent {}
