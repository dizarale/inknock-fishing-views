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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var main_component_1 = require('./component/main-component');
var home_component_1 = require('./component/home-component');
var home_news_component_1 = require('./component/home-news-component');
var fishingpark_component_1 = require('./component/fishingpark-component');
var fishingpark_register_component_1 = require('./component/fishingpark-register-component');
var devprofile_component_1 = require('./component/devprofile-component');
var devselectorprofile_component_1 = require('./component/devselectorprofile-component');
var devprofile_service_1 = require('./services/devprofile.service');
var initial_service_1 = require('./services/initial.service');
var oauth_service_1 = require('./services/oauth.service');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_charts_1.ChartsModule,
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                home_component_1.HomeComponent,
                devprofile_component_1.DevProfileComponent,
                devselectorprofile_component_1.DevSelectorProfileComponent,
                home_news_component_1.HomeNewsComponent,
                fishingpark_component_1.FishingParkComponent,
                fishingpark_register_component_1.FishingParkRegisterComponent
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, devprofile_service_1.DevprofileService, initial_service_1.InitialService, oauth_service_1.OauthService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map