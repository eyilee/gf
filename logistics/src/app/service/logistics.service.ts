import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Options } from '../interface/options.interface';
import { Ep } from '../interface/ep.interface';
import { Logistic } from '../interface/logistic.interface';

import { OptionsData } from '../const/options.const';
import { EpData } from '../const/ep.const';
import { LogisticData } from '../const/logistic.const';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  readonly options: Options;

  readonly eps: Ep[];
  readonly logistics: Logistic[];

  private currentResult: Subject<any> = new Subject<any>();

  constructor() {
    this.options = OptionsData;

    this.eps = EpData;
    this.logistics = LogisticData;
  }

  get theCurrentResult(): Observable<any> {
    return this.currentResult.asObservable();
  }

  calculate(options: Options, selected: Array<boolean>): any {
    const weightedResult = this.getWeightedResult(options, selected);

    this.currentResult.next(weightedResult);
  }

  getWeightedResult(options: Options, selected: Array<boolean>): any {
    const result = [];

    this.logistics.forEach((value, index) => {
      if (!selected[index]) {
        return;
      }

      const score =
        value.Mp * options.Mp
        + value.Ammo * options.Ammo
        + value.Mre * options.Mre
        + value.Part * options.Part
        + value.IOP_Contract * options.IOP_Contract
        + value.EQUIP_Contract * options.EQUIP_Contract
        + value.Quick_Develop * options.Quick_Develop
        + value.Quick_Reinforce * options.Quick_Reinforce
        + value.Furniture_Coin * options.Furniture_Coin;

      const time = options.time.hr * 3600 + options.time.min * 60;

      const cycle = (time === 0) ? value.time / 3600 : Math.ceil(value.time / time);

      result.push({
        id: value.id,
        weight: score / cycle,
      });
    });

    result.sort((a, b) => {
      return b.weight - a.weight;
    });

    return result;
  }

}
