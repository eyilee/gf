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
        case 'iop_contract':
          return compare(a.iop_contract, b.iop_contract, isAsc);
        case 'equip_contract':
          return compare(a.equip_contract, b.equip_contract, isAsc);
        case 'quick_develop':
          return compare(a.quick_develop, b.quick_develop, isAsc);
        case 'quick_reinforce':
          return compare(a.quick_reinforce, b.quick_reinforce, isAsc);
        case 'furniture_coin':
          return compare(a.furniture_coin, b.furniture_coin, isAsc);
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
