import { Component, HostListener, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/service/logistics.service';
import { Ep } from 'src/app/interface/ep.interface';
import { Logistic } from 'src/app/interface/logistic.interface';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  options: any;

  readonly eps: Ep[];
  readonly logistics: Logistic[];

  selectedList: boolean[];
  selectedOption: boolean[];

  gridCols: number;

  constructor(private logisticsService: LogisticsService) {
    this.options = this.logisticsService.options;

    this.eps = this.logisticsService.eps;
    this.logistics = this.logisticsService.logistics;
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
    if (window.innerWidth <= 576) {
      this.gridCols = 1;
    } else if (window.innerWidth <= 768) {
      this.gridCols = 3;
    } else if (window.innerWidth <= 992) {
      this.gridCols = 4;
    } else if (window.innerWidth <= 1200) {
      this.gridCols = 6;
    } else {
      this.gridCols = 8;
    }
  }

  calculate(): void {
    this.logisticsService.calculate(this.options, this.selectedOption);
  }
}
