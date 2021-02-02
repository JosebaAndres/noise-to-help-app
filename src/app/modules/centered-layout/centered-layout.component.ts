import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-centered-layout',
  templateUrl: './centered-layout.component.html',
  styleUrls: ['./centered-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenteredLayoutComponent {}
