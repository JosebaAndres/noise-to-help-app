import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateToys2020PageComponent } from './donate-toys-2020-page.component';

const routes: Routes = [
  {
    path: '',
    component: DonateToys2020PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateToys2020PageRoutingModule {}
