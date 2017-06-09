import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { halo } from '../../animations';

declare const $;
declare const document;

@Component({
    selector: 'switch-img',
    providers: [
    ],
    templateUrl: './switch-img.component.html',
    styleUrls: ['./switch-img.component.scss'],
    animations: [
        halo,
    ],
})
// IC图片模板  Hc上内容 Mis中间多图片
export class SwitchImgComponent implements OnInit {

    pageData: any;
    twoImgShow: boolean;
    item: any;
    itemSrc: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;

    }

    // 生命周期钩子函数
    ngOnInit() {
        this.twoImgShow = false;
        this.itemSrc = this.pageData.content.imgs[0];
        const appService = this.appService;
        let _this = this;

        if (this.appService.state.current.page < this.appService.state.progress) {
            this.pageData.showed = true;
        }
        if (this.pageData.showed) {
            this.appService.setNextPage(true);
            $(function(){
                _this.switchImg();
            });
        }  else {
            this.appService.setNextPage(false);
        }
    }

    switchImg() {
        let dialog = document.getElementsByClassName('dialog-btn')[0];
        let first = document.getElementsByClassName('first')[0];
        let _self = this;
        dialog.style.display = 'none';
        first.style.opacity = 0;
        _self.itemSrc = _self.pageData.content.imgs[1];
        $(first).animate({
            opacity: 1
        }, 1000, function(){
            _self.pageData.showed = true;
            _self.appService.setNextPage(true);
        });
    }
}

