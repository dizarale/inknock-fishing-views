"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./component/home-component");
var fishingpark_component_1 = require("./component/fishingpark-component");
var fishingpark_register_component_1 = require("./component/fishingpark-register-component");
var devprofile_component_1 = require("./component/devprofile-component");
var devselectorprofile_component_1 = require("./component/devselectorprofile-component");
var routes = [
    { path: '', component: home_component_1.HomeComponent, data: { OauthResponse: true } },
    { path: 'fishing-park', component: fishingpark_component_1.FishingParkComponent },
    { path: 'fishing-park-register', component: fishingpark_register_component_1.FishingParkRegisterComponent },
    { path: 'dev-profile', component: devprofile_component_1.DevProfileComponent },
    { path: 'dev-profile/:id', component: devselectorprofile_component_1.DevSelectorProfileComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map