import { Injectable } from '@angular/core';

interface Page {
  pageNum: number;
  title: string;
  content: string[];
}
@Injectable()
export class NoticeService {
  pageArray: Page[];
  currPage: Page;
  constructor() {


    this.pageArray = [
      {
        pageNum: 1,
        title: '匹配前',
        content: [
          '1.为保证电源供应，匹配期间应连接充电机至车辆，确保充电电压不高于14V。',
          '2.确保使用网线连接至Internet。',
          '3.确保根据车辆VIN信息订购新的防盗部件。',
          '4.确保车辆没有存储关于防盗系统的故障码，且防盗系统未被锁止。',
          '5.确保所需匹配的控制单元没有故障。',
          '6.做新身份匹配之前，首先确认至少有一把可用的原车钥匙。',
        ],
      },
      {
        pageNum: 2,
        title: '匹配中',
        content: [
          '1.确保车辆上至少保留2个原车的防盗系统部件。',
          '2.匹配时需要更换的零件和控制单元只能匹配一次。',
          '3.确保蓄电池电压不低于12.5V。',
        ],
      },
      {
        pageNum: 3,
        title: '匹配后',
        content: [
          '1.读取所有控制单元的故障码，应没有存储关于防盗系统的故障码。',
          '2.读取防盗系统的数据流，数据流应正常。',
          '3.确保车辆可以正常起动。',
          '4.确保仪表内的防盗系统指示灯已经熄灭。',
        ],
      },
    ];
    this.currPage = this.pageArray[0];
  }
  /**
   * 跳转页面
   *
   * @param {number} page
   *
   * @memberof NoticeService
   */
  go2Page(page: number) {
    if (page > 0 && page <= this.pageArray.length) {
      this.currPage = this.pageArray[--page];
    }
  }

  /**
   * 切换页码
   *
   * @param {string} way
   * 'next' 下一页
   * 'prev' 上一页
   *
   * @memberof NoticeService
   */
  switchPage(way: string) {
    if (way === 'next') {
      this.go2Page(this.currPage.pageNum + 1);
    } else if (way === 'prev') {
      this.go2Page(this.currPage.pageNum - 1);
    }
  }

}
