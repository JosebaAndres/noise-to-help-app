import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsPageComponent } from './questions-page.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsPageRoutingModule {}
