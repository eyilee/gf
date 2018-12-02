import { Component, OnInit } from '@angular/core';
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

  constructor(private logisticsService: LogisticsService) {
    this.options = this.logisticsService.options;

    this.eps = this.logisticsService.eps;
    this.logistics = this.logisticsService.logistics;
  }

  ngOnInit(): void {
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

  calculate(): void {
    this.logisticsService.calculate(this.options, this.selectedOption);
  }
}
