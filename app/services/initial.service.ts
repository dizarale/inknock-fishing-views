import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InitialService {

  constructor(private http: Http) { }

  // Get all posts from the API
  HomeInit() {
    return this.http.get('/api/v1/Init/Home')
      .map(res => res.json());
  }
}
