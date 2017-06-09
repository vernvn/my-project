import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations' ;


@Component({
    selector: 'fjz-ic-hc-mis',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
    animations: [flyIn] ,
})
// IC图片模板  Hc上内容 Mis中间多图片
export class FjzICHcMisComponent implements OnInit {

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

