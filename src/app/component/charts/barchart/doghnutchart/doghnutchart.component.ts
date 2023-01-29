import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { POPULATION } from './populations';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-doghnutchart',
  templateUrl: './doghnutchart.component.html',
  styleUrls: ['./doghnutchart.component.scss']
})
export class DoghnutchartComponent implements OnInit {

  private width: number =300;
  private height: number = 400;
  chart:any
  private svg: any;     // TODO replace all `any` by the right type
  private tooltip:any
  private radius!: number;

  private arc: any;
  private pie: any;
  private color: any;

  private g: any;

  constructor() {}

  ngOnInit() {
      this.initSvg();
      this.drawChart(POPULATION);
  }

  private initSvg() {
      this.svg = d3.select('svg');

      // this.width = +this.svg.attr('width');
      // this.height = +this.svg.attr('height');
      this.radius = Math.min(this.width, this.height)/2;

      this.color = d3Scale.scaleOrdinal()
          .range(['#247689', '#6b949a']);

      this.arc = d3Shape.arc()
          .outerRadius(this.radius)
          .innerRadius(this.radius-50)



      this.pie = d3Shape.pie()
          .sort(null)
          .value((d: any) => d.population);


      this.svg = d3.select('svg')
          .append('g')
          .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')')



  }

  private drawChart(data: any[]) {
      let g = this.svg.selectAll('.arc')
          .data(this.pie(data))
          .enter().append('g')
          .attr('class', 'arc');

      g.append('path')
          .attr('d', this.arc)
          .style('fill', (d: { data: { age: any; }; }) => this.color(d.data.age))
          .on('mouseover')


      g.append('text')
          .attr('transform', (d: any) => 'translate(' + this.arc.centroid(d) + ')')
          .attr('dy', '10px')
          .attr('fill', '#ffff')
          .text((d: { data: { age: any; }; }) => d.data.age);
  }

}


