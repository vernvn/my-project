import { Component, OnInit } from '@angular/core';
import { CatelogChapterService } from './catelog_chapter.service';
import { PaginationService } from '../pagination';
import { AppService } from '../../index/app.service';
import { CatalogService } from '../catalog/catalog.service';


declare let $: any, Ps: any;


@Component({
    selector: 'catelog-chapter',
    styleUrls: ['./catelog_chapter.component.scss'],
    templateUrl: './catelog_chapter.component.html',
})
/**
 * 处理错误的组件
 */
export class CatelogChapterComponent implements OnInit {

    chapters;
    current;
    progress;
    // 档位开关是否隐藏
    // gearPanelHidden: boolean = true;
    // items = cCatalogs;
    constructor(
        private catelogChapterService: CatelogChapterService,
        private catalogService: CatalogService,
        public appService: AppService,

    ) {
        this.chapters = this.appService.chapters;
        this.current = this.appService.state.current;
    }
    ngOnInit() {
    }



    closeSwitchPanel(val) {

    }

    gotoChapter(chapter) {
        // console.log(this.appService.state.progress);
        if (
            this.appService.state.progress >= chapter.startPage &&
            this.appService.state.progress <= chapter.endPage
        ) {
            this.appService.go2page(this.appService.state.progress);
        } else if (chapter.endPage > this.appService.state.progress)
            return;
        else
            this.appService.go2page(chapter.startPage);
        this.catalogService.closeChapter();

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

    closeChapter($event) {
        if ($event.target.id === 'chapter-box') {
             this.catalogService.closeChapter();
        }
    }
}
