import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { BarchartComponent } from './component/charts/barchart/barchart.component';
import { DoghnutchartComponent } from './component/charts/barchart/doghnutchart/doghnutchart.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PersonwisechartComponent } from './component/charts/barchart/personwisechart/personwisechart.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BarchartComponent,
    DoghnutchartComponent,
    PersonwisechartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot({

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
