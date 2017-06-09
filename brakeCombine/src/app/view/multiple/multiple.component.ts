import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { MultipleService } from './multiple.service';

declare const $;

const CD = 10;

@Component({
    selector: 'sk-multiple',
    providers: [
    ],
    templateUrl: './multiple.component.html',
    styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

    imgArr: any[];
    currImg;
    isShowImg;
    animation;
    cd: {
        time: number,
        tp: any;
    };
    constructor(
        public appService: AppService,
        public multipleService: MultipleService,
    ) {
        this.imgArr = this.appService.state.current.content;
        this.isShowImg = false;
        this.animation = false;
        this.cd = {
            time: CD,
            tp: null,
        };
    }

    // 生命周期钩子函数
    ngOnInit() {
        const appService = this.appService;
        // console.log(this.imgArr);

        // 初始化页面中每个触发点的状态
        if (appService.state.current.page >= appService.state.progress) {
            this.imgArr.forEach(v => {
                v.showed = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.imgArr.forEach(v => {
                v.showed = true;
            });
        }

        // 根据每个触发点的状态改变当前页面的学习状态
        this.setLearn();

        const cd = setInterval(() => {
            // console.log($('.point.active').length === 0);
            $('.point').stop();
            $('.point.active')
                .animate({
                    opacity: 0.3,
                }, 500)
                .animate({
                    opacity: 1,
                }, 500);
            // console.log(document.querySelectorAll('.point'));
            if ($('.point.active').length === 0) {
                clearInterval(cd);
            }
        }, 1000);

    }
    showImg(imgObj) {
        this.cd.time = CD;
        clearInterval(this.cd.tp);

        // 设置每个学习触发点的计时器
        this.cd.tp = setInterval(() => {
            this.cd.time--;
        }, 1000);

        this.currImg = imgObj;
        this.multipleService.currImg = imgObj;
        this.isShowImg = true;
        this.animation = true;
        let dialog = $('.modal-dialog');
        let top = 580;
        const si = setInterval(() => {
            top -= 30;
            if (top < 0) {
                top = 0;
                clearInterval(si);
            }
            if (dialog.length === 0)
                dialog = $('.modal-dialog');
            dialog.css({
                transform: 'translate(0,' + top + 'px)',
            });
        }, 15);

        // 处理学习过的触发点
        if (imgObj.showed === true) {
            this.cd.time = 0;
        }

    }
    closeImg(imgObj) {
        this.isShowImg = false;
        this.animation = false;
        clearInterval(this.cd.tp);

        imgObj.showed = true;

        // 根据每个触发点的状态改变当前页面的学习状态
        this.setLearn();
    }

    // 触发点的定位
    position(imgObj) {
        const styles = {
            'left': imgObj.position.left + 'px',
            'top': imgObj.position.top + 'px',
        };
        return styles;
    }

    // 根据每个触发点的状态改变当前页面的学习状态,是否允许进入下一页
    setLearn() {
        this.appService.setNextPage(true);
        this.imgArr.forEach(v => {
            if (v.showed === false)
                this.appService.setNextPage(false);
        });
        // console.log('允许下一页', this.appService.nextPage);
    }


    clickModal(imgObj, $event) {
        // console.log($event);

        if ($event.target.id === 'modal' && this.cd.time <= 0) {

            this.closeImg(imgObj);
        }
    }
}

