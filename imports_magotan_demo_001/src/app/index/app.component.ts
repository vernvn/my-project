
import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';


declare var $: any;


/*
 * App Component
 * App Component
 * Top Level Component
 */
require('./app.component.css');

@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showMenu: string;
  constructor(
    public appService: AppService,
    private router: Router,

  ) { }

  public ngOnInit() {
    // this.appService.init();
    console.log(this.appService);

    // ------------------ 获取平台数据 ------------------
    $.xcj.scorm.api.loadPage();
    if ($.xcj.scorm.api.getComplete() !== 'incomplete' &&
      $.xcj.scorm.api.getComplete() !== 'completed') {
      $.xcj.scorm.api.setComplete('not attempted');
      $.xcj.scorm.api.doCommit();
    }

    const rePage = $.xcj.scorm.api.getSuspendData();
    if (rePage === '' || rePage === undefined || rePage === 'false') {
      // saved = 4;
    } else {
      this.appService.suspendData = JSON.parse(rePage);
    }
    // 恢复原理进度
    // this.getsuspendData();

    if (this.appService.suspendData.router) {
      this.go2router(this.appService.suspendData.router);
    }
  }

  switchMenu(type: string) {
    if (type === 'left') {
      console.log('left' + '====' + type);
      if (this.showMenu === type) {
        this.showMenu = 'none';
      } else {
        this.showMenu = type;
      }
    } else if (type === 'none') {
      this.showMenu = type;
    } else if (type === 'right') {
      console.log(type);
      if (this.showMenu === type) {
        this.showMenu = 'none';
      } else {
        this.showMenu = type;
      }
    }
  }

  go2router(a) {
    this.router.navigate([a]);

    this.showMenu = 'none';

  }

  // 恢复进度
  getsuspendData() {
    const principle = this.appService.suspendData.principle;
    if (!principle.publishArray) {
      return;
    }
    // 恢复状态
    for (let key in principle.componentArray) {
      if (principle.componentArray.hasOwnProperty(key)) {
        Object.assign(this.appService.state.current.componentArray[key], principle.componentArray[key]);
      }
    }
    // 恢复事件进度
    this.appService.state.current.publishArray.progress = principle.publishArray.progress;
  }
}


