import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations' ;

// 导入jquery
declare const $;

@Component({
    selector: 'fjz-ic-hc-mi',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
    animations: [flyIn] ,
})
// IC 图片 Hc 头部文本  Mi 中部一张图片
export class FjzICHcMiComponent implements OnInit, AfterViewInit, OnDestroy {
    animationTag: any[] = [];
    // 图片动画组
    imgAnimation: any[] = [];
    animate: any[] = [];
    count: number = 0;
    pageData: any;
    stopAnimation: any = null;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;
        // 获取所有图片对象
        let imgs = this.pageData.content.imgs;
        // 图片中不带动画 跳出动画提取的方法
        if (!imgs.animationGroups) {
            return;
        }
        for (let animatioGroup of imgs.animationGroups) {
            for (let items of animatioGroup.animation) {
                // console.log('东湖组3', items);
                this.animationTag.push(items);
            }
            if (animatioGroup.animation.length > 0) {
                this.imgAnimation.push(animatioGroup);
            }
        }
        // console.log('东湖组3', imgs);
    }

    // 生命周期钩子函数
    ngOnInit() {
        if (this.appService.state.current.page >= this.appService.state.progress) {
           this.appService.setNextPage(false);
        }
        else{
            this.appService.setNextPage(true);
        }
        this.animate = this.factortyAnimationGroup();
    }
    ngAfterViewInit() {
        // 第一次进入执行所有动画  第二次进入
        // console.log(this.appService.state.current.page, this.appService.state.progress )
        if (this.appService.state.current.page >= this.appService.state.progress) {
            this.createCallback(0);
        } else {
            for (let i of this.animationTag) {
                if (i.type === 'dynamic' && !i.hide) {
                    $('#' + i.id).css(i.endStyle);
                } else {
                    $('#' + i.id).css({
                        opacity: '1'
                    });
                }
            }
        }
    }

    ngOnDestroy() {
        // console.log( 'xiaohuo' );
        // console.log(this.stopAnimation);
        if (this.stopAnimation) {
            // console.log( '关闭动画！' )
            this.stopAnimation.stop();
        }
    }


    // 生产动画callback函数
    createCallback(n: number, arr: string[]= []  ): void {
        // 隐藏上一动画不要的标签
        if (arr) {
            for (let e of arr){
                $(e).hide();
            }
        }
        if (this.count === (this.animate.length)) {
            this.appService.setNextPage(true);
            return;
        }
        let i = this.animate[(n)];
        let count = i.length;
        let current = 0;
        // console.log(i);
        let hideTag = [];
        for (let e of i) {
            if (e.hide) {  // 将要隐藏的数据保存起来 在下一个callback中隐藏
                hideTag.push('#' + e.id);
            }
            if (current === (count - 1)) {
                // 结束动画的样式
                let s = e.endStyle;
                let cb = this.createCallback;
                let a = hideTag;
                if (hideTag.length > 0) {
                    this.stopAnimation = $('#' + e.id).animate(s, e.time, cb.bind(this, n + 1, a));
                }else {
                    this.stopAnimation = $('#' + e.id).animate(s, e.time, cb.bind(this, n + 1));
                }

            } else {
                this.stopAnimation = $('#' + e.id).animate(e.endStyle, e.time);
            }
            current++;
        }
        this.count++;
    }




    // 动画优先级分组
    factortyAnimationGroup(): any {
        // console.log('1');
        // 循环所有的动画组 并按优先级分组处理
        let animation = [];
        for (let animationGroup of this.imgAnimation) {
            let array = animationGroup.animation;
            let temIndex = -1;
            let temObj = [];
            let curIndex = 0;
            for (let item of array) {
                // console.log(item.orderIndex, temIndex);
                if (temIndex === item.orderIndex) {
                    temObj.push(item);
                } else {
                    if (curIndex !== 0) {
                        temObj = [];
                    }
                    temObj.push(item);
                    animation.push(temObj);
                }
                curIndex++;
                temIndex = item.orderIndex;
            }
            // animation.push(animation);
            // console.log(animation);
        }
        // console.log('eeee');
        // console.log(animation);
        // console.log('eeee');
        return animation;
        // console.log( this.imgAnimation);
        // let array = this.imgAnimation[0].animation;
        // let animation = [];
        // let temIndex = -1;
        // let temObj = [];
        // let curIndex = 0;
        // for (let item of array) {
        //     console.log(item.orderIndex, temIndex);
        //     if (temIndex === item.orderIndex) {
        //         temObj.push(item);
        //     } else {
        //         if (curIndex !== 0) {
        //             temObj = [];
        //         }
        //         temObj.push(item);
        //         animation.push(temObj);
        //     }
        //     curIndex++;
        //     temIndex = item.orderIndex;
        // }
        // console.log(animation);
        // return animation;
    }


}

