"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var devprofile_service_1 = require('../services/devprofile.service');
var FishingParkRegisterComponent = (function () {
    function FishingParkRegisterComponent(devprofileService) {
        this.devprofileService = devprofileService;
        // instantiate posts to an empty array
        this.FishingPark = { Fish: [{ Name: 'ปลากระพง', Size: '0.7-1.2 กิโล', Num: 350 }, { Name: 'ปลากระพง', Size: '1.2-2 กิโล', Num: 200 }] };
        this.Provinces = ['Bangkok', 'Samutsakhon'];
        this.Fishs = [{ Name: 'ปลากระพง' }, { Name: 'ปลาเก๋า' }, { Name: 'ปลาบึก' }];
        this.Fish = {};
        this.Facilities = [
            { Key: "Carpark", Name: "ที่จอดรถ", Value: true },
            { Key: "FoodService", Name: "อาหาร", Value: true },
            { Key: "DrinkService", Name: "น้ำดื่ม", Value: true },
            { Key: "Toilet", Name: "ห้องน้ำ", Value: true },
            { Key: "FishingGear", Name: "อุปกรณ์ตกปลา", Value: false }
        ];
    }
    FishingParkRegisterComponent.prototype.ngOnInit = function () {
        // Retrieve posts from the API
    };
    FishingParkRegisterComponent.prototype.RemoveFish = function (Fish) {
        var index = this.FishingPark.Fish.indexOf(Fish);
        if (index != -1) {
            this.FishingPark.Fish.splice(index, 1);
        }
    };
    FishingParkRegisterComponent.prototype.AddFish = function (Fish) {
        this.FishingPark.Fish.push(Fish);
        this.Fish = {};
    };
    FishingParkRegisterComponent = __decorate([
        core_1.Component({
            selector: 'fishingpark-register',
            templateUrl: './contentview/app/views/fishingpark-register.html'
        }), 
        __metadata('design:paramtypes', [devprofile_service_1.DevprofileService])
    ], FishingParkRegisterComponent);
    return FishingParkRegisterComponent;
}());
exports.FishingParkRegisterComponent = FishingParkRegisterComponent;
//# sourceMappingURL=fishingpark-register-component.js.map