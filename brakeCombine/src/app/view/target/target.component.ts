
import { AppService } from '../../index/app.service';
import { Component, OnInit } from '@angular/core';

declare const $;
declare const document;
// declare const window;

const CD = 10;

@Component({
    selector: 'lg-target',
    providers: [
    ],
    templateUrl: './target.component.html',
    styleUrls: ['./target.component.scss']

})
export class TargetComponent implements OnInit {
    selectImge: any;
    imgArr: any[];
    canvas: any;
    type: any;
    class: boolean;
    showing: boolean;
    pointBgClass: {};
    progress: number;
    emails: any[];
    constructor(
        public appService: AppService,

    ) {
        if(this.appService.state.current.content){
            this.imgArr = this.appService.state.current.content;
        }
        if(this.appService.state.current.emails){
            this.emails = this.appService.state.current.emails;
        }
        this.showing = false;
        this.progress = 0;

    }

    // 生命周期钩子函数
    ngOnInit() {
        // this.imgArr[0].showDialog = false;
        // this.imgArr[1].showDialog = false;

        // console.log(this.imgArr[0]);
        // console.log(this.imgArr[1]);
        // console.log(this.imgArr[2]);
        //
        this.setPointBgClass();

        const appService = this.appService;
        // console.log(this.imgArr);
        let c = document.getElementById('canvas');

        c.width = 1024;
        c.height = 560;
        this.canvas = c.getContext('2d');
        this.canvas.lineWidth = 2;
        // 初始化页面中每个触发点的状态
        if (appService.state.current.page >= appService.state.progress) {
            if(this.imgArr){
                this.imgArr.forEach((v, k) => {
                    v.showed = false;
                    // console.log(v.type)
                    if (v.type)
                        console.error('Unexpected property of type for config');
                    Object.assign(v, {
                        type: ++k,
                    });
                });
            }
            if(this.emails){
                this.emails.forEach((v, k) => {
                    v.showed = false
                    if (v.type)
                        console.error('Unexpected property of type for config');
                    Object.assign(v, {
                        type: ++k,
                    });
                });
            }
        } else if (appService.state.current.page < appService.state.progress && this.imgArr) {
            if(this.imgArr){
                this.imgArr.forEach((v, k) => {
                    v.showed = true;
                    if (!v.type)
                        Object.assign(v, {
                            type: ++k,
                        });
                    setTimeout(() => {
                        this.showImg(v, true);
                    }, 15);
                });
            }
            if(this.emails){
                this.emails.forEach((v, k) => {
                    v.showed = true
                    if (!v.type)
                        Object.assign(v, {
                            type: ++k,
                        });
                });
            }
        }

        // 根据每个触发点的状态改变当前页面的学习状态
        this.setLearn();

        const cd = setInterval(() => {
            // console.log($('.point.active').length === 0);
            $('.point').stop();
            $('.point.active')
                .animate({
                    opacity: 0.2,
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
    // canvas连线
    getMove(imgObj) {
        this.showing = false;
        // console.log(this.appService.state.current);
        if (!this.appService.state.current.line) return;
        let mod = $('.mod');
        let mmd = mod[imgObj.type - 1];
        // console.log(mod,imgObj.type)
        if(!mmd){
            return;
        }
        let width = mmd.offsetWidth;
        let height = mmd.offsetHeight;
        let leftNum = imgObj.position.wbleft - imgObj.position.left;
        let topNum = imgObj.position.wbtop - imgObj.position.top;

        this.canvas.moveTo(imgObj.position.left - 50, Number(imgObj.position.top) + Number(65));
        // console.log(imgObj.position.left, imgObj.position.top);
        let x, y;
        if (leftNum <= 0) {
            x = parseInt(imgObj.position.wbleft, 10) + width - 5;
        } else if (leftNum >= 0) {
            x = parseInt(imgObj.position.wbleft, 10) + 5;
        }
        // console.log(topNum)
        if (topNum <= 0) {
            y = parseInt(imgObj.position.wbtop, 10) + height - 5;
        } else if (topNum >= 0) {
            y = parseInt(imgObj.position.wbtop, 10) + 5;
        }
        // console.log( x, y );
        this.canvas.lineTo(x, y);
        this.canvas.stroke();

    }
    // 文本框弹出
    showImg(imgObj, flag) {
        // console.log(imgObj);
        // 每个点只能点一次
        if (!flag) {
            if (imgObj.showed) return;
            // if (this.showing) return;
            // 保证点按顺序点击
            if (this.appService.state.current.order) {
                console.log('1111')
                if (this.progress < imgObj.type - 1) {
                    console.log('order');
                    return;
                } else {
                    this.progress++;
                }
            }
        }


        // console.log('shou');
        this.showing = true;
        // this.selectImge = imgObj;
        this.type = imgObj.type;
        this.class = true;

        imgObj.showed = true;
        imgObj.class = true;

        let aa = '#mod_' + this.type;
        let dialog = $(aa);
        const left = imgObj.position.wbleft - imgObj.position.left + 'px';
        const top = imgObj.position.wbtop - imgObj.position.top + 'px';
        let that = this;
        // console.log(dialog);
        dialog.animate(
            {
                opacity: 1,
            }, 500
        )
            .animate({
                left: left,
                top: top,
            }, 1000, that.getMove.bind(that, imgObj));

        // 根据每个触发点的状态改变当前页面的学习状态
        this.setLearn();
    }
    // 触发点的定位
    position(imgObj) {
        let bgci = '';
        if (this.appService.state.current.pointStyle === 'point') {
        }
        const styles = {
            'left': (imgObj.position.left - 50) + 'px',
            'top': (Number(imgObj.position.top) + 25) + 'px',
            'width': imgObj.position.width + 'px',
            'height': imgObj.position.height + 'px',
        };
        return styles;
    };
    // 通过设置点的类名,改变样式
    setPointBgClass() {
        // CSS classes: added/removed per current state of component properties
        let obj = {};
        obj[this.appService.state.current.pointStyle] = true;
        this.pointBgClass = obj;

        // this.pointBgClass = {
        // 'blue-point': this.appService.state.current.pointStyle === 'point',
        // 'mail': this.appService.state.current.pointStyle === 'mail',
        // 'box': this.appService.state.current.pointStyle === 'box',
        // };
    }
    positions(imgObj) {
        const styles = {
            'left': imgObj.position.left + 'px',
            'top': imgObj.position.top + 'px',
            'width': imgObj.style.width + 'px',
        };

        return styles;
    };
    style(imgObj) {
        return imgObj.style;
    };
    // 根据每个触发点的状态改变当前页面的学习状态,是否允许进入下一页
    setLearn() {
        this.appService.setNextPage(true);
        if ( this.imgArr ) {
            this.imgArr.forEach(v => {
                if (v.showed === false)
                    this.appService.setNextPage(false);
            });
        }
        if ( this.emails ) {
            this.emails.forEach(v => {
                if (v.showed === false)
                    this.appService.setNextPage(false);
            });
        }
        // console.log(this.emails,this.imgArr)
        // console.log('允许下一页', this.appService.nextPage);
    }

    close(aa, $event) {
        // console.log('close');
        // console.log(this);
        // console.log(aa);
        // console.log($event);
        return false;
    }
    haha() {
        // console.log('haha');
        // console.log(this);
    }

    showtip(data) {
        if (data.showed) return;
        // 保证点按顺序点击
        if (this.appService.state.current.order) {
            if (this.progress < data.type - 1) {
                // console.log('order');
                return;
            } else {
                this.progress++;
            }
        }
        data.showed = true;
        data.showTip = true;
        this.setLearn();

    }
}
