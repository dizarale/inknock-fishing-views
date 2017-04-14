import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
import { OauthService } from '../services/oauth.service';
import { InitialService } from '../services/initial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  providers: [FacebookService],
  templateUrl: './contentview/app/views/navi.html'
})

export class MainComponent implements OnInit {
  OauthResponse: any = { token : '' , pic : '' };

  InitialPage : any = {};
  constructor(private fb: FacebookService
             ,private devprofileService: OauthService
             ,private initialService: InitialService
             ,private router: Router) {
    let fbParams: FacebookInitParams = {
                                   appId: '627857830743486',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
  }
  ngOnInit() {
    // Retrieve posts from the API
    this.initialService.HomeInit().subscribe(apiresponse => {
      this.InitialPage = apiresponse;
      if(typeof apiresponse.User !== "undefined"){
        this.OauthResponse = apiresponse.User;
        this.router.navigate(['',{OauthResponse : this.OauthResponse}]);
      }else{
      }
    });
  }
  FacebookLogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        this.devprofileService.OauthFacebook(response).subscribe(apiresponse => {
          this.OauthResponse = apiresponse.User;
        });
      },
      (error: any) => console.error(error)
    );
  }
  LogOut(): void {
    this.devprofileService.OauthLogout().subscribe(apiresponse => {
      if(apiresponse.Success){
        document.location.reload();
      }
    });
  }
}
