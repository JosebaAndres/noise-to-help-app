import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchandisingPageComponent } from './merchandising-page.component';

const routes: Routes = [
  {
    path: '',
    component: MerchandisingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandisingPageRoutingModule {}
