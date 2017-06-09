import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-info',
    providers: [
    ],
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


    constructor(
        public appService: AppService,
    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {


     }


}

