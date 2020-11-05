import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-take-part-page',
  templateUrl: './take-part-page.component.html',
  styleUrls: ['./take-part-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TakePartPageComponent {}
