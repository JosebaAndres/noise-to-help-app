import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { NavbarModule } from '../navbar/navbar.module';
import { UiStoreModule } from '../../stores/ui/ui-store.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, NavbarModule, UiStoreModule],
  exports: [ShellComponent],
})
export class ShellModule {}
