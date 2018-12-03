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

  readonly eps: Ep[];
  readonly logistics: Logistic[];
  readonly options: Options;

  private results: Subject<any> = new Subject<any>();

  constructor() {
    this.eps = EpData;
    this.logistics = LogisticData;
    this.options = OptionsData;
  }

  getResults(): Observable<any> {
    return this.results.asObservable();
  }

  calculate(options: Options, selectedLogistics: boolean[]): void {
    const weightedLogistics = this.getWeightedLogistics(options, selectedLogistics);

    const bestCombinations = this.getBestCombinations(options, weightedLogistics);

    this.results.next(bestCombinations);
  }

  getWeightedLogistics(options: Options, selectedLogistics: boolean[]): any[] {
    const result = [];

    this.logistics.forEach((value, index) => {
      if (!selectedLogistics[index]) {
        return;
      }

      const score =
        value.mp * options.mp
        + value.ammo * options.ammo
        + value.mre * options.mre
        + value.part * options.part
        + value.iop_contract * options.iop_contract
        + value.equip_contract * options.equip_contract
        + value.quick_develop * options.quick_develop
        + value.quick_reinforce * options.quick_reinforce
        + value.furniture_coin * options.furniture_coin;

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

  getBestCombinations(options: Options, weightedLogistics: any[]): any[] {
    let combination_limit = options.combination_limit;

    for (let i = 0; i < options.team_limit; i++) {
      combination_limit *= i + 1;
    }

    const numberToKeep = Math.pow(combination_limit, 1 / options.team_limit) + options.team_limit - 1;

    const reducedLogistics = weightedLogistics.slice(0, numberToKeep);

    const combinations = [];
    this.getAllCombinations(combinations, reducedLogistics, options.team_limit);

    combinations.sort((a, b) => {
      return b.weight - a.weight;
    });

    return this.getDetailOfCombinations(combinations).slice(0, options.combination_limit);
  }

  getAllCombinations(combinations: any[], logistics: any[], team: number, currentCombination: any[] = [], index: number = 0): void {
    if (team === 0) {
      const ids = [];
      let weight = 0;

      for (let i = 0; i < currentCombination.length; i++) {
        ids.push(logistics[currentCombination[i]].id);
        weight += logistics[currentCombination[i]].weight;
      }

      combinations.push({
        combination: ids.sort(),
        weight: weight
      });
    }

    for (let i = index; i < logistics.length; i++) {
      currentCombination.push(i);
      this.getAllCombinations(combinations, logistics, team - 1, currentCombination, i + 1);
      currentCombination.pop();
    }
  }

  getDetailOfCombinations(combinations: any[]): any[] {
    const result = [];

    combinations.forEach(value => {
      const currentCombination = {
        codes: [],
        mp: 0,
        ammo: 0,
        mre: 0,
        part: 0,
        iop_contract: 0,
        equip_contract: 0,
        quick_develop: 0,
        quick_reinforce: 0,
        furniture_coin: 0,
        weight: 0
      };

      value.combination.forEach(id => {
        const logistic = this.logistics.find(x => x.id === id);

        currentCombination.codes.push(logistic.code);
        currentCombination.mp += logistic.mp;
        currentCombination.ammo += logistic.ammo;
        currentCombination.mre += logistic.mre;
        currentCombination.part += logistic.part;
        currentCombination.iop_contract += logistic.iop_contract;
        currentCombination.equip_contract += logistic.equip_contract;
        currentCombination.quick_develop += logistic.quick_develop;
        currentCombination.quick_reinforce += logistic.quick_reinforce;
        currentCombination.furniture_coin += logistic.furniture_coin;
      });

      currentCombination.weight = value.weight;

      result.push(currentCombination);
    });

    return result;
  }

}
