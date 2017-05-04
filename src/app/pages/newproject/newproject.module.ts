import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import {GameForm} from './components/gamedetails/gameform/game.component';
import {Newproject} from  './newproject.component';
import {GameDetails} from './components/gamedetails/gamedetails.component';
import { routing } from './newproject.routing';
import {BrandDetails} from './components/branddetails/branddetails.component';
import { BrandTable } from './components/branddetails/brandtable/brand.component';
import {VideoDetails} from './components/videodetails/videodetails.component';
import { VideoForm } from './components/videodetails/videoform/video.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {FormDetailsNewproject} from './newproject.form.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
   // Ng2SmartTableModule,
    ReactiveFormsModule,
    SlimLoadingBarModule
 
  ],
  declarations: [
    GameForm,
    GameDetails,
    Newproject,
    BrandDetails,
    BrandTable,
    VideoDetails,
     VideoForm,
     FormDetailsNewproject
  
  ],

  providers: [

  ]
})
export default class NewprojectModule {}