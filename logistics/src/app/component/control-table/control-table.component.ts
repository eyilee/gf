import { Component, OnInit, HostListener, Input } from '@angular/core';

import { Ep } from 'src/app/interface/ep';
import { Logistic } from 'src/app/interface/logistic';
import { LogisticsService } from 'src/app/service/logistics.service';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.css']
})
export class ControlTableComponent implements OnInit {

  @Input()
  eps: Ep[];

  @Input()
  logistics: Logistic[];

  selectedList: boolean[];
  selectedOption: boolean[];

  gridCols: number;

  constructor() { }

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
