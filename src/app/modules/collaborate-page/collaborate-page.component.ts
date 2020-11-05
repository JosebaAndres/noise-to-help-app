import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborate-page',
  templateUrl: './collaborate-page.component.html',
  styleUrls: ['./collaborate-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollaboratePageComponent {}
