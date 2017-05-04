import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
       { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
        { path: 'newproject', loadChildren: () => System.import('./newproject/newproject.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
       { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
       { path: 'selection', loadChildren: () => System.import('./selection/selection.module') }
    ]
  },
 

];

export const routing = RouterModule.forChild(routes);
