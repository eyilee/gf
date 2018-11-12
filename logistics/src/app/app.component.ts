import { Component, OnInit } from '@angular/core';
import { LogisticsService } from './service/logistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eps: Array<object>;
  logistics: Array<object>;

  constructor(private logisticsService: LogisticsService) { }

  ngOnInit(): void {
    this.getLogisticsData();
  }

  getLogisticsData(): void {
    this.eps = this.logisticsService.getData();
    this.logistics = this.extractLogisticsData(this.eps);
  }

  extractLogisticsData(eps: Array<object>): Array<object> {
    const logistics = [];
    for (const ep of eps) {
      for (const logistic of ep['logistics']) {
        logistics.push(logistic);
      }
    }
    return logistics;
  }
}
