import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { NavbarModule } from '../navbar/navbar.module';
import { UiStoreModule } from '../../stores/ui/ui-store.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SignatureModule } from '../signature/signature.module';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { CenteredLayoutModule } from '../centered-layout/centered-layout.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    NavbarModule,
    UiStoreModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    SignatureModule,
    MatIconModule,
    CustomIconsModule,
    CenteredLayoutModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {}
