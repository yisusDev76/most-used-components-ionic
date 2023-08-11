import { Routes } from '@angular/router';
import { MenuPage } from './menu.page';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../first-with-tabs/first-with-tabs.routes').then(m => m.routes)
        // loadComponent: () => import('../first-with-tabs/first-with-tabs.page').then(m => m.FirstWithTabsPage)
      },
      {
        path: 'second',
        loadComponent: () => import('../second/second.page').then(m => m.SecondPage)
      },
      {
        path: 'second/details',
        loadComponent: () => import('../details/details.page').then(m => m.DetailsPage)
      },
    ]
  },
];
