import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { ElsaWinService } from './elsaWin.service';

declare const $: any;

@Component({
    selector: 'magotan-elsa-win',
    providers: [
    ],
    templateUrl: './elsaWin.component.html',
    styleUrls: ['./elsaWin.component.scss']
})

export class ElsaWinComponent implements OnInit, OnDestroy {

  componentArray;
  resetScale: boolean = false;
    constructor(
        public appService: AppService,
        public elsaWinService: ElsaWinService,
        private zone: NgZone,
    ) {
    }

    dataStorage(): void {
        this.appService.suspendData.elsaWinCache = { currPage: {} };
        this.appService.suspendData.elsaWinCache.currPage = this.elsaWinService.currPage;
    }

    ngOnDestroy() {
        this.dataStorage();
    }

    // 生命周期钩子函数
    ngOnInit() {
        if (this.appService.suspendData.elsaWinCache.currPage) {
            this.elsaWinService.currPage = this.appService.suspendData.elsaWinCache.currPage;
        }
    }
    // 输入框按回车
    onEnter(value: string) {
        if (value.length !== 6) {
            return;
        }
        this.elsaWinService.switchPage('next');
    }
    // 点击闪动框跳转页面
    click() {
        // this.elsaWinService.switchPage('next');
        // 第四页三秒钟后自动跳转
        if (this.elsaWinService.currPage.pageNum === 3) {
            this.elsaWinService.switchPage('next', '1');
        } else {
            // 正常跳转下一页
            this.elsaWinService.switchPage('next');
        }
    }

    changeHandler(value: string) {
        // 控制数据字符长度
      if (value.length === 18) {
        if (value.substr(0, 3) === 'WVW') {
          this.elsaWinService.currPage.box['type'] = '2';
          this.elsaWinService.currPage.box['style'] = {
            'left': '729px',
            'top': '313px',
            'width': '60px',
            'height': '15px'
          };
        } else {
          return;
        }
      }
    }
    setScroll(rud): void {
        let scrollTop = $('#svgmap').scrollTop();
        let scrollLeft = $('#svgmap').scrollLeft();
        switch (rud) {
          case 1:
            this.elsaWinService.scrollHeight = scrollTop + 200;
            break;
          case 2:
            if (scrollTop <= 0) {
              return;
            }
            this.elsaWinService.scrollHeight = scrollTop - 200;
              break;
          case 3:
            this.elsaWinService.scrollWidth = scrollLeft + 200;
                break;
          case 4:
            if (scrollLeft <= 0) {
              return;
            }
                this.elsaWinService.scrollWidth = scrollLeft - 200;
                break;
            default:
                break;
        }
        if (rud === 1 || rud === 2) {
          $('#svgmap').scrollTop(this.elsaWinService.scrollHeight);
        } else {
            $('#svgmap').scrollLeft(this.elsaWinService.scrollWidth);
        }

    }
    Amplification(id): void {
        if (id === 1) {
            this.elsaWinService.scale = this.elsaWinService.scale + 2;
            if (this.elsaWinService.scale >= 16) {
              this.elsaWinService.scale = 16;
              this.resetScale = true;
            }
        } else if (id === 2) {
          if (!this.resetScale) {
            return;
          }
            this.elsaWinService.scale = this.elsaWinService.scale - 2;
            if (this.elsaWinService.scale < 12) {
                this.elsaWinService.scale = 10;
            }
        } else if (id === 3) {
          if (!this.resetScale) {
            return;
          }
            this.elsaWinService.scale = 10;
        }
        $('#filebody').css({ '-ms-transform-origin': '0% 0%', '-weikit-transform-origin': '0% 0%', '-moz-transform-origin': '0% 0%', 'transform-origin': '0% 0%' });
        $('#filebody').css('transform', 'scale(' + (this.elsaWinService.scale / 10) + ')');
        if (this.elsaWinService.scale === 10) {
            $('.content-body').scrollTop('0');
            $('.content-body').scrollLeft('0');
            // $('#filebody').css('left', '0px');
            // $('#filebody').css('top', '0px');
        }
    };


}
