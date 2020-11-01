import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramPageComponent } from './instagram-page.component';

const routes: Routes = [
  {
    path: '',
    component: InstagramPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstagramPageRoutingModule {}
