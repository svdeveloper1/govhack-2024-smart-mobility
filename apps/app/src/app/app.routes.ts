import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./map-page/map-page.component').then(c => c.MapPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
