import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teaming-page',
  templateUrl: './teaming-page.component.html',
  styleUrls: ['./teaming-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamingPageComponent {}
