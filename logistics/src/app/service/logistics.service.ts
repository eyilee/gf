import { Injectable } from '@angular/core';

import { Ep } from '../interface/ep';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  constructor() { }

  getData(): Ep[] {
    return data;
  }
}

const data: Ep[] = [
  {
    id: 0,
    name: '第零戰役',
    logistics: [
      {
        id: 1,
        code: '0-1',
        name: '應援訓練',
        human: 0,
        ammunition: 145,
        ration: 145,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 3000
      },
      {
        id: 2,
        code: '0-2',
        name: '梯隊集訓',
        human: 550,
        ammunition: 0,
        ration: 0,
        component: 350,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 10800
      },
      {
        id: 3,
        code: '0-3',
        name: '特種支援',
        human: 900,
        ammunition: 900,
        ration: 900,
        component: 250,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 43200
      },
      {
        id: 4,
        code: '0-4',
        name: '聯合演習',
        human: 0,
        ammunition: 1200,
        ration: 800,
        component: 750,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 1,
        time: 86400
      }
    ]
  },
  {
    id: 1,
    name: '第一戰役',
    logistics: [
      {
        id: 5,
        code: '1-1',
        name: '熱身運動',
        human: 10,
        ammunition: 30,
        ration: 15,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 900
      },
      {
        id: 6,
        code: '1-2',
        name: '巡邏戒嚴',
        human: 0,
        ammunition: 40,
        ration: 60,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 1800
      },
      {
        id: 7,
        code: '1-3',
        name: '傷患搬運',
        human: 30,
        ammunition: 0,
        ration: 30,
        component: 10,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 3600
      },
      {
        id: 8,
        code: '1-4',
        name: '全境搜查',
        human: 160,
        ammunition: 160,
        ration: 0,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 7200
      }
    ]
  },
  {
    id: 2,
    name: '第二戰役',
    logistics: [
      {
        id: 9,
        code: '2-1',
        name: '前線偵查',
        human: 100,
        ammunition: 0,
        ration: 0,
        component: 30,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 2400
      },
      {
        id: 10,
        code: '2-2',
        name: '後方運輸',
        human: 60,
        ammunition: 200,
        ration: 80,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 5400
      },
      {
        id: 11,
        code: '2-3',
        name: '工廠快遞',
        human: 10,
        ammunition: 10,
        ration: 10,
        component: 230,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 14400
      },
      {
        id: 12,
        code: '2-4',
        name: '採集數據',
        human: 0,
        ammunition: 250,
        ration: 600,
        component: 60,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 21600
      }
    ]
  },
  {
    id: 3,
    name: '第三戰役',
    logistics: [
      {
        id: 13,
        code: '3-1',
        name: '強化工事',
        human: 50,
        ammunition: 0,
        ration: 75,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 1200
      },
      {
        id: 14,
        code: '3-2',
        name: '截獲密報',
        human: 0,
        ammunition: 120,
        ration: 70,
        component: 30,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 2700
      },
      {
        id: 15,
        code: '3-3',
        name: '交通管制',
        human: 0,
        ammunition: 300,
        ration: 0,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 5400
      },
      {
        id: 16,
        code: '3-4',
        name: '封鎖密道',
        human: 0,
        ammunition: 0,
        ration: 300,
        component: 300,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 5400
      }
    ]
  },
  {
    id: 4,
    name: '第四戰役',
    logistics: [
      {
        id: 17,
        code: '4-1',
        name: '視野支援',
        human: 0,
        ammunition: 185,
        ration: 185,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 3600
      },
      {
        id: 18,
        code: '4-2',
        name: '切斷補給',
        human: 0,
        ammunition: 0,
        ration: 0,
        component: 210,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 7200
      },
      {
        id: 19,
        code: '4-3',
        name: '竊取地圖',
        human: 800,
        ammunition: 550,
        ration: 0,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 21600
      },
      {
        id: 20,
        code: '4-4',
        name: '座標定位',
        human: 400,
        ammunition: 400,
        ration: 400,
        component: 150,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 28800
      }
    ]
  },
  {
    id: 5,
    name: '第五戰役',
    logistics: [
      {
        id: 21,
        code: '5-1',
        name: '例行檢閱',
        human: 0,
        ammunition: 0,
        ration: 100,
        component: 45,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 1800
      },
      {
        id: 22,
        code: '5-2',
        name: '現場救援',
        human: 0,
        ammunition: 600,
        ration: 300,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 9000
      },
      {
        id: 23,
        code: '5-3',
        name: '路線追蹤',
        human: 800,
        ammunition: 400,
        ration: 400,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 14400
      },
      {
        id: 24,
        code: '5-4',
        name: '維穩工作',
        human: 100,
        ammunition: 0,
        ration: 0,
        component: 700,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 25200
      }
    ]
  },
  {
    id: 6,
    name: '第六戰役',
    logistics: [
      {
        id: 25,
        code: '6-1',
        name: '協助救援',
        human: 300,
        ammunition: 300,
        ration: 0,
        component: 100,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 7200
      },
      {
        id: 26,
        code: '6-2',
        name: '遠程偵察',
        human: 0,
        ammunition: 200,
        ration: 550,
        component: 100,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 10800
      },
      {
        id: 27,
        code: '6-3',
        name: '提取科技',
        human: 0,
        ammunition: 0,
        ration: 200,
        component: 500,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 18000
      },
      {
        id: 28,
        code: '6-4',
        name: '戰場搜索',
        human: 800,
        ammunition: 800,
        ration: 800,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 1,
        time: 43200
      }
    ]
  },
  {
    id: 7,
    name: '第七戰役',
    logistics: [
      {
        id: 29,
        code: '7-1',
        name: '監視據點',
        human: 650,
        ammunition: 0,
        ration: 650,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 9000
      },
      {
        id: 30,
        code: '7-2',
        name: '接應隊友',
        human: 0,
        ammunition: 650,
        ration: 0,
        component: 300,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 14400
      },
      {
        id: 31,
        code: '7-3',
        name: '清理道路',
        human: 900,
        ammunition: 600,
        ration: 600,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 19800
      },
      {
        id: 32,
        code: '7-4',
        name: '追蹤傀儡',
        human: 250,
        ammunition: 250,
        ration: 250,
        component: 600,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 28800
      }
    ]
  },
  {
    id: 8,
    name: '第八戰役',
    logistics: [
      {
        id: 33,
        code: '8-1',
        name: '籌集資料',
        human: 150,
        ammunition: 150,
        ration: 150,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 3600
      },
      {
        id: 34,
        code: '8-2',
        name: '解析碎片',
        human: 0,
        ammunition: 0,
        ration: 0,
        component: 450,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 10800
      },
      {
        id: 35,
        code: '8-3',
        name: '勘探現場',
        human: 400,
        ammunition: 800,
        ration: 800,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 21600
      },
      {
        id: 36,
        code: '8-4',
        name: '修訂路線',
        human: 1500,
        ammunition: 400,
        ration: 400,
        component: 100,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 32400
      }
    ]
  },
  {
    id: 9,
    name: '第九戰役',
    logistics: [
      {
        id: 37,
        code: '9-1',
        name: '清理哨站',
        human: 0,
        ammunition: 0,
        ration: 100,
        component: 50,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 1800
      },
      {
        id: 38,
        code: '9-2',
        name: '探測信號',
        human: 180,
        ammunition: 0,
        ration: 180,
        component: 100,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 5400
      },
      {
        id: 39,
        code: '9-3',
        name: '快速營救',
        human: 750,
        ammunition: 750,
        ration: 0,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 16200
      },
      {
        id: 40,
        code: '9-4',
        name: '緊急壓制',
        human: 500,
        ammunition: 900,
        ration: 900,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 25200
      }
    ]
  },
  {
    id: 10,
    name: '第十戰役',
    logistics: [
      {
        id: 41,
        code: '10-1',
        name: '協助驗證',
        human: 140,
        ammunition: 200,
        ration: 0,
        component: 0,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 2400
      },
      {
        id: 42,
        code: '10-2',
        name: '前線支援',
        human: 0,
        ammunition: 240,
        ration: 180,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 6000
      },
      {
        id: 43,
        code: '10-3',
        name: '腹地偵查',
        human: 0,
        ammunition: 480,
        ration: 480,
        component: 300,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 19200
      },
      {
        id: 44,
        code: '10-4',
        name: '奪取通訊',
        human: 660,
        ammunition: 660,
        ration: 660,
        component: 330,
        IOP_Contract: 0,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 36000
      }
    ]
  },
  {
    id: 11,
    name: '第十一戰役',
    logistics: [
      {
        id: 45,
        code: '11-1',
        name: '人員輸送',
        human: 350,
        ammunition: 1050,
        ration: 0,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 1,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 14400
      },
      {
        id: 46,
        code: '11-2',
        name: '破解監視',
        human: 360,
        ammunition: 540,
        ration: 540,
        component: 0,
        IOP_Contract: 1,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 14400
      },
      {
        id: 47,
        code: '11-3',
        name: '外觀偽裝',
        human: 0,
        ammunition: 750,
        ration: 1500,
        component: 250,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 0,
        Quick_Reinforce: 1,
        Furniture_Coin: 0,
        time: 28800
      },
      {
        id: 48,
        code: '11-4',
        name: '突擊支援',
        human: 0,
        ammunition: 1650,
        ration: 0,
        component: 900,
        IOP_Contract: 0,
        EQUIP_Contract: 0,
        Quick_Develop: 1,
        Quick_Reinforce: 0,
        Furniture_Coin: 0,
        time: 36000
      }
    ]
  }
];
