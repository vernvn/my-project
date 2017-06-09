import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const document;

@Component({
    selector: 'transmission-ratio',
    providers: [
    ],
    templateUrl: './transmission.component.html',
    styleUrls: ['./transmission.component.scss'],
})
export class TransmissionComponent implements OnInit {
    pageData: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current.content;
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.appService.setNextPage(true);
    }
}
