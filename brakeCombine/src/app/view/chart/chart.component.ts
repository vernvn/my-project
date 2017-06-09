import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-chart',
    providers: [
    ],
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


    constructor(
        public appService: AppService,
    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {


     }


}

