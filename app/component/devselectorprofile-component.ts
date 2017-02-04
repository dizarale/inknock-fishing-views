import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { DevprofileService } from '../services/devprofile.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'devselector',
  templateUrl: './contentview/app/views/devselectorprofile.html'
})

export class DevSelectorProfileComponent implements OnInit {
  id : number;
  devprofile:any = {};
  devContact : string;
  TechradarChartLabels:any[] = [];
  TechradarChartData:any = [
    {data: [], label: 'Technical Point'}
  ];
  CommonradarChartLabels:string[] = [];
  CommonradarChartData:any = [
    {data: [], label: 'Common Point'}
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devprofileService: DevprofileService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.devprofileService.getDevSelectorProfile(this.id).subscribe(devprofile => {
      this.devprofile = devprofile;
      var i = 0;
      for (var key in devprofile.SkillsChart.TechnicalSkills){
          this.TechradarChartData[0].data.push(this.devprofile.SkillsChart.TechnicalSkills[key]);
          this.TechradarChartLabels.push(key);
          if(key.indexOf("_") > 0){
            let tmp = this.TechradarChartLabels[i].replace(/_/g, " ");
            this.TechradarChartLabels[i] = tmp;
          }
          i++;
      }
      i = 0;
      for (var key in devprofile.SkillsChart.CommonSkills){
          this.CommonradarChartData[0].data.push(this.devprofile.SkillsChart.CommonSkills[key]);
          this.CommonradarChartLabels.push(key);
          if(key.indexOf("_") > 0){
            let tmp = this.CommonradarChartLabels[i].replace(/_/g, " ");
            this.CommonradarChartLabels[i] = tmp;
          }
          i++;
      }
    });
  }

  public TechradarChartOption:any =
    {
            scale: {
              ticks: {
                  beginAtZero: true,
                  min:0,
                  max:5,
                  stepSize:1,
                  fontSize: 0
              },
            }
    };

  public TechradarChartType:string = 'radar';

  public CommonradarChartOption:any =
    {
            scale: {
              ticks: {
                  beginAtZero: true,
                  min:0,
                  max:5,
                  stepSize:1,
                  fontSize: 0
              },
            }
    };
  public CommonradarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public BtnContactClicked(e:any):void {
    if(this.devContact == this.devprofile[e]){
      this.devContact = '';
    }else{
      this.devContact = this.devprofile[e];
    }
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
