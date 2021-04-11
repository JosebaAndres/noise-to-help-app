import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Meandros2021PageComponent } from './meandros-2021-page.component';

const routes: Routes = [
  {
    path: '',
    component: Meandros2021PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meandros2021RoutingModule {}
