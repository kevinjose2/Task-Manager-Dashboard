import { Component, ViewChild,Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SharingdataService } from 'src/app/service/sharingdata.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent  {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis:'y',

    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        display: false,
       grid:{
        color: "rgba(0, 0, 0, 0)",

    }
      },
      y: {
        display:true,
        grid:{
          color: "rgba(0, 0, 0, 0)",
      }

      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight:20

      },
      datalabels: {

        color:'white'
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public chartColors: any[] = [
    {
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
    }];
  public barChartData: ChartData<'bar'> = {
    labels: [ 'Stratergic Affairs', 'Healthcare Workforce Sector', 'Healthcare Facilities Sector','Support Services' ],
    datasets: [



]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
  constructor(public sharingdata:SharingdataService) {

  this.sharingdata.currentsendata.subscribe((response:any)=> {
    this.barChartData.datasets = response[0]
  })}
}
