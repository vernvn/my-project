import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { AppService } from '../../index/app.service';

declare const $;
declare const document;

@Component({
    selector: 'draggable-drop',
    providers: [
    ],
    templateUrl: './draggable.component.html',
    styleUrls: ['./draggable.component.scss'],
})

export class DragComponent implements OnInit, AfterViewInit{
    dom: any;
    dropFlag: boolean;
    initDragStatus:boolean = false;
    rCount: number;
    left: any;
    top: any;
    @Input() dataAnswer: any;
    @Input() data: any;
    @Input() dragStyleCommon: any;
    @Output() dropEvent = new EventEmitter<void>();
    constructor(public appService: AppService) {
     }

    ngOnInit() {
        this.rCount = 0;
        // console.log(this.dataAnswer);
        // console.log(this.data)
        // console.log(this.dragStyleCommon);
        const appService = this.appService;
        if (appService.state.current.page >= appService.state.progress) {
            this.data.answerOptions.forEach(v => {
                v.showed = false;
            });
            this.initDragStatus = false;
        } else if (appService.state.current.page < appService.state.progress) {
            this.data.answerOptions.forEach(v => {
                v.showed = true;
            });
            this.initDragStatus = true;
            $('.drag-option').css({'cursor':'default','opacity':0});
        }
    }

    dragStyle() {
        if (this.dragStyleCommon) {
            this.dragStyleCommon.left = this.dataAnswer.dragStyle.left;
            this.dragStyleCommon.top = this.dataAnswer.dragStyle.top;
            if (this.dataAnswer.dragStyle.height) {
                this.dragStyleCommon.height = this.dataAnswer.dragStyle.height;
            } else {
                this.dragStyleCommon.height = '24px'; // 默认的最小高度
            }
            return this.dragStyleCommon;
        }
    }

    dropStyle() {
        if (this.dataAnswer.dropStyle && !this.initDragStatus) {
            // console.log(this.dataAnswer.dropStyle);
            this.dataAnswer.dropStyle.height = this.dragStyleCommon.height
            || this.dataAnswer.dragStyle.height;
            this.dataAnswer.dropStyle.width = this.dragStyleCommon.width;
            this.dataAnswer.dropStyle.lineHeight = this.dataAnswer.dropStyle.height;
            return this.dataAnswer.dropStyle;
        }
    }

    ngAfterViewInit() {
        let that = this;
        if(this.initDragStatus){
            return;
        }
        $('.drop-option').droppable({
            accept: '.drag-option',
            tolerance: 'pointer',
            greedy: true,
            drop: function (event, ui) {
                // console.log($(event.target).attr('answer'),ui.draggable.attr('answer'))
                let a = $(event.target).attr('answer');
                let b = ui.draggable.attr('answer');
                if (b.indexOf(a)>-1) {
                    $(event.target).hide();
                    ui.draggable.hide();
                    that.dropEvent.emit(event.target);
                } else {
                    ui.draggable.animate({ left: that.left, top: that.top }, 500);
                }
            }
        });

        $('.drag-option').draggable({
            containment: '.drag-and-drop-body',
            scroll: false,
            iframeFix: true,
            cursor: 'move',
            revert: 'invalid',
            start(event, ui) {
                that.left = $(this).css('left');
                that.top = $(this).css('top');
                $(this).css('z-index', 3);
            }
        });
    }
}
