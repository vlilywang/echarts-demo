import { Routes} from '@angular/router';
import { AppComponent} from './app.component';

export  const ROUTE_CONFIG: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      redirectTo: '/app/search',
      pathMatch: 'full'
    },
    {
      path: 'search',
      loadChildren: 'app/app/modules/search/search.module#SearchModule',
      pathMatch: 'full',
    },
    // {
    //   path: 'media/:id',
    //   pathMatch: 'full',
    //   loadChildren: 'app/modules/app/modules/media-focus/media-focus.module#MediaFocusModule',
    //   // canActivate: [ AppGuardChildService]
    // },
    // {
    //   path: 'law',
    //   pathMatch: 'full',
    //   loadChildren: 'app/modules/app/modules/law/laws.module#LawsModule',
    // },
    // {
    //   path: 'law/:id',
    //   pathMatch: 'full',
    //   loadChildren: 'app/modules/app/modules/law/laws.module#LawsModule',
    // },
    // {
    //   path: 'system',
    //   loadChildren: 'app/modules/app/modules/system-set/system-set.module#SystemModule',
    // },
    // {
    //   path: 'detail',
    //   pathMatch: 'full',
    //   loadChildren: 'app/modules/app/modules/detail/detail.module#DetailModule'
    // },
    // {
    //   path: 'system',
    //   pathMatch: 'full',
    //   loadChildren: 'app/modules/app/modules/system-set/system-set.module#SystemModule'
    // },
  ]
}];

