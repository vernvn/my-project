import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'itemize-flyin',
    providers: [
    ],
    templateUrl: './itemize.component.html',
    styleUrls: ['./itemize.component.scss'],
    animations: [
        flyIn,
    ],
})
export class ItemizeComponent implements OnInit {
    pageData: any;
    animation: any ;
    rotateDeg: number;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current.content;
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.animation = 'void';
        this.rotateDeg = 0;
        let _this = this;
        if (this.appService.state.current.page < this.appService.state.progress
        || this.pageData.showed) {
            this.appService.setNextPage(true);
            $(function(){
                _this.clickModal(_this.pageData.point[0]);
            });
        } else {
            this.appService.setNextPage(false);
        }
     }

     clickModal(obj) {
         obj.showed = true;
         let _this = this;
         let ele = document.getElementsByClassName('itemize-list')[0];
         $(ele).animate({
             opacity: '1'
         }, 1000, function(){
             _this.pageData.showed = true;
            _this.appService.setNextPage(true);
         });
         this.animation = 'left';
    }
}
