import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-page',
  templateUrl: './instagram-page.component.html',
  styleUrls: ['./instagram-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstagramPageComponent {}
