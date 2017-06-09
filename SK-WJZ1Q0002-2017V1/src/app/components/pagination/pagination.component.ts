import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';
import { CatelogChapterService } from '../catelogChapter';
import { AppService } from '../../index/app.service';

declare let $: any;
@Component({
    selector: 'sg-pagination',
    providers: [
    ],
    styleUrls: ['./pagination.component.scss'],
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
    constructor(
        public catelogChapterService: CatelogChapterService,
        public paginationService: PaginationService,
        public appService: AppService,
    ) {
    }
    ngOnInit() {

    }


    go2page(target: number) {
        const appService = this.appService;
        appService.go2page(appService.state.current.page + target);
    }
}
