import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { FormWizardModule } from 'angular2-wizard';
import { LocalStorageService } from 'angular-2-local-storage';



//import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";
//import { CondensedTable } from '../tables/components/basicTables/components/condensedTable';
// import { BasicTables } from '../tables/components/basicTables/basicTables.component';
// import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
     FormWizardModule

  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
    // CondensedTable,
    // BasicTables

   
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    LocalStorageService

 //   BasicTablesService
  ]
})
export default class DashboardModule {}






