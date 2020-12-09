import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-encourage-text',
  templateUrl: './encourage-text.component.html',
  styleUrls: ['./encourage-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncourageTextComponent {}
