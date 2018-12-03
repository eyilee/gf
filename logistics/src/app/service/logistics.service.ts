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

    const result = this.getBestCombination(options, weightedResult);

    this.currentResult.next(result);
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

  getBestCombination(options: Options, weighted: any[]): any {
    let combinations = options.combination;

    for (let i = 0; i < options.team; i++) {
      combinations *= i + 1;
    }

    const least = Math.pow(combinations, 1 / options.team) + options.team - 1;

    const reduced = weighted.slice(0, least);

    const allCombinations = [];
    this.getAllCombination(allCombinations, reduced, options.team);

    allCombinations.sort((a, b) => {
      return b.weight - a.weight;
    });

    return this.getCombinationDetail(allCombinations);
  }

  getAllCombination(allCombinations: any[], reduced: any[], team: number, index: number = 0, currentCombination: any[] = []): any {
    if (team === 0) {
      const ids = [];
      let weight = 0;

      for (let i = 0; i < currentCombination.length; i++) {
        ids.push(reduced[currentCombination[i]].id);
        weight += reduced[currentCombination[i]].weight;
      }

      allCombinations.push({
        combination: ids.sort(),
        weight: weight
      });
    }

    for (let i = index; i < reduced.length; i++) {
      currentCombination.push(i);
      this.getAllCombination(allCombinations, reduced, team - 1, i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  getCombinationDetail(combinations) {
    const result = [];

    combinations.forEach(value => {
      const currentCombination = {
        codes: [],
        Mp: 0,
        Ammo: 0,
        Mre: 0,
        Part: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        weight: 0
      };

      value.combination.forEach(id => {
        const logistic = this.getLogisticById(id);

        currentCombination.codes.push(logistic.code);
        currentCombination.Mp += logistic.Mp;
        currentCombination.Ammo += logistic.Ammo;
        currentCombination.Mre += logistic.Mre;
        currentCombination.Part += logistic.Part;
        currentCombination.IOP_Contract += logistic.IOP_Contract;
        currentCombination.EQUIP_Contract += logistic.EQUIP_Contract;
        currentCombination.Quick_Develop += logistic.Quick_Develop;
        currentCombination.Quick_Reinforce += logistic.Quick_Reinforce;
        currentCombination.Furniture_Coin += logistic.Furniture_Coin;
      });

      currentCombination.weight = value.weight;

      result.push(currentCombination);
    });

    return result;
  }

  getLogisticById(id: number): Logistic {
    return this.logistics.find(x => x.id === id);
  }

}
