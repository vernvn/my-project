import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'lee-ic-hc-mi',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
})
// IC 图片 Hc 头部文本  Mi 中部一张图片
export class LeeICHcMiComponent implements OnInit {

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
        $(ele).animate({
            opacity: '1'
        }, 1000, function(){
            
        });
        this.setLearn()
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

