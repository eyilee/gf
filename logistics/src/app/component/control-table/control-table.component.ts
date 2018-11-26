import { Component, OnInit, HostListener } from '@angular/core';

import { Ep } from 'src/app/interface/ep.interface';
import { Logistic } from 'src/app/interface/logistic.interface';
import { LogisticsService } from 'src/app/service/logistics.service';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.css']
})
export class ControlTableComponent implements OnInit {

  readonly eps: Ep[];
  readonly logistics: Logistic[];

  selectedList: boolean[];
  selectedOption: boolean[];

  gridCols: number;

  constructor(private logisticService: LogisticsService) {
    this.eps = logisticService.eps;
    this.logistics = logisticService.logistics;
  }

  ngOnInit(): void {
    this.setGridCols();
    this.setListAndOption();
  }

  setListAndOption(): void {
    this.selectedList = new Array(this.eps.length).fill(true);
    this.selectedOption = new Array(this.logistics.length).fill(true);
  }

  getLogisticById(id: number): Logistic {
    return this.logistics.find(x => x.id === id);
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

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setGridCols();
  }

  setGridCols(): void {
    this.gridCols = (window.innerWidth <= 400) ? 1 : 6;
  }
}
