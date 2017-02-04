import { NgModule }      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './component/main-component';
import { HomeComponent } from './component/home-component';
import { DevProfileComponent } from './component/devprofile-component';
import { DevSelectorProfileComponent } from './component/devselectorprofile-component';

import { DevprofileService } from './services/devprofile.service';



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
],
providers: [{provide: APP_BASE_HREF, useValue : '/' },DevprofileService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
