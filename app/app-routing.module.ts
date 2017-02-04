import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main-component';
import { HomeComponent } from './component/home-component';
import { DevProfileComponent } from './component/devprofile-component';
import { DevSelectorProfileComponent } from './component/devselectorprofile-component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'dev-profile', component: DevProfileComponent },
  { path: 'dev-profile/:id', component: DevSelectorProfileComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}