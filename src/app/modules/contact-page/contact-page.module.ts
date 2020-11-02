import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule, ViewModule, UnderConstructionModule],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
