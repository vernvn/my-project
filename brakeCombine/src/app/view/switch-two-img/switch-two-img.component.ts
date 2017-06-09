import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'switch-two-img',
    providers: [
    ],
    templateUrl: './switch-two-img.component.html',
    styleUrls: ['./switch-two-img.component.scss'],
})
// IC图片模板  Hc上内容 Mis中间多图片
export class SwitchTwoImgComponent implements OnInit {
    pageData: any;
    item: any;
    itemSrc: any;
    spanText:any;
    spanText2:any;
    index: number = 0;
    buttonStatus: any; // 记录点击的哪一个按钮
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current.content;

    }

    // 生命周期钩子函数
    ngOnInit() {
        const appService = this.appService;
        const _this = this;
        this.item = document.getElementsByClassName('first')[0];
        // console.log(appService.state.current.page , appService.state.progress)
        // console.log(this.pageData)
        if (appService.state.current.page >= appService.state.progress) {
            this.pageData.pointStyleArr.forEach(v => {
                v.showed = false;
            });
            // this.itemSrc = this.pageData.imgs[0];
            // this.spanText = this.pageData.spanText[0];
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.pointStyleArr.forEach(v => {
                v.showed = true;
            });
            switch(this.pageData.index){
                case 1:this.itemSrc = this.pageData.imgs[1]; this.spanText = this.pageData.spanText[1];this.spanText2 = '';break;
                case 2:this.itemSrc = this.pageData.imgs[2]; this.spanText = this.pageData.spanText[2];this.spanText2 = this.pageData.spanText[3];break;
                case 3:this.itemSrc = this.pageData.imgs[3]; this.spanText = this.pageData.spanText[4];this.spanText2 = '';break;
            }
            setTimeout(()=>{
                this.changeButtonStatus();
            }, 0)
        }
        
        this.setLearn();
    }
    changeButtonStatus(){
        $('.fixbutton').eq(this.pageData.index-1).removeClass('buttonStatus').addClass('buttonStatusActive').parent().siblings().find('.fixbutton').removeClass('buttonStatusActive').addClass('buttonStatus');
    }

    switchImg1_2(obj) {
        obj.showed = true;
        this.pageData.index = 1;
        this.pageData.pointStyleArr[0].showed = true;
        this.itemSrc = this.pageData.imgs[1];
        this.spanText = this.pageData.spanText[1];
        this.spanText2 = '';
        this.pageData.imgSrc = this.pageData.imgs[1];
        this.item.style.opacity = 0;
        $(this.item).animate({
            opacity: 1
        }, 1000);
        this.changeButtonStatus()
        this.setLearn();
    }
    switchImg2_1(obj) {
        obj.showed = true;
        this.pageData.index = 2;
        this.pageData.pointStyleArr[1].showed = true;
        this.itemSrc = this.pageData.imgs[2];
        this.pageData.imgSrc = this.pageData.imgs[2];
        this.spanText = this.pageData.spanText[2];
        if(this.pageData.spanText[3]){
            this.spanText2 = this.pageData.spanText[3];
        }
        this.item.style.opacity = 0;
        $(this.item).animate({
            opacity: 1
        }, 1000);
        this.changeButtonStatus();
        this.setLearn();
    }

    switchImg3_1(obj) {
        obj.showed = true;
        this.pageData.index = 3;
        this.pageData.pointStyleArr[2].showed = true;
        this.itemSrc = this.pageData.imgs[3];
        this.pageData.imgSrc = this.pageData.imgs[3];
        this.spanText = this.pageData.spanText[4];
        this.spanText2 = '';
        this.item.style.opacity = 0;
        $(this.item).animate({
            opacity: 1
        }, 1000);
        this.changeButtonStatus();
        this.setLearn();
    }
    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.pointStyleArr.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
        // console.log('允许下一页', this.appService.nextPage);
    }
}

