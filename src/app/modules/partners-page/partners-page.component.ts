import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent {}
