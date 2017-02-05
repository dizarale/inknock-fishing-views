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
var ng2_facebook_sdk_1 = require('ng2-facebook-sdk');
var oauth_service_1 = require('../services/oauth.service');
var MainComponent = (function () {
    function MainComponent(fb, devprofileService) {
        this.fb = fb;
        this.devprofileService = devprofileService;
        this.OauthResponse = { accessToken: '' };
        var fbParams = {
            appId: '627857830743486',
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    }
    MainComponent.prototype.FacebookLogin = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            _this.devprofileService.OauthFacebook(response).subscribe(function (apiresponse) {
                _this.OauthResponse = apiresponse;
            });
        }, function (error) { return console.error(error); });
    };
    MainComponent.prototype.LogOut = function () {
        this.devprofileService.OauthLogout().subscribe(function (apiresponse) {
            if (apiresponse.Success) {
                document.location.reload();
            }
        });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            providers: [ng2_facebook_sdk_1.FacebookService],
            templateUrl: './contentview/app/views/navi.html'
        }), 
        __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService, oauth_service_1.OauthService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main-component.js.map