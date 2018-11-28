import { Component } from '@angular/core';
import { LogisticsService } from 'src/app/service/logistics.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent {

  currentResult: any;

  constructor(private logsitcService: LogisticsService) {
    this.logsitcService.theCurrentResult.subscribe(val => {
      this.currentResult = val;
    });
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.currentResult = this.currentResult.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Mp': return compare(a.Mp, b.Mp, isAsc);
        case 'Ammo': return compare(a.Ammo, b.Ammo, isAsc);
        case 'Mre': return compare(a.Mre, b.Mre, isAsc);
        case 'Part': return compare(a.Part, b.Part, isAsc);
        case 'score': return compare(a.score, b.score, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
