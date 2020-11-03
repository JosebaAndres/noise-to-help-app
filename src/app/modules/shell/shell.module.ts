import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { NavbarModule } from '../navbar/navbar.module';
import { UiStoreModule } from '../../stores/ui/ui-store.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, NavbarModule, UiStoreModule, MatSidenavModule, MatButtonModule, RouterModule],
  exports: [ShellComponent],
})
export class ShellModule {}
