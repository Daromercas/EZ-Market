import { getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  public financialChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];



public randomize(): void {
  // Only Change 3 values
  this.barChartData[0].data = [5,(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),];
  //this.barChartData[1].data = [5,(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),(Math.random() * 100),];
}

public set(num): void {
  // Only Change 3 values
  const temp = num*.5;
  this.barChartData[0].data = [num,num+=temp,num+=temp,num+=temp,num+=temp,num+=temp];
  this.barChartData[1].data = [10,20,30,40,50,60];
}


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Year 5', 'Year 10', 'Year 15', 'Year 20', 'Year 25', 'Year 30'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartDataSets[] = [
    { data: [5, 10, 15, 20, 25, 30], label: 'Saving' },
    { data: [5, 15, 25, 35, 45, 55], label: 'Investing' },
    //{ data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    //{ data: [40, 30, 28, 25, 22, 20], label: 'Java' },
  ];


//**************************************** */

amount = [500, 100, 150, 200, 250, 300,500];
amount2 = [500, 100, 150, 200, 250, 300,500,400];
tickers = ['AMC','TSLA','NIO','SQ','BLOK','MRNA'];

addTicker(newTicker: string) {

  if (newTicker) {
    this.tickers.push(newTicker);
    this.pieChartData[0].data = this.amount;
  }

}


public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = this.tickers;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [
    
  ];


  public pieChartData: ChartDataSets[] = [
    { data: [500, 100, 150, 200, 250, 300], label: 'Saving' },
   // { data: [5, 15, 25, 35, 45, 55], label: 'Investing' },
    //{ data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    //{ data: [40, 30, 28, 25, 22, 20], label: 'Java' },
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

}
