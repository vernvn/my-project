import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;
const CD = 10;
@Component({
    selector: 'lee-ic-hc-mis-bc',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
})
// Hc 头部内容  Mis 中部多图片 Bc 底部文字
export class LeeICHcMisBcComponent implements OnInit {

    pageData: any;

    cd: {
        time: number,
        tp: any;
    };

    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;

        this.cd = {
            time: CD,
            tp: null,
        };

    }

    // 生命周期钩子函数
    ngOnInit() {

        const appService = this.appService;

        if (appService.state.current.page >= appService.state.progress) {
            this.pageData.point.forEach(v => {
                v.showed = false;
                v.learned = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.point.forEach(v => {
                v.showed = true;
                v.learned = false;
            });
        }
        this.setLearn();
    }
    clickModal(obj) {
        obj.learned = true;
        let ele = document.getElementsByClassName('header-content-explain')[0];
        $(ele).animate({
            opacity: '1'
        }, 1000, function(){
        });
        if(!this.pageData.intoPage){
            obj.showed = true;
            this.setLearn();
            return;
        }
        const appService = this.appService;
        console.log(obj.learned)
        if (appService.state.current.page >= appService.state.progress) {
            if(obj.showed){
                this.cd.time = 0;
            }else{
                this.cd.time = CD;
            }
        } else if (appService.state.current.page < appService.state.progress) {
            this.cd.time = 0;
        }
        clearInterval(this.cd.tp);

        // 设置每个学习触发点的计时器
        this.cd.tp = setInterval(() => {
            this.cd.time--;
            if(this.cd.time == 0){
                obj.showed = true;
                this.setLearn()
            }
        }, 1000);
    }

    closeImg(imgObj) {
        imgObj.learned = false;
    }

    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.point.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
    }

}
