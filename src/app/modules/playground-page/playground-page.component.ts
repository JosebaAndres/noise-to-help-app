import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundPageComponent {}
