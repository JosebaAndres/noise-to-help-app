import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookPageComponent } from './facebook-page.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookPageRoutingModule {}
