import { Input } from '@angular/core';
import { Component, OnInit,Output ,EventEmitter,ViewChild} from '@angular/core';
import data from './data.json';
import { SharingdataService } from 'src/app/service/sharingdata.service';
import { BarchartComponent } from '../charts/barchart/barchart.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  progressbaroptions = [
    {
      percent: 54,
      radius: 20,
      outerStrokeWidth: 3,
      innerStrokeWidth: 3,
      space: -2.5,
      outerStrokeColor: "#4882c2",
      innerStrokeColor: "#e7e8ea",
      showBackground: false,
      title: '14',
      animateTitle: false,
      showUnits: false,
      clockwise: false,
      animationDuration: 1000,
      startFromZero: false,
      outerStrokeGradient: true,
      outerStrokeGradientStopColor: '#53a9ff',
      lazy: true,
      titletext:"Number of Tasks On Track",
      bottomtext:"54%"
  },
  {
    percent: 30,
    radius: 20,
    outerStrokeWidth: 3,
    innerStrokeWidth: 3,
    space: -2.5,
    outerStrokeColor: "#ebb086",
    innerStrokeColor: "#e7e8ea",
    showBackground: false,
    title: '8',
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 1000,
    startFromZero: false,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#ebb086',
    lazy: true,
    titletext:"Number of Tasks Delayed",
    bottomtext:"30%"
},
{
  percent: 16,
  radius: 20,
  outerStrokeWidth: 3,
  innerStrokeWidth: 3,
  space: -2.5,
  outerStrokeColor: "#e32b2b",
  innerStrokeColor: "#e7e8ea",
  showBackground: false,
  title: '4',
  animateTitle: false,
  showUnits: false,
  clockwise: false,
  animationDuration: 1000,
  startFromZero: false,
  outerStrokeGradient: true,
  outerStrokeGradientStopColor: '#e32b2b',
  lazy: true,
  titletext:"Number of Tasks Significant Delayed ",
  bottomtext:"16%"
},
{
  percent: 19,
  radius: 20,
  outerStrokeWidth: 3,
  innerStrokeWidth: 3,
  space: -2.5,
  outerStrokeColor: "#098712",
  innerStrokeColor: "#e7e8ea",
  showBackground: false,
  title: '19',
  animateTitle: false,
  showUnits: false,
  clockwise: false,
  animationDuration: 1000,
  startFromZero: false,
  outerStrokeGradient: true,
  outerStrokeGradientStopColor: '#098712',
  lazy: true,
  titletext:"Number of Tasks Completed",
  bottomtext:"19%"
},
]
  constructor(public sharingdata:SharingdataService) { }

  ngOnInit(): void {
   this.sharingdata.updateApprovalMessage(data);
  }

}
