import { Component, OnInit } from '@angular/core';
import { CloseWindowService } from './close_window.service';
import { AppService } from '../../index/app.service';
import { Router, } from '@angular/router';
declare const $;

@Component({
  selector: 'close-window',
  styleUrls: ['./close_window.component.scss'],

  templateUrl: './close_window.component.html'
})
export class CloseWindowComponent implements OnInit {
  modal;
  constructor(
    private appService: AppService,
    private closeWindowService: CloseWindowService,
    private router: Router,
  ) {
    this.modal = false;
  }
  ngOnInit() {
    console.log('注册非正常退出课程事件');
    // 非正常退出课程时,调用退出方法
    window.onbeforeunload = () => {
      this.closeWindow();
    };
  }
  exitStudy() {
    this.modal = true;
  }
  closeWindow() {
    this.appService.suspendData.router = this.router.routerState.snapshot.url;
    //  console.log( this.router.routerState.snapshot.url);
    this.router.navigate(['/home']);

    // debugger
    // 保存进度
    $.xcj.scorm.api.setSuspendData(JSON.stringify(this.appService.suspendData));
    // 提交数据
    $.xcj.scorm.api.doCommit();
    // 平台退出
    $.xcj.scorm.api.doQuit();

    this.closeWindowService.closeWindow();
  }
  reStudy() {
    this.modal = false;
  }
}
