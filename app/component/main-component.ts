import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
import { OauthService } from '../services/oauth.service';


@Component({
  selector: 'main',
  providers: [FacebookService],
  templateUrl: './contentview/app/views/navi.html'
})

export class MainComponent  {
  OauthResponse: any = { accessToken : '' };
  constructor(private fb: FacebookService
             ,private devprofileService: OauthService) {
    let fbParams: FacebookInitParams = {
                                   appId: '627857830743486',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
  }
  FacebookLogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        this.devprofileService.OauthFacebook(response).subscribe(apiresponse => {
          this.OauthResponse = apiresponse;
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
