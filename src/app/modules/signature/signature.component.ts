import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureComponent {
  @Input() imagePath: string;

  constructor(private domSanitizer: DomSanitizer) {}

  getImagePath(): SafeUrl {
    if (this.imagePath) {
      return this.domSanitizer.bypassSecurityTrustUrl(this.imagePath);
    }
    return null;
  }
}
