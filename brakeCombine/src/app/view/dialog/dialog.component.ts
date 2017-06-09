import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';

const CD = 10;

@Component({
    selector: 'point-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class DialogComponent implements OnInit {
    @Input() data: any;
    @Output('open') openEvent = new EventEmitter<void>();
    @Output('close') closeEvent = new EventEmitter<void>();
    showDialog: boolean;
    pointBgClass;
    halo;
    cd: {
        time: number,
        tp: any;
    };
    constructor(
        public appService: AppService,
    ) {
        this.cd = {
            time: CD,
            tp: null,
        };
        this.halo='start'
    }

    ngOnInit() {
        // console.log(this.data);
        // console.log(this.closeEvent);
        //
        this.setPointBgClass();
        // console.log(this.data);
    }

    openDialog() {
        this.openEvent.emit();

        // console.log(this.data);
        // this.event();

        // this.data.showDialog = true;
        clearInterval(this.cd.tp);

        // 处理学习过的触发点
        if (this.data.showed) {
            this.cd.time = 0;
        } else {
            this.cd.time = CD;
        }
        // 设置每个学习触发点的计时器
        this.cd.tp = setInterval(() => {
            this.cd.time--;
            if (this.cd.time < 0)
                clearInterval(this.cd.tp);
        }, 1000);

    }

    closeDialog() {
        // this.data.showDialog = false;
        // this.data.showed = true;
        // console.log($event);
        this.closeEvent.emit();

    }

    // 触发点的定位
    position(imgObj) {
        const styles = {
            'left': this.data.position.left + 'px',
            'top': this.data.position.top + 'px',
            'width': this.data.position.width + 'px',
            'height': this.data.position.height + 'px',
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
        if (a.showed) return;
        // console.log('done', this.halo, a.showed);
        if (this.halo === 'start') {
            setTimeout(() => {
                this.halo = 'end';
            }, 15);
        } else if (this.halo === 'end') {
            setTimeout(() => {
                this.halo = 'start';
            }, 15);
        }
    }
}
