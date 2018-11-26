import { Injectable } from '@angular/core';

import { Ep } from '../interface/ep.interface';
import { Logistic } from '../interface/logistic.interface';

import { EpData } from '../const/ep.const';
import { LogisticData } from '../const/logistic.const';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  private options: any;

  readonly eps: Ep[];
  readonly logistics: Logistic[];

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
      Furniture_Coin: 0,
      time: {
        hr: 0,
        min: 0
      }
    };

    this.eps = EpData;
    this.logistics = LogisticData;
  }

  calculate(options: any): any {
    const option = { ...this.options, ...options };
    console.log(option);
  }

}
