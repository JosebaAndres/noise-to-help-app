import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacebookPageComponent {}
