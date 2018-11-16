import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  options: any;

  constructor() {
    this.options = {
      Mp: 0,
      Ammo: 0,
      Mre: 0,
      Part: 0,
      IOP_Contract: 0,
      EQUIP_Contract: 0,
      Quick_Develop: 0,
      Quick_Reinforce: 0,
      Furniture_Coin: 0
    };
  }

  ngOnInit() {
  }
}
