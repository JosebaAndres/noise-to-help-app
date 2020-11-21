import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersPageComponent } from './partners-page.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersPageRoutingModule {}
