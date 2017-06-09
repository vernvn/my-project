import { Component, OnInit, Input, Output } from '@angular/core';
import { AppService } from '../../index/app.service';

@Component({
    selector: 'button-click',
    template: `
        <span class="buttonStatus fixbutton" [ngStyle]="buttonStyle()">{{data.text}}</span>
    `,
    styles: [`
        .buttonStatus{
            position: absolute;
            display: block;
            text-align: center;
            background: url(./assets/images/up.png);
        }
        .buttonStatusActive{
            position: absolute;
            display: block;
            text-align: center;
            background: url(./assets/images/down.png);
        }
    `]
})

export class ButtonComponent implements OnInit {
    @Input() data: any;
    constructor(
        public appService: AppService,
    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {
        // console.log(this.data);
    }

    buttonStyle () {
        return this.data.position;
    }
}
