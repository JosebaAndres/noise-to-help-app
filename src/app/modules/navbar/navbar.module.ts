import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UiStoreModule } from '../../stores/ui/ui-store.module';
import { CenteredLayoutModule } from '../centered-layout/centered-layout.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    CustomIconsModule,
    RouterModule,
    MatButtonModule,
    UiStoreModule,
    CenteredLayoutModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
