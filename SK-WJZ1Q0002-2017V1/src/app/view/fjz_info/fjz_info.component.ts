import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'fjz-info',
    providers: [
    ],
    templateUrl: './fjz_info.component.html',
    styleUrls: ['./fjz_info.component.scss']
})
export class FjzInfoComponent implements OnInit {

    pageData: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;
    }

    // 生命周期钩子函数
    ngOnInit() {


    }


}

