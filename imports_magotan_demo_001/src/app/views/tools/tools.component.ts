import { Component, OnInit, } from '@angular/core';
import { AppService } from '../../index/app.service';
declare const $: any;



@Component({
  selector: 'magotan-tools',
  providers: [
  ],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  componentArray;
  constructor(
    public appService: AppService,
  ) {
  }

  // 生命周期钩子函数
  ngOnInit() {
    this.drag();
  }

  drag() {
    $('.drag').draggable({
      zIndex: 200,
      revert: true,
      start: (event, ui) => {// ui.helper: 正在拖动的元素的JQuery包装对象, ui.helper.context可以获取到原生的DOM元素.
        console.log('正在拖动');
      },
      drag: function (event, ui) {
      },
      stop: function (event, ui) {
      }
    });
  }


}
