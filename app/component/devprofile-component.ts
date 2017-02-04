import { Component } from '@angular/core';
import { DevprofileService } from '../services/devprofile.service';

@Component({
  selector: 'home',
  templateUrl: './contentview/app/views/devprofile.html'

})

export class DevProfileComponent   implements OnInit {
  // instantiate posts to an empty array
  devprofiles: any = [];

  constructor(private devprofileService: DevprofileService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.devprofileService.getDevProfile().subscribe(devprofile => {
      this.devprofiles = devprofile;
    });
  }
}
