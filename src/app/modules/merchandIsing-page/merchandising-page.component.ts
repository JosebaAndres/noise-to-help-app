import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-merchandising-page',
  templateUrl: './merchandising-page.component.html',
  styleUrls: ['./merchandising-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchandisingPageComponent {}
