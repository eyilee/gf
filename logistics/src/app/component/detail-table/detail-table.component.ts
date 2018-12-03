import { Component } from '@angular/core';
import { Sort } from '@angular/material';
import { LogisticsService } from 'src/app/service/logistics.service';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent {

  results: any;

  constructor(private logsitcService: LogisticsService) {
    this.logsitcService.getResults().subscribe(results => {
      this.results = results;
    });
  }

  sort(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.results = this.results.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'mp':
          return compare(a.mp, b.mp, isAsc);
        case 'ammo':
          return compare(a.ammo, b.ammo, isAsc);
        case 'mre':
          return compare(a.mre, b.mre, isAsc);
        case 'part':
          return compare(a.part, b.part, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        default:
          return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
