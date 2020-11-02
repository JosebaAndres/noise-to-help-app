import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'events',
    loadChildren: () => import('./modules/events-page/events-page.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact-page/contact-page.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'facebook',
    loadChildren: () => import('./modules/facebook-page/facebook-page.module').then((m) => m.FacebookPageModule),
  },
  {
    path: 'instagram',
    loadChildren: () => import('./modules/instagram-page/instagram-page.module').then((m) => m.InstagramPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
