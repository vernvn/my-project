import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { MultipleService } from '../multiple/multiple.service';

declare const $;


@Component({
    selector: 'multiple-content',
    providers: [
    ],
    templateUrl: './multiple-content.component.html',
    styleUrls: ['./multiple-content.component.scss']
})
export class MultipleContentComponent implements OnInit, OnDestroy {

    daohang;
    jingyin;
    count;
    cd;
    zhen;
    dB;
    daohangA;
    constructor(
        public appService: AppService,
        public multipleService: MultipleService,
    ) {
        this.daohang = false;
        this.daohangA = {};
        this.jingyin = false;
        this.zhen = false;
        this.count = 0;
        this.dB = 86;
    }

    // 生命周期钩子函数
    ngOnInit() {

        // 噪音测试
        if (this.multipleService.currImg.content.type === 10) {
            setInterval(() => {
                // console.log('jingyin-cd');
                this.dB = Math.floor(Math.random() * 10 + 80);
            }, 600);


        }

        // 定速巡航
        if (this.multipleService.currImg.content.type === 7) {

            if (this.multipleService.currImg.content.animation === 'hongguangS1')
                this.daohangAnimate('hongguangS1');
            else
                this.daohangAnimate(' ');


            // 背景
            let daohangBG = -651;
            clearInterval(this.daohangA.bg);
            this.daohangA.bg = setInterval(() => {
                daohangBG += 5;
                if (daohangBG > 0)
                    daohangBG = -651;
                // console.log('jingyin-bg');
                $('.daohang .back').css({
                    left: daohangBG,
                });
            }, 15);
        }

        // 图片闪烁
        if (this.multipleService.currImg.content.type === 3 ||
            this.multipleService.currImg.content.type === 4) {
            this.flare();
        }
    }
    ngOnDestroy() {
        // ...
        clearInterval(this.daohangA.zhen);
        clearInterval(this.daohangA.car);
        clearInterval(this.daohangA.bg);
    }
    flare() {
        let i = 0;
        const cd = setInterval(() => {
            i++;
            $('.flare')
                .stop()
                .animate({
                    opacity: 0,
                }, 500)
                .animate({
                    opacity: 1,
                }, 500);
            if (i > 2) {
                // console.log(i);
                clearInterval(cd);
            }
        }, 1000);
    }
    daohangAnimate(car) {
        clearInterval(this.daohangA.zhen);
        clearInterval(this.daohangA.car);

        if (car === 'hongguangS1') {

            let jiaodu = 90;
            let flg = true;
            // 表针
            this.daohangA.zhen = setInterval(() => {
                // console.log('daohangZHEN');

                if (flg)
                    jiaodu -= 2;
                else
                    jiaodu += 2;

                if (jiaodu < 70) {
                    flg = false;
                }
                if (jiaodu > 90) {
                    flg = true;
                }
                $('.zhen').css({
                    transform: 'rotate(' + jiaodu + 'deg) scale(.635385)',
                });
            }, 100);
        } else {

            let jiaodu = 10;
            let flg = true;
            // 表针
            this.daohangA.zhen = setInterval(() => {

                // console.log('daohangZHEN');
                if (flg)
                    jiaodu -= 1;
                else
                    jiaodu += 1;

                if (jiaodu < 0) {
                    flg = false;
                }
                if (jiaodu > 10) {
                    flg = true;
                }

                $('.zhen').css({
                    transform: 'rotate(' + jiaodu + 'deg) ',
                });
            }, 100);
        }


        $('.daohang .car').stop().animate({
            left: '-30px',
        }, 1000, 'linear', () => {
            $('.daohang .car').stop().animate({
                left: '0px',
            }, 1000);
        });
        // 汽车
        this.daohangA.car = setInterval(() => {
            $('.daohang .car').stop().animate({
                left: '-30px',
            }, 1000, 'linear', () => {
                $('.daohang .car').stop().animate({
                    left: '0px',
                }, 1000);
            });
        }, 2000);
    }
    openDaoHang() {
        this.daohang = true;

        clearInterval(this.daohangA.car);
        clearInterval(this.daohangA.zhen);




        if (this.multipleService.currImg.content.animation === 'hongguangS1')
            $('.zhen').css({
                transform: 'rotate(' + 90 + 'deg) scale(.635385)',
            });
        else
            $('.zhen').css({
                transform: 'rotate(' + 8 + 'deg) ',
            });


    }

    closeDaoHang() {
        this.daohang = false;

        if (this.multipleService.currImg.content.animation === 'hongguangS1')
            this.daohangAnimate('hongguangS1');
        else
            this.daohangAnimate(' ');

    }

    switchJingYin($event) {
        this.count = 0;
        clearInterval(this.cd);

        if (!this.jingyin) {
            setTimeout(() => {
                this.zhen = true;
                this.cd = setInterval(() => {
                    if (this.count < 40)
                        this.count += 10;
                    else
                        clearInterval(this.cd);
                }, 600);
            }, 300);


            // 背景
            let soudL = 0;
            this.daohangA.bg = setInterval(() => {
                soudL -= 1;
                if (soudL < -651)
                    soudL = 0;
                // console.log('jingyin-bg');
                $('.sd').css({
                    left: soudL,
                });
            }, 10);

        }
        if (this.jingyin) {
            this.zhen = false;
            clearInterval(this.daohangA.bg);
        }
        this.jingyin = !this.jingyin;


    }

}

