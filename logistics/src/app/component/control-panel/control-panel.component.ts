import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/service/logistics.service';
import { Ep } from 'src/app/interface/ep.interface';
import { Logistic } from 'src/app/interface/logistic.interface';
import { Options } from 'src/app/interface/options.interface';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  readonly eps: Ep[];
  readonly logistics: Logistic[];

  options: Options;
  selectedList: boolean[];
  selectedOption: boolean[];

  constructor(private logisticsService: LogisticsService) {
    this.eps = logisticsService.eps;
    this.logistics = logisticsService.logistics;
    this.options = JSON.parse(JSON.stringify(logisticsService.options));
  }

  ngOnInit(): void {
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

  // TODO: refactor
  stepUp(prop: string): void {
    this.options[prop] = Math.floor(this.options[prop]) + 1;
  }

  // TODO: refactor
  stepDown(prop: string): void {
    this.options[prop] = Math.floor(this.options[prop]) - 1;
  }

  calculate(): void {
    this.logisticsService.calculate(this.options, this.selectedOption);
  }

  reset(): void {
    this.options = JSON.parse(JSON.stringify(this.logisticsService.options));
  }
}
