import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations';

@Component({
    selector: 'fjz-ic-lc-ri',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
    animations: [flyIn],
})

// Lc左文字   ri 右图片
export class FjzICLcRiComponent implements OnInit {

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
stuState(chapter) {
        let classes = {
            fin: chapter.flag,
            stu: chapter.flag
        };
        return classes;
    }

}

