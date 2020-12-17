import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamingPageComponent } from './teaming-page.component';

const routes: Routes = [
  {
    path: '',
    component: TeamingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamingPageRoutingModule {}
