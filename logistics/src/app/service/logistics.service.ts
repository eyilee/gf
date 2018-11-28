import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Ep } from '../interface/ep.interface';
import { Logistic } from '../interface/logistic.interface';

import { EpData } from '../const/ep.const';
import { LogisticData } from '../const/logistic.const';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  readonly eps: Ep[];
  readonly logistics: Logistic[];

  private options: any;
  private currentResult: Subject<any> = new Subject<any>();

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
      },
      team: 4
    };

    this.eps = EpData;
    this.logistics = LogisticData;
  }

  calculate(options: any): any {
    const option = { ...this.options, ...options };

    const result = [];

    this.logistics.forEach(element => {
      const score =
        element.Mp * option.Mp
        + element.Ammo * option.Ammo
        + element.Mre * option.Mre
        + element.Part * option.Part
        + element.IOP_Contract * option.IOP_Contract
        + element.EQUIP_Contract * option.EQUIP_Contract
        + element.Quick_Develop * option.Quick_Develop
        + element.Quick_Reinforce * option.Quick_Reinforce
        + element.Furniture_Coin * option.Furniture_Coin;

      const time = option.time.hr * 3600 + option.time.min * 60 || 3600;

      const cycle = time > element.time ? 1 : Math.ceil(element.time / time);

      result.push({
        ...element,
        weight: score / cycle,
      });
    });

    this.currentResult.next(result);
  }

  get theCurrentResult(): Observable<any> {
    return this.currentResult.asObservable();
  }

}
