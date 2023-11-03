import { Component, OnInit, ViewChild } from '@angular/core';
import { NewUser, RecentOrder, TopCard } from '../interfaces/dashboard-response-data';
import { DashboardServiceService } from '../Services/dashboard-service.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData: NewUser[] = [];
  public cardData: TopCard[] = [];
  public orderData: RecentOrder[] = [];

  public chartOptions: Partial<ChartOptions> | any;

  public barchartOptions: Partial<ChartOptions> | any;

  public donutchartOptions: Partial<ChartOptions> | any;



  constructor(
    private _dashboardService: DashboardServiceService
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      dataLabels: {
        enabled: false
      },
      chart: {
        height: 300,
        type: "area",
        zoom: {
          enabled: false
        }
      },
      fill: {
        type: 'solid',
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
      },
      stroke: {
        width: 2,
        curve: "smooth"
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ]
      },
    };
    this.barchartOptions = {
      series: [
        {
          name: "Income",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1900, 1400]
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          columnWidth: '30%'

        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
    };
    this.donutchartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        height: 300,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {

    this._dashboardService.getResponseData()
      .subscribe((item) => {
        this.userData = item.new_users;
        this.cardData = item.top_cards;
        this.orderData = item.recent_orders;
      })

  }

}
