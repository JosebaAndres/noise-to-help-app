import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaboratePageComponent } from './collaborate-page.component';

const routes: Routes = [
  {
    path: '',
    component: CollaboratePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollaboratePageRoutingModule {}
