import { Component, ViewChild,Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SharingdataService } from 'src/app/service/sharingdata.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-personwisechart',
  templateUrl: './personwisechart.component.html',
  styleUrls: ['./personwisechart.component.scss']
})
export class PersonwisechartComponent  {
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
    labels: [ 'Dr.Omar Najim', 'Sharon Reily', 'Salem Abdulkareem','Amna Alhameli' ],
    datasets: [



]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor(public sharingdata:SharingdataService) {console.log(this.sharingdata.currentsendata.subscribe((response:any)=> {
    this.barChartData.datasets = response[1]

  }))}

}
