import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OauthService {

  constructor(private http: Http) { }

  // Get all posts from the API
  OauthFacebook( reqObject : any) {
    return this.http.post('/api/v1/Oauth/Facebook',reqObject)
      .map(res => res.json());
  }
  OauthLogout() {
    return this.http.get('/api/v1/Oauth/Logout')
      .map(res => res.json());
  }
}
