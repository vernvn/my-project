import { Component, OnInit, NgZone, AfterViewChecked, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { QuestionService } from './question.service';
declare const $: any;

@Component({
    selector: 'select-question',
    providers: [],
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit, AfterViewChecked, OnDestroy {
    option: any;
    rightKey: any;
    theme: string;
    idx: number = 0;
    answerNumber: number = 0;
    isSelected: boolean = true;
    isRight: boolean = true;
    isCheck: boolean = false;
    isNext: boolean = true;
    defaultBtn: boolean = true;
    dapart: any = {
        a1: false,
        a2: false,
        a3: false,
        a4: false
    };
    isDrag: boolean = true;
    constructor(
        public questionService: QuestionService, public appService: AppService
    ) {
    }

    onSelect(option): void {
        this.isSelected = false;
        this.isNext = false;
        option.isRight = option.isRight ? false : true;
    }
    nextQuestion(): void {
        if (this.answerNumber >= 0) {
            this.idx = this.idx < this.questionService.question.length ? this.idx + 1 : 9;
            this.answerNumber = 0;
            this.isSelected = true;
            this.isRight = false;
            this.defaultBtn = true;
            this.isCheck = false;
            this.isNext = true;
        }
        this.theme = this.questionService.question[this.idx].description;
        this.option = this.questionService.question[this.idx].question[0].option;
    }

    onRightKey(): void {
        this.rightKey = this.questionService.question[this.idx].question[0].answer.split(',');
        if (this.idx < 9) {
            for (let v of this.option) {
                v.isRight = false;
            }
            for (let val of this.rightKey) {
                for (let v of this.option) {
                    if (val === v.id) {
                        v.isRight = true;
                    }
                }
            }
        };
    };

    onDragTheme(val): void {
        for (let id in this.dapart) {
            if (this.dapart.hasOwnProperty(id)) {
                this.dapart[id] = val;
                $('#' + id).hide();
            }
        }
        for (let v of this.option) {
            v.isRight = true;
        }
        this.isNext = false;
    }

    onCheckAnswer(): void {
        let selectAnswer = [];
        this.isCheck = true;
        this.defaultBtn = false;
        for (let v of this.option) {
            if (v.isRight) {
                selectAnswer.push(v.id);
            }
        }

        if (this.questionService.question[this.idx].question[0].answer === selectAnswer.join(',')) {
            this.questionService.question[this.idx].question[0].isRight = true;
            this.answerNumber++;
            this.isRight = true;
        } else {
            this.isSelected = true;
            this.isRight = false;
            this.answerNumber++;
            setTimeout(() => {
                this.isCheck = false;
                this.defaultBtn = true;
            }, 3000);
        }

    }

    dropDpart(id): void {
        $('#' + id + '_install').droppable({
            zIndex: 100,
            accept: '#' + id,
            tolerance: 'touch',
            over: function (event, ui) {

            },
            out: function (event, ui) {

            },
            drop: (event, ui) => {
                this.dapart[id] = true;
                for (let v of this.option) {
                    if (v.id === id) {
                        v.isRight = true;
                    }
                }
                $('#' + id).hide();
            }
        });
    }

    dragDpart(id): void {
        $('#' + id).draggable({
            zIndex: 200,
            revert: true,
            start: (event, ui) => {// ui.helper: 正在拖动的元素的JQuery包装对象, ui.helper.context可以获取到原生的DOM元素.
                this.dropDpart(id);
            },
            drag: function (event, ui) {
            },
            stop: function (event, ui) {

            }
        });
    };

    resetAnswer(): void {
        this.idx = 0;
        this.answerNumber = 0;
        this.rightKey = this.questionService.question[this.idx].question[0].answer.split(',');
        this.theme = this.questionService.question[this.idx].description;
        this.option = this.questionService.question[this.idx].question[0].option;
        this.isRight = false;
        this.defaultBtn = true;
        this.isCheck = false;
        this.onDragTheme(false);
        this.isNext = true;
        for (let obj of this.questionService.question) {
            for (let v2 of obj.question[0].option) {
                v2.isRight = false;
            }
        }
    };
    getDynamic(): void {
        this.idx = this.questionService.idx;
        this.theme = this.questionService.question[this.idx].description;
        this.option = this.questionService.question[this.idx].question[0].option;
        this.dapart = this.questionService.depart;

    }

    dataStorage(): void {
        this.appService.suspendData.questionCache = { idx: 0, dapart: {} };
        this.appService.suspendData.questionCache.idx = this.idx;
        this.appService.suspendData.questionCache.dapart = this.dapart;
        // console.log(this.appService.suspendData.testedCache);
    }

    // 生命周期钩子函数
    // 生命周期钩子函数
    ngOnInit() {
        this.getDynamic();
        this.questionService.idx = this.appService.suspendData.questionCache.idex;
        this.questionService.depart = this.appService.suspendData.questionCache.depart;
        console.log(this.appService.suspendData.questionCache);
    }
    ngOnDestroy() {
        this.questionService.idx = this.idx;
        this.questionService.isNext = this.isNext;
        // this.questionService.question[this.idx].question[0].option = this.option;
        this.questionService.depart = this.dapart;
        this.dataStorage();
    }
    ngAfterViewChecked() {
        let arr = ['a1', 'a2', 'a3', 'a4'];
        let leng = arr.length - 1;
        for (let v of arr) {
            this.dragDpart(v);
        };
    };
};
