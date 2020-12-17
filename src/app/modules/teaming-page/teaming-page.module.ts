import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { TeamingPageComponent } from './teaming-page.component';
import { TeamingPageRoutingModule } from './teaming-page-routing.module';
import { TypographyModule } from '../typography/typography.module';
import { UnderConstructionModule } from '../under-construction/under-construction.module';

@NgModule({
  declarations: [TeamingPageComponent],
  imports: [CommonModule, TeamingPageRoutingModule, ViewModule, TypographyModule, UnderConstructionModule],
  exports: [TeamingPageComponent],
})
export class TeamingPageModule {}
