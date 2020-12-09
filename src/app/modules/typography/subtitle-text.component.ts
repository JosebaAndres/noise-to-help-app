import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subtitle-text',
  templateUrl: './subtitle-text.component.html',
  styleUrls: ['./subtitle-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubTitleTextComponent {}
