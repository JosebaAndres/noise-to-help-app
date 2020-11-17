import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundPageComponent } from './playground-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundPageRoutingModule {}
