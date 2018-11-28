import { Component } from '@angular/core';
import { LogisticsService } from 'src/app/service/logistics.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  options: any;

  constructor(private logisticsService: LogisticsService) {
    this.options = {
      Mp: 0,
      Ammo: 0,
      Mre: 0,
      Part: 0,
      IOP_Contract: 0,
      EQUIP_Contract: 0,
      Quick_Develop: 0,
      Quick_Reinforce: 0,
      Furniture_Coin: 0,
      time: {
        hr: 0,
        min: 0
      },
      team: 4
    };
  }

  calculate(): void {
    this.logisticsService.calculate(this.options);
  }
}
