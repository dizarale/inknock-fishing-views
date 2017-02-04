import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DevprofileService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getDevProfile() {
    return this.http.get('/api/v1/devprofile')
      .map(res => res.json());
  }
  getDevSelectorProfile( Id : number) {
    return this.http.get('/api/v1/devprofile/'+Id)
      .map(res => res.json());
  }
}
