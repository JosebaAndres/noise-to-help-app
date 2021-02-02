import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenteredLayoutComponent } from './centered-layout.component';

@NgModule({
  declarations: [CenteredLayoutComponent],
  imports: [CommonModule],
  exports: [CenteredLayoutComponent],
})
export class CenteredLayoutModule {}
