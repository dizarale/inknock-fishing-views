import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main-component';
import { HomeComponent } from './component/home-component';
import { HomeNewsComponent } from './component/home-news-component';
import { FishingParkComponent } from './component/fishingpark-component';
import { FishingParkRegisterComponent } from './component/fishingpark-register-component';

import { DevProfileComponent } from './component/devprofile-component';
import { DevSelectorProfileComponent } from './component/devselectorprofile-component';
const routes: Routes = [
  { path: '',component: HomeComponent,data : {OauthResponse : true}},
  { path: 'fishing-park', component: FishingParkComponent },
  { path: 'fishing-park-register', component: FishingParkRegisterComponent },
  { path: 'dev-profile', component: DevProfileComponent },
  { path: 'dev-profile/:id', component: DevSelectorProfileComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
