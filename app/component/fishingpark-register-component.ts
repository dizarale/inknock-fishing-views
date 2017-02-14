import { Component } from '@angular/core';
import { DevprofileService } from '../services/devprofile.service';

@Component({
  selector: 'fishingpark-register',
  templateUrl: './contentview/app/views/fishingpark-register.html'

})

export class FishingParkRegisterComponent implements OnInit {
  // instantiate posts to an empty array
  FishingPark: any = { Fish : [ {Name : 'ปลากระพง',Size : '0.7-1.2 กิโล',Num:350},{Name : 'ปลากระพง',Size : '1.2-2 กิโล',Num:200}] };
  Provinces :any = ['Bangkok','Samutsakhon'];
  Fishs : any = [{Name:'ปลากระพง'},{Name:'ปลาเก๋า'},{Name:'ปลาบึก'}];
  Fish :any = {};
  Facilities : any = [
  { Key: "Carpark", Name: "ที่จอดรถ", Value:true},
  { Key: "FoodService", Name: "อาหาร", Value:true},
  { Key: "DrinkService", Name: "น้ำดื่ม", Value:true},
  { Key: "Toilet", Name: "ห้องน้ำ", Value:true},
  { Key: "FishingGear", Name: "อุปกรณ์ตกปลา", Value:false}
];
  constructor(private devprofileService: DevprofileService) { }

  ngOnInit() {
    // Retrieve posts from the API
  }
  RemoveFish(Fish: any){
    let index = this.FishingPark.Fish.indexOf(Fish);
    if(index != -1){
      this.FishingPark.Fish.splice(index,1);
    }
  }
  AddFish(Fish: any){
      this.FishingPark.Fish.push(Fish);
      this.Fish = {};
  }
}
