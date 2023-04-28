import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


  ngOnInit() {
    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets.forEach((x) => {
      x.data = this.dataInput;
    });
    console.log('data' + this.dataInput)
    console.log(this.doughnutChartLabels)
  }

  //@Input('valor') progreso: number = 50;
  @Input('title') title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() dataInput: number[] = [350, 450, 100];

  public doughnutChartType: ChartType = 'doughnut';
 
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [{ data: [350, 450, 100], backgroundColor: ['green', 'yellow', 'blue'] }]
  };


  //    datasets: [{ data: [350, 450, 100], backgroundColor: ['green', 'yellow', 'blue'] } ]
  //    ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

}
