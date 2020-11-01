import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, CustomIconsModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
