import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'lee-ic-hc-mis',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
})
// IC图片模板  Hc上内容 Mis中间多图片
export class LeeICHcMisComponent implements OnInit {

    pageData: any;
    emails: any[];
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;
        // console.log(this.pageData);
        if(this.appService.state.current.emails){
            this.emails = this.appService.state.current.emails;
        }

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
            if(this.emails){
                this.emails.forEach((v, k) => {
                    v.showed = false;
                });
            }
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.point.forEach(v => {
                v.showed = true;
            });
            if(this.emails){
                this.emails.forEach((v, k) => {
                    v.showed = true;
                });
            }
            setTimeout(()=>{
                _this.clickModal('');
            },0)
        }
        this.setLearn();
    }

    clickModal(obj) {
        if(obj){
            obj.showed = true;
        }
        let _this = this;
        let ele = document.getElementsByClassName('header-content-explain')[0];
        let ele1 = document.getElementsByClassName('header-content-explain')[1];
        $(ele).animate({
            opacity: '1'
        }, 1000);
        $(ele1).animate({
            opacity: '1'
        }, 1000);
        this.setLearn();
    }

    showtip(data) {
        data.showed = true;
        data.showTip = true;
        this.setLearn();
    }

    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.point.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
        if(this.emails){
            this.emails.forEach(v => {
                if (v.showed === false)
                    this.appService.setNextPage(false);
            });
        }
        // console.log('允许下一页', this.appService.nextPage);
    }


}

