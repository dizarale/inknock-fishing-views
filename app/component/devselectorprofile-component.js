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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var devprofile_service_1 = require("../services/devprofile.service");
var router_1 = require("@angular/router");
var DevSelectorProfileComponent = (function () {
    function DevSelectorProfileComponent(route, router, devprofileService) {
        this.route = route;
        this.router = router;
        this.devprofileService = devprofileService;
        this.devprofile = {};
        this.TechradarChartLabels = [];
        this.TechradarChartData = [
            { data: [], label: 'Technical Point' }
        ];
        this.CommonradarChartLabels = [];
        this.CommonradarChartData = [
            { data: [], label: 'Common Point' }
        ];
        this.TechradarChartOption = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                    stepSize: 1,
                    fontSize: 0
                },
            }
        };
        this.TechradarChartType = 'radar';
        this.CommonradarChartOption = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                    stepSize: 1,
                    fontSize: 0
                },
            }
        };
        this.CommonradarChartType = 'radar';
    }
    DevSelectorProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.devprofileService.getDevSelectorProfile(this.id).subscribe(function (devprofile) {
            _this.devprofile = devprofile;
            var i = 0;
            for (var key in devprofile.SkillsChart.TechnicalSkills) {
                _this.TechradarChartData[0].data.push(_this.devprofile.SkillsChart.TechnicalSkills[key]);
                _this.TechradarChartLabels.push(key);
                if (key.indexOf("_") > 0) {
                    var tmp = _this.TechradarChartLabels[i].replace(/_/g, " ");
                    _this.TechradarChartLabels[i] = tmp;
                }
                i++;
            }
            i = 0;
            for (var key in devprofile.SkillsChart.CommonSkills) {
                _this.CommonradarChartData[0].data.push(_this.devprofile.SkillsChart.CommonSkills[key]);
                _this.CommonradarChartLabels.push(key);
                if (key.indexOf("_") > 0) {
                    var tmp = _this.CommonradarChartLabels[i].replace(/_/g, " ");
                    _this.CommonradarChartLabels[i] = tmp;
                }
                i++;
            }
        });
    };
    DevSelectorProfileComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DevSelectorProfileComponent.prototype.BtnContactClicked = function (e) {
        if (this.devContact == this.devprofile[e]) {
            this.devContact = '';
        }
        else {
            this.devContact = this.devprofile[e];
        }
    };
    DevSelectorProfileComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return DevSelectorProfileComponent;
}());
DevSelectorProfileComponent = __decorate([
    core_1.Component({
        selector: 'devselector',
        templateUrl: './contentview/app/views/devselectorprofile.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        devprofile_service_1.DevprofileService])
], DevSelectorProfileComponent);
exports.DevSelectorProfileComponent = DevSelectorProfileComponent;
//# sourceMappingURL=devselectorprofile-component.js.map