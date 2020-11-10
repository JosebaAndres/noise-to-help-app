import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imagePath: string;
  @Input() avatarPath: string;

  constructor(private domSanitizer: DomSanitizer) {}

  getImagePath(): SafeUrl {
    if (this.imagePath) {
      return this.domSanitizer.bypassSecurityTrustUrl(this.imagePath);
    }
    return null;
  }

  getAvatarPath(): SafeUrl {
    if (this.avatarPath) {
      return this.domSanitizer.bypassSecurityTrustStyle(`url(${this.avatarPath})`);
    }
    return null;
  }
}
