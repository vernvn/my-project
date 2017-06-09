import {Component, OnInit, AfterViewInit, NgZone} from '@angular/core';
import {AppService} from '../../index/app.service';

declare const $;

@Component({selector: 'sort-pro', templateUrl: './sort.component.html', styleUrls: ['./sort.component.scss']})

export class SortComponent implements OnInit,
AfterViewInit {
    pageData : any;
    data : any;
    constructor(public appService: AppService, private zone: NgZone) {
        this.pageData = appService.state.current.content;
    }

    // 生命周期钩子函数
    ngOnInit() {

        if (this.appService.state.current.page < this.appService.state.progress) {
            this.pageData.showed = true;
        }
        if (this.pageData.showed) {
            this.trueSort();
            this
                .appService
                .setNextPage(true);
        } else {
            this
                .appService
                .setNextPage(false);
        }

    }

    ngAfterViewInit() {
        let _this = this;
        $('#sortable').sortable({
            revert: true,
            opacity: 0.6,
            stop() {
                _this.NextLight();
            }
        });
        $('#sortable').disableSelection();

    }
    NextLight() {
        let answer = '';
        let _this = this;
        // console.log(1);
        $('ul#sortable  li').each(function (item, i) {
            if ($(i).attr('id')) {
                answer += $(i).attr('id') + '，';
            }
            // console.log(answer);
            if (answer === _this.pageData.trueAnswer) {
                _this.pageData.showed = true;
                 _this.zone.run(() => {
                    _this.appService.setNextPage(true);
                });
            }
        });
    }

    trueSort() {
        let arr = this
            .pageData
            .trueAnswer
            .split('，');
        let optionArr = [];
        let _this = this;
        $.each(arr, function (index, item) {
            $
                .each(_this.pageData.options, function (i, option) {
                    if (option.answer === item) {
                        optionArr.push(option);
                    }
                });
        });
        this.pageData.options = optionArr;
    }
}
