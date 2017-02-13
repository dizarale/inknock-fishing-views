import { NgModule }      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './component/main-component';
import { HomeComponent } from './component/home-component';
import { HomeNewsComponent } from './component/home-news-component';
import { FishingParkComponent } from './component/fishingpark-component';
import { FishingParkRegisterComponent } from './component/fishingpark-register-component';
import hammerjs from 'hammerjs';



import { DevProfileComponent } from './component/devprofile-component';
import { DevSelectorProfileComponent } from './component/devselectorprofile-component';

import { DevprofileService } from './services/devprofile.service';
import { InitialService } from './services/initial.service';
import { OauthService } from './services/oauth.service';


import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports:[
    ChartsModule
    ,BrowserModule
    ,MaterialModule.forRoot()
    ,AppRoutingModule
    ,FormsModule
  ],
  declarations: [
    AppComponent
    ,MainComponent
    ,HomeComponent
    ,DevProfileComponent
    ,DevSelectorProfileComponent
    ,HomeNewsComponent
    ,FishingParkComponent
    ,FishingParkRegisterComponent
],
providers: [{provide: APP_BASE_HREF, useValue : '/' },DevprofileService,InitialService,OauthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
