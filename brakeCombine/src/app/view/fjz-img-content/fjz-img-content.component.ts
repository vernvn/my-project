import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations' ;


@Component({
    selector: 'fjz-ic-hc-mis-bc',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
    animations: [flyIn] ,
})
// Hc 头部内容  Mis 中部多图片 Bc 底部文字
export class FjzICHcMisBcComponent implements OnInit {

    pageData: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current;
        // console.log(this.pageData);

    }

    // 生命周期钩子函数
    ngOnInit() {


    }


}

