import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})

export class ScheduleComponent implements OnInit {
  @ViewChild('myChart', { static: true }) public myChart: ElementRef;

  private myChartSchedule() {
    const ctx = this.myChart.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ''],
        datasets: [{
          data: [80, 105, 310, 70, 105, 400, 110, 203, 115, 220],
          backgroundColor: [
            'rgba(29, 148, 237, 0.1)'
          ],
          borderColor: '#00a8ff',
          borderWidth: 3,
          lineTension: 0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderWidth: '3',
          pointHoverBorderColor: '#00a8ff'
        }]
      },
      options: {
        aspectRatio: 3,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 100,
              fontColor: 'rgba(126, 140, 160, .5)',
              fontSize: '11',
              fontFamily: '\'Source Sans Pro\', sans-serif',
              padding: -20,
              callback: (value, index, values) => {
                return '$' + value;
              }
            },
            gridLines: {
              color: '#ebf1f5',
              lineWidth: 1,
              zeroLineWidth: 1,
              zeroLineColor: '#b2e5ff',
              drawBorder: false,
              tickMarkLength: 0
            },
          }],
          xAxes: [{
            ticks: {
              fontColor: 'rgba(126, 140, 160, .5)',
              fontSize: '11',
              fontFamily: '\'Source Sans Pro\', sans-serif'
            },
            gridLines: {
              zeroLineWidth: 1,
              display: false
            }
          }]
        },
        tooltips: {
          backgroundColor: '#222c3c',
          displayColors: false,
          bodyFontSize: 14,
          titleFontSize: 0,
          titleMarginBottom: 2,
          caretPadding: 9,
          cornerRadius: 3,
          xPadding: 17,
          yPadding: 8,
          callbacks: {
            label: (tooltipItem, data) => {
              return 'Earnings: ' + tooltipItem.yLabel;
            }
          }
        },
        legend: {
          display: false
        }
      }
    });

  }

  constructor() { }

  ngOnInit() {
    this.myChartSchedule();
  }

}
