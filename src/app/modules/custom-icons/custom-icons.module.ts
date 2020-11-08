import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule],
})
export class CustomIconsModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.addSvgIcons();
  }

  private addSvgIcons(): void {
    const svgsPath = '../assets/svgs/';
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgsPath}instagram.svg`),
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgsPath}facebook.svg`),
    );
    this.matIconRegistry.addSvgIcon(
      'hamburger',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgsPath}hamburger.svg`),
    );
    this.matIconRegistry.addSvgIcon('mail', this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgsPath}mail.svg`));
  }
}
