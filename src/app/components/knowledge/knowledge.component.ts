import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

    // angular
    public doughnutChartLabels: Label[] = ['Avance', 'Faltante'];
    public doughnutChartData: MultiDataSet = [
      [85, 15],
    ];
    public doughnutChartType: ChartType = 'doughnut';

    // node
    public doughnutChartLabelsNode: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataNode: MultiDataSet = [
      [90, 10],
    ];
    public doughnutChartTypeNode: ChartType = 'doughnut';

    // Javascript
    public doughnutChartLabelsJS: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataJS: MultiDataSet = [
      [87, 13],
    ];
    public doughnutChartTypeJS: ChartType = 'doughnut';

    // mongo
    public doughnutChartLabelsMg: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataMg: MultiDataSet = [
      [70, 30],
    ];
    public doughnutChartTypeMg: ChartType = 'doughnut';

    // fluuter
    public doughnutChartLabelsFlutter: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataFlutter: MultiDataSet = [
      [50, 50],
    ];
    public doughnutChartTypeFlutter: ChartType = 'doughnut';

    // Ionic
    public doughnutChartLabelsIonic: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataIonic: MultiDataSet = [
      [80, 20],
    ];
    public doughnutChartTypeIonic: ChartType = 'doughnut';

    // Java
    public doughnutChartLabelsJava: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataJava: MultiDataSet = [
      [80, 20],
    ];
    public doughnutChartTypeJava: ChartType = 'doughnut';

    // C++
    public doughnutChartLabelsC: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataC: MultiDataSet = [
      [80, 20],
    ];
    public doughnutChartTypeC: ChartType = 'doughnut';

    // Mysql
    public doughnutChartLabelsMysql: Label[] = ['Avance', 'Faltante'];
    public doughnutChartDataMysql: MultiDataSet = [
      [75, 25],
    ];
    public doughnutChartTypeMysql: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
