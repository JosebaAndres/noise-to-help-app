import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoColumnsLayoutComponent } from './two-columns-layout.component';
import { TwoColumnsLayoutItemComponent } from './two-columns-layout-item.component';

@NgModule({
  declarations: [TwoColumnsLayoutComponent, TwoColumnsLayoutItemComponent],
  imports: [CommonModule],
  exports: [TwoColumnsLayoutComponent, TwoColumnsLayoutItemComponent],
})
export class TwoColumnsLayoutModule {}
