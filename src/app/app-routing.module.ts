import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundGuard } from './modules/playground-page/playground-guard';
import { ProductionGuard } from './services/production-guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/about-us-page/about-us-page.module').then((m) => m.AboutUsPageModule),
  },
  {
    path: 'partners',
    loadChildren: () => import('./modules/partners-page/partners-page.module').then((m) => m.PartnersPageModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events-page/events-page.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact-page/contact-page.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'collaborate',
    loadChildren: () =>
      import('./modules/collaborate-page/collaborate-page.module').then((m) => m.CollaboratePageModule),
  },
  {
    path: 'merchandising',
    loadChildren: () =>
      import('./modules/merchandIsing-page/merchandising-page.module').then((m) => m.MerchandisingUsPageModule),
  },
  {
    path: 'questions',
    loadChildren: () => import('./modules/questions-page/questions-page.module').then((m) => m.QuestionsUsPageModule),
  },
  {
    path: 'playground',
    loadChildren: () => import('./modules/playground-page/playground-page.module').then((m) => m.PlaygroundPageModule),
    canActivate: [PlaygroundGuard],
  },
  {
    path: 'teaming',
    loadChildren: () => import('./modules/teaming-page/teaming-page.module').then((m) => m.TeamingPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
