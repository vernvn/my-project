import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'magotan-home',
    providers: [
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    componentArray;
    constructor(
        public appService: AppService,
        private zone: NgZone,
    ) {
    }

    // 生命周期钩子函数
    ngOnInit() {}



}
