import { Component, OnInit } from '@angular/core';
import { LogisticsService } from './service/logistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: object;

  constructor(private logisticsService: LogisticsService) { }

  ngOnInit(): void {
    this.data = this.logisticsService.getData();
  }

}
