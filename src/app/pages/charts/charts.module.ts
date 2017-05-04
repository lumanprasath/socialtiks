import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {HttpModule} from '@angular/http';
import { routing } from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJs2} from './components/chartistJs2/chartistJs2.component';
import { ChartistJs2Service } from './components/chartistJs2/chartistJs2.service';
import {League} from './components/league/league.component'
import { LeagueService } from './components/league/league.service';
import { Maps } from '../maps/maps.component';
import { BubbleMaps } from '../maps/components/bubbleMaps/bubbleMaps.component';
import { BubbleMapsService } from '../maps/components/bubbleMaps/bubbleMaps.service';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Daterangepicker } from 'ng2-daterangepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartModule } from 'angular2-highcharts';
import { AmChartsModule } from "amcharts3-angular2";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    HttpModule,
    ChartsModule,
    TagCloudModule,
    Ng2GoogleChartsModule,
    Daterangepicker,
    AmChartsModule,
   Ng2SmartTableModule,
   ChartModule.forRoot(require('highcharts'),
                require('highcharts/modules/exporting'),
                require('highcharts/highcharts-more'),
                require('highcharts/highcharts-3d'),
                require('highcharts/modules/treemap'),
                require('highcharts/modules/map'),
                require('highcharts/modules/solid-gauge'))
  ],
  declarations: [
    Charts,
    ChartistJs2,
    Maps,
    BubbleMaps,
    League 
  ],
  providers: [
    ChartistJs2Service,
    LeagueService,
    BubbleMapsService,
 
 
  ]
})
export default class ChartsALLModule {}


