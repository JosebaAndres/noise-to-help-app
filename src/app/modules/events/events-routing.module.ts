import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesInDevelopmentGuard } from 'src/app/services/features-in-development-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./events-page/events-page.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'donate-toys-2020',
    loadChildren: () =>
      import('./donate-toys-2020-page/donate-toys-2020-page.module').then((m) => m.DonateToys2020PageModule),
    canActivate: [FeaturesInDevelopmentGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
