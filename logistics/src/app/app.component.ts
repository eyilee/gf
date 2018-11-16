import { Component, OnInit, HostListener } from '@angular/core';
import { LogisticsService } from './service/logistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eps: Array<object>;
  logistics: Array<object>;
  selectedList: Array<boolean>;
  selectedOption: Array<boolean>;

  gridCols: number;

  constructor(private logisticsService: LogisticsService) { }

  ngOnInit(): void {
    this.getLogisticsData();
    this.setGridCols();
  }

  setGridCols() {
    this.gridCols = (window.innerWidth <= 400) ? 1 : 6;
  }

  getLogisticsData(): void {
    this.eps = this.logisticsService.getData();
    this.logistics = this.extractLogisticsData(this.eps);

    this.setListAndOption();
  }

  setListAndOption() {
    this.selectedList = new Array(this.eps.length).fill(true);
    this.selectedOption = new Array(this.logistics.length).fill(true);
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

  toggleList(list: number): void {
    this.selectedList[list] = !this.selectedList[list];

    for (let option = 0; option < 4; option++) {
      this.selectedOption[list * 4 + option] = this.selectedList[list];
    }

    this.checkList(list);
  }

  toggleOption(list: number, option: number): void {
    this.selectedOption[list * 4 + option] = !this.selectedOption[list * 4 + option];

    this.checkList(list);
  }

  checkList(list: number): void {
    this.selectedList[list] = this.selectedOption[list * 4] &&
      this.selectedOption[list * 4 + 1] &&
      this.selectedOption[list * 4 + 2] &&
      this.selectedOption[list * 4 + 3];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setGridCols();
  }
}
