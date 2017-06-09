
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
    imgArr: any[];
    canvas: any;
    type: any;
    class: boolean;
    showing: boolean;
 pointBgClass: {};
    cd: {
        time: number,
        tp: any;
    };
    constructor(
        public appService: AppService,

    ) {
        this.imgArr = this.appService.state.current.content;

        this.cd = {
            time: CD,
            tp: null,
        };
         this.showing = false;
    }

    // 生命周期钩子函数
    ngOnInit() {

         //
        this.setPointBgClass();
        const appService = this.appService;
        // console.log(this.imgArr);
        let c = document.getElementById('canvas');
        c.width = 800;
        c.height = 500;
        this.canvas = c.getContext('2d');
         this.canvas.lineWidth = 2;
        //    // 初始化点(默认闪烁)
        // this.imgArr.forEach(v => {
        //     v.showed = false;
        // });
        // 初始化页面中每个触发点的状态
        if (appService.state.current.page >= appService.state.progress) {
            this.imgArr.forEach(v => {
                v.showed = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.imgArr.forEach(v => {
                v.showed = true;
                setTimeout(() => {
                    this.showImg(v, true);
                }, 15);
                // console.log(this);
            });

        }
        // // 根据每个触发点的状态改变当前页面的学习状态
         this.setLearn();
        // if (appService.state.current.page < appService.state.progress) {
        //     this.appService.setNextPage(true);
        // }

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
  // canvas连线
    getMove(imgObj) {
         this.showing = false;
         if (!this.appService.state.current.line) return;
        let mod = $('.mod');
        let mmd = mod[imgObj.type - 1];
        if(mmd){
            let width = mmd.offsetWidth;
            let height = mmd.offsetHeight;
        }
        let leftNum = imgObj.position.wbleft - imgObj.position.left;
        let topNum = imgObj.position.wbtop - imgObj.position.top;
        // console.log(leftNum);
        // console.log(topNum);
        // console.log('111', this.type);
        // console.log('宽度', width);

        this.canvas.moveTo(imgObj.position.left, imgObj.position.top);
        // console.log(imgObj.position.left, imgObj.position.top);
         let x, y;
        if (leftNum <= 0) {
            x = parseInt(imgObj.position.wbleft, 10) + width - 3;
        } else if (leftNum >= 0) {
            x = parseInt(imgObj.position.wbleft, 10) + 3;
        }
        if (topNum <= 0) {
            y = parseInt(imgObj.position.wbtop, 10) + height - 3;
        } else if (topNum >= 0) {
            y = parseInt(imgObj.position.wbtop, 10) + 3;
        }
        this.canvas.lineTo(x, y);
        this.canvas.stroke();
        // console.log('x', x, 'y', y, 'width', width, 'height', height);
    }
// 文本框弹出
    showImg(imgObj, flag) {
    //     if (imgObj.showed === true) return;
         if (!flag) {
            if (imgObj.showed) return;
            // if (this.showing) return;
        }
        this.showing = true;
        this.cd.time = CD;
        this.type = imgObj.type;
        this.class = true;

        imgObj.showed = true;
        imgObj.class = true;

        let aa = '#mod_' + this.type;
        let dialog = $(aa);
        const left = imgObj.position.wbleft - imgObj.position.left + 'px';
        const top = imgObj.position.wbtop - imgObj.position.top + 'px';
        let that = this;

        dialog.animate(
            {
                opacity: 1,
            }, 500
        )
            .animate({
                left: left,
                top: top,
            }, 600,  that.getMove.bind(that, imgObj));
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
    };
       // 通过设置点的类名,改变样式
    setPointBgClass() {
        // CSS classes: added/removed per current state of component properties
        this.pointBgClass = {
            'blue-point': this.appService.state.current.pointStyle === 'point',
            'mail': this.appService.state.current.pointStyle === 'mail',
        };
    }
     positions(imgObj) {
        const styles = {
            'left': imgObj.position.left + 'px',
            'top': imgObj.position.top + 'px',
            'width': imgObj.style.width + 'px',
        };
        return styles;
    };
    // 根据每个触发点的状态改变当前页面的学习状态,是否允许进入下一页
    setLearn() {
        this.appService.setNextPage(true);
        this.imgArr.forEach(v => {
            if (v.showed === false)
                this.appService.setNextPage(false);
        });
        // console.log('允许下一页', this.appService.nextPage);
    }
}
