import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/service/logistics.service';
import { Sort } from '@angular/material';
import { Logistic } from 'src/app/interface/logistic.interface';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {

  sortedData: Logistic[];

  constructor(private logsitcService: LogisticsService) {
    this.sortedData = logsitcService.logistics;
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    const data = this.logsitcService.logistics;

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Mp': return compare(a.Mp, b.Mp, isAsc);
        case 'Ammo': return compare(a.Ammo, b.Ammo, isAsc);
        case 'Mre': return compare(a.Mre, b.Mre, isAsc);
        case 'Part': return compare(a.Part, b.Part, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
