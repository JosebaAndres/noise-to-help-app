import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-banner-container',
  templateUrl: './responsive-banner-container.component.html',
  styleUrls: ['./responsive-banner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveBannerContainerComponent {}
