import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';

// 导入jquery
declare const $;

@Component({
    selector: 'point-tip',
    templateUrl: './tip.component.html',
    styleUrls: ['./tip.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})

export class TipComponent implements OnInit {
    @Input() data: any;
    @Input() style: any;
    @Output('open') openEvent = new EventEmitter<void>();
    showTip: boolean;
    halo;
    pointBgClass;

    constructor(
        public appService: AppService,
    ) {

    }

    ngOnInit() {
        // console.log(this.data)
        if (!this.data.showed)
            this.data.showTip = false;
        // console.log(this.closeEvent);
        this.setPointBgClass();
        if(this.data.showed){
            setTimeout(()=>{
                this.getMove();
            },500)
        }
    }

    openTip(tipModal, $event) {
        // console.log('cilck');
        if (this.data.showed) return;
        if (this.data.tip === 'tip') return;
        // this.data.showed = true;
        // setTimeout(function () {
        //     // console.log(tipModal.querySelector('.tip-modal'));
        // }, 1000);
    }

    mouseover() {
        if (this.data.tip !== 'tip') return;
        this.openEvent.emit();
        setTimeout(()=>{
            this.getMove();
        },500)
        // this.data.showed = true;
        // this.data.showTip = true;
    }
    mouseout() {
        if (this.data.tip !== 'tip') return;
        this.data.showed = false;
        this.data.showTip = false;
    }

    // 触发点的定位
    pointPosition(imgObj) {
        const styles = {
            'left': this.data.position.left + 'px',
            'top': this.data.position.top + 'px',
            'width': this.data.position.width + 'px',
            'height': this.data.position.height + 'px',
        };
        return styles;
    }
    // 触发点的定位
    tipPosition(imgObj) {
        const styles = {
            'left': this.data.position.wbleft + 'px',
            'top': this.data.position.wbtop + 'px',
            // 'width': this.data.position.width + 'px',
            // 'height': this.data.position.height + 'px',
        };
        return styles;
    }

    // 通过设置点的类名,改变样式
    setPointBgClass() {
        let obj = {};
        obj[this.data.pointStyle] = true;
        this.pointBgClass = obj;

    }

    // 实现点的无限闪烁
    animationDone(a) {
        // console.log(a)
        if (a.showed) return;
        if (this.halo === 'start') {
            setTimeout(() => {
                this.halo = 'end';
            }, 15);
        } else {
            setTimeout(() => {
                this.halo = 'start';
            }, 15);
        }
    }

    // canvas连线
    getMove() {
        // console.log(this.data)
        if(!this.data.canCanvas){
            return;
        }
        let imgObj = this.data;
        const c: any = document.getElementById('tip-canvas');
        c.width = 1024;
        c.height = 580;
        const canvas: any = c.getContext('2d');
        canvas.lineWidth = 2;
        // console.log(this.appService.state.current);
        let mmd: any = document.querySelector('.tip-modal');
        // console.log(imgObj.type);
        // console.log(mmd);
        // let width = mmd.offsetWidth;
        // let height = mmd.offsetHeight;
        // console.log(imgObj)
        // let width = mmd.offsetWidth;
        // let height = mmd.offsetHeight;
        let leftNum = imgObj.position.wbleft - imgObj.position.left;
        let topNum = imgObj.position.wbtop - imgObj.position.top;

        canvas.moveTo(imgObj.position.left, imgObj.position.top);
        // canvas.moveTo(imgObj.position.left - 50, Number(imgObj.position.top)+Number(25));

        let x, y;
        if (leftNum <= 0) {
            // x = parseInt(imgObj.position.wbleft, 10) + width - 5;
        } else if (leftNum >= 0) {
            x = parseInt(imgObj.position.wbleft, 10) + 5;
        }
        if (topNum <= 0) {
            // y = parseInt(imgObj.position.wbtop, 10) + height - 5;
        } else if (topNum >= 0) {
            y = parseInt(imgObj.position.wbtop, 10) + 5;
        }
        // console.log()
        canvas.lineTo(574+180,163+140);

        canvas.stroke();
        // console.log(x,y)
        // canvas.lineTo(x, y);
        // canvas.stroke();

    }

}
