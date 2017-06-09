import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'drag-and-drop',
    templateUrl: './drag-and-drop.component.html',
    styleUrls: ['./drag-and-drop.component.scss']
})

export class DragAndDropComponent implements OnInit, AfterViewInit {
    node: number ;
    dropNodeList: any;
    dragNodeList: any;
    pageData: any;
    dropedtList: any;
    constructor(
        public appService: AppService,
    ) {
        this.pageData = appService.state.current.content;
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.node = 0;
        this.dropNodeList = document.getElementsByClassName('drop-option');
        this.dragNodeList = document.getElementsByClassName('drag-option');
        // if (this.appService.state.current.page < this.appService.state.progress) {
        //     this.pageData.showed = true;
        // }
        // if (this.pageData.showed) {
        //     this.appService.setNextPage(true);
        //     // console.log(this.pageData.dropedtList);
        // } else {
        //     this.appService.setNextPage(false);
        // }
        // if (this.appService.state.current.page < this.appService.state.progress) {
        //     this.pageData.showed = true;
        // }
        // console.log(this.dropNodeList[0].dropFlag);

        const appService = this.appService;
        if (appService.state.current.page >= appService.state.progress) {
            this.pageData.answerOptions.forEach(v => {
                v.showed = false;
            });
        } else if (appService.state.current.page < appService.state.progress) {
            this.pageData.answerOptions.forEach(v => {
                v.showed = true;
            });
        }
        this.setLearn();
    }
    dropEvent (dom) {
        dom.dropFlag = true;
        this.fun1();
    }

    fun1 () {
        for (let i of this.dropNodeList) {
            if (i.dropFlag) {
                this.node ++;
            }
        }
        if (this.node === this.dropNodeList.length) {
            // this.pageData.showed = true;
            this.pageData.answerOptions.forEach(v => {
                v.showed = true;
            });
            this.pageData.dropedtList = this.dropNodeList;
            // this.appService.setNextPage(true);
        } else {
            this.node = 0;
        }
        this.setLearn();
    }

    ngAfterViewInit() {
        // if (this.pageData.showed) {
        //     for (let i of this.dragNodeList) {
        //         i.style.display = 'none';
        //     }
        //     for (let i of this.dropNodeList) {
        //         i.style.display = 'none';
        //     }
        // }
    }

    setLearn() {
        this.appService.setNextPage(true);
        this.pageData.answerOptions.forEach(v => {
            if (v.showed === false){
                this.appService.setNextPage(false);
            }
        });
    }
}
