import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./events-page/events-page.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'donate-toys-2020',
    loadChildren: () => import('./donate-toys-2020/donate-toys-2020.module').then((m) => m.DonateToys2020Module),
  },
  {
    path: 'meandros-2021',
    loadChildren: () => import('./meandros-2021/meandros-2021.module').then((m) => m.Meandros2021Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
