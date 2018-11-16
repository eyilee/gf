import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ControlTableComponent } from '../control-table/control-table.component';
import { Ep } from 'src/app/interface/ep';
import { Logistic } from 'src/app/interface/logistic';
import { LogisticsService } from 'src/app/service/logistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(ControlTableComponent)
  controlTableComponent: ControlTableComponent;

  eps: Ep[];
  logistics: Logistic[];

  constructor(private logisticsService: LogisticsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.eps = this.logisticsService.getEpData();
    this.logistics = this.logisticsService.getLogisticData();
  }

  ngAfterViewInit(): void {
    console.log(this.controlTableComponent.selectedList);
    console.log(this.controlTableComponent.selectedOption);
  }
}
