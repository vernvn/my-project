import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
declare const $;
declare const document;
@Component({
    selector: 'gy-beacon',
    providers: [
    ],
    templateUrl: './beacon.component.html',
    styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

    chapters;
    current;
    progress;
    constructor(
        public appService: AppService,
    ) {
        this.chapters = this.appService.chapters;
    }
    ngOnInit() {

    }
      // 显示学习状态
    stuState(chapter) {
        let classes = {
            fin: chapter.endPage < this.appService.state.progress,
            stu: this.appService.state.progress >= chapter.startPage &&
            this.appService.state.progress <= chapter.endPage,
        };
        return classes;
    }

}
