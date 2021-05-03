import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { UiStoreFacade } from 'src/app/stores/ui/ui-store-facade';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgComponent {
  @Input() src: string;

  constructor(private uiStoreFacade: UiStoreFacade) {}

  onImgLoad() {
    this.uiStoreFacade.imgLoaded();
  }
}
