import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { TestedService } from './tested.service';
declare const $: any;


@Component({
    selector: 'magotan-tested',
    providers: [],
    templateUrl: './tested.component.html',
    styleUrls: ['./tested.component.scss']
})
export class TestedComponent implements OnInit, OnDestroy {
    idx: number = this.testedService.idx;
    theme: string;
    isResult: boolean = false;
    isPass: boolean = false;
    score: number = 0;
    isTest: boolean = false;
    question: any;
    option: any;
    getDynamic(): void {
        this.idx = this.testedService.idx;
        this.theme = this.testedService.tested[this.idx].description;
        this.option = this.testedService.tested[this.testedService.idx].option;
        this.question = this.testedService.tested;
        this.isResult = this.testedService.isResult;
        this.isTest = this.testedService.isTest;
    }

    constructor(
        public testedService: TestedService, public appService: AppService
    ) {
    }

    onSelect(option): void {
        for (let v of this.option) {
            if (v.id === option.id) {
                option.isRight = option.isRight ? false : true;
            } else {
                v.isRight = false;
            }
        }
    };
    onPrevPage(): void {
        if (this.isResult) {
            return;
        }
        this.idx = this.idx === 0 ? 0 : this.idx - 1;
        this.testedService.idx = this.idx;
        this.getDynamic();
        this.isResult = false;
    };
    onNextPage(): void {
        this.isTest = false;
        this.idx = this.idx === this.testedService.tested.length - 1 ? this.testedService.tested.length - 1 : this.idx + 1;
        this.testedService.idx = this.idx;
        this.getDynamic();
    };

    onSubmit(): void {
        this.score = 0;
        this.isResult = true;
        this.isTest = true;
        for (let v1 of this.testedService.tested) {
            for (let v2 of v1.option) {
                if (v2.isRight && (v2.id === v1.answer)) {
                    v1.isRight = true;
                }
            }
            if (v1.isRight) {
                this.score += v1.rate;
            }
            $.xcj.scorm.api.setScore(this.score);
            this.isPass = this.score >= 80 ? true : false;
        }
    }
    resetTest(): void {
        this.isResult = false;
        for (let v1 of this.testedService.tested) {
            for (let v2 of v1.option) {
                v2.isRight = false;
            }
            v1.isRight = false;
        }
        this.score = 0;
        this.idx = 0;
        this.testedService.idx = this.idx;
        this.testedService.isResult = this.isResult;
        this.getDynamic();
    }

    dataStorage(): void {
        this.appService.suspendData.testedCache = { idx: 0, isResult: false, answer: [] };
        this.appService.suspendData.testedCache.idx = this.idx;
        this.appService.suspendData.testedCache.isResult = this.isResult;
        for (let v of this.testedService.tested) {
            for (let m of v.option) {
                if (m.isRight) {
                    this.appService.suspendData.testedCache.answer[parseInt(v.id, 10) - 1] = m.id;
                }
            }
        }
        // console.log(this.appService.suspendData.testedCache);
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.getDynamic();
        if (this.appService.suspendData.testedCache.answer) {
            this.appService.suspendData.testedCache.answer.forEach((item, index, array) => {
                for (let v of this.testedService.tested[index].option) {
                    if (v.id === item) {
                        v.isRight = true;
                    }
                }
            });
            for (let v1 of this.testedService.tested) {
                for (let v2 of v1.option) {
                    if (v2.isRight && (v2.id === v1.answer)) {
                        v1.isRight = true;
                    }
                }
            }
        }
    }
    ngOnDestroy() {
        this.dataStorage();
        this.testedService.idx = this.idx;
        // this.testedService.tested[this.testedService.idx].option = this.option;
        this.testedService.isResult = this.isResult;
        this.testedService.isTest = this.isTest;
    }


}
