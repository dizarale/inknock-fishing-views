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
var initial_service_1 = require('../services/initial.service');
var router_1 = require('@angular/router');
var MainComponent = (function () {
    function MainComponent(fb, devprofileService, initialService, router) {
        this.fb = fb;
        this.devprofileService = devprofileService;
        this.initialService = initialService;
        this.router = router;
        this.OauthResponse = { token: '', pic: '' };
        this.InitialPage = {};
        var fbParams = {
            appId: '627857830743486',
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.initialService.HomeInit().subscribe(function (apiresponse) {
            _this.InitialPage = apiresponse;
            if (typeof apiresponse.User !== "undefined") {
                _this.OauthResponse = apiresponse.User;
                _this.router.navigate(['', { OauthResponse: _this.OauthResponse }]);
            }
            else {
            }
        });
    };
    MainComponent.prototype.FacebookLogin = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            _this.devprofileService.OauthFacebook(response).subscribe(function (apiresponse) {
                _this.OauthResponse = apiresponse.User;
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
        __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService, oauth_service_1.OauthService, initial_service_1.InitialService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main-component.js.map