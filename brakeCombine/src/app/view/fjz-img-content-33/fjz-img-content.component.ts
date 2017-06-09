import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'lee-ic-lc-ri',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
})

// Lc左文字   ri 右图片
export class LeeICLcRiComponent implements OnInit {

    pageData: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;
        // console.log(this.pageData);

    }

    // 生命周期钩子函数
    ngOnInit() {
        const appService = this.appService;
        const _this = this;
        // console.log(appService.state.current.page , appService.state.progress)
        if (appService.state.current.page >= appService.state.progress) {
            this.pageData.point.forEach(v => {
                v.showed = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.point.forEach(v => {
                v.showed = true;
            });
            setTimeout(()=>{
                _this.clickModal(_this.pageData.point[0]);
                _this.clickModal(_this.pageData.point[1]);
                _this.clickModal(_this.pageData.point[2]);
            },0)
        }
        this.setLearn();
    }

    clickModal(obj) {
        if(obj){
            obj.showed = true;
        }
        let _this = this;
        let ele = '';
        if(obj.index==='1'){
            ele = document.getElementsByClassName('header-content-explain')[0];
        }else if(obj.index==='2'){
            ele = document.getElementsByClassName('header-content-explain')[1];
        }else if(obj.index==='3'){
            ele = document.getElementsByClassName('header-content-explain')[2];
        }
        $(ele).animate({
            opacity: '1'
        }, 1000);
        this.setLearn();
    }
    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.point.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
        // console.log('允许下一页', this.appService.nextPage);
    }


}

