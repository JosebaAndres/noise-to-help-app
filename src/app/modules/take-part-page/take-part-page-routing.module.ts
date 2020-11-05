import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakePartPageComponent } from './take-part-page.component';

const routes: Routes = [
  {
    path: '',
    component: TakePartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakePartPageRoutingModule {}
