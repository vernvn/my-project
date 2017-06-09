import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations';


@Component({
    selector: 'lgy-ri-lc',
    providers: [
    ],
    templateUrl: './lgy-img.component.html',
    styleUrls: ['./lgy-img.component.scss'],
    animations: [flyIn],
})

//    ri 右文字  Lc 左图片
export class LgyLcRiComponent implements OnInit {

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

