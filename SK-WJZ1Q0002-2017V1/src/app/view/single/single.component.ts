import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-single',
    providers: [
    ],
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {


    constructor(
        public appService: AppService,
    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {


     }


}

