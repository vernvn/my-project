
import { AppService } from '../../index/app.service';
import { Component, OnInit } from '@angular/core';
import { halo } from '../../animations';

declare const $;
declare const document;
// declare const window;

@Component({
    selector: 'target-more',
    providers: [
    ],
    templateUrl: './target-more.component.html',
    styleUrls: ['./target-more.component.scss'],
    animations: [
        halo,
    ],
})
export class TargetMoreComponent implements OnInit {
    pageData: any;
    show1: boolean;
    show2: boolean;
    constructor(
        public appService: AppService,

    ) {
        this.pageData = this.appService.state.current.content;
    }

    // 生命周期钩子函数
    ngOnInit() {
        const  _this = this;
        const appService = this.appService;
        // console.log(appService.state.current.page , appService.state.progress)
        // console.log(this.pageData)
        if (appService.state.current.page >= appService.state.progress) {
            this.pageData.content.forEach(v => {
                v.showed = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.content.forEach(v => {
                v.showed = true;
                setTimeout(()=>{
                    _this.showImg1(_this.pageData.content[0]);
                    _this.showImg2(_this.pageData.content[1]);
                },0)
            });
        }

        this.setLearn()
    }

    showImg1(obj) {
        obj.showed = true;
        let _self = this;
        let imgList = document.getElementsByTagName('img');
        $(imgList[0]).animate({
            opacity: '1'
        }, 1000);
        this.setLearn()
    }
    showImg2(obj) {
        obj.showed = true;
        let _self = this;
        let imgList = document.getElementsByTagName('img');
        $(imgList[1]).animate({
            opacity: '1'
        }, 1000);
        this.setLearn()
    }

    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.content.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
        // console.log('允许下一页', this.appService.nextPage);
    }
}
