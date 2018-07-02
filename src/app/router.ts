import { Routes} from '@angular/router';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: 'app/modules/app/app.module#AppModule',
  }
];


