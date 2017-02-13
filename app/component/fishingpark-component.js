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
var FishingParkComponent = (function () {
    function FishingParkComponent(devprofileService) {
        this.devprofileService = devprofileService;
        // instantiate posts to an empty array
        this.devprofiles = [];
    }
    FishingParkComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.devprofileService.getDevProfile().subscribe(function (devprofile) {
            _this.devprofiles = devprofile;
        });
    };
    FishingParkComponent = __decorate([
        core_1.Component({
            selector: 'fishingpark',
            templateUrl: './contentview/app/views/fishingpark.html'
        }), 
        __metadata('design:paramtypes', [devprofile_service_1.DevprofileService])
    ], FishingParkComponent);
    return FishingParkComponent;
}());
exports.FishingParkComponent = FishingParkComponent;
//# sourceMappingURL=fishingpark-component.js.map