import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { CollaboratePageComponent } from './collaborate-page.component';
import { CollaboratePageRoutingModule } from './collaborate-page-routing.module';

@NgModule({
  declarations: [CollaboratePageComponent],
  imports: [CommonModule, CollaboratePageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [CollaboratePageComponent],
})
export class CollaboratePageModule {}
