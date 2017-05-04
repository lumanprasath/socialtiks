import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';

import { ChartistJs2 } from './components/chartistJs2/chartistJs2.component';
import { BubbleMaps } from '../maps/components/bubbleMaps/bubbleMaps.component';
import {League} from './components/league/league.component';
//import { Maps } from '../maps/maps.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
  
      { path: 'chartist-js2', component: ChartistJs2 },
     { path: 'bubblemaps', component: BubbleMaps},
     { path: 'league_monitoring', component: League}
    ]
  }
];

export const routing = RouterModule.forChild(routes);