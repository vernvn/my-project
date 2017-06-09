import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import { NoticeService } from './notice.service';


@Component({
  selector: 'magotan-notice',
  providers: [
    NoticeService,
  ],
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  componentArray;
  constructor(
    public appService: AppService,
    public noticeService: NoticeService,
    private zone: NgZone,
  ) {
  }

  // 生命周期钩子函数
  ngOnInit() { }


  switchPage(way: string) {
    this.noticeService.switchPage(way);
  }
}
