import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';
declare var $: any;

/*
 * App Component
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'sg-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    showOrHide = false;
    showpage = '';
    constructor(
        public appService: AppService,
    ) {

    }
    /**
     * 改变路由方法
     *
     * @param {string} index
     *
     * @memberOf AppComponent
     */

    ngOnInit(): void {

        this.appService.getAppConfigmock().then(data => {
            // console.log(data);
            this.appService.init(data);
            this.showOrHide = true;
        });

        // this.getAppConfig().then((data) => {
        //     console.log(data);
        // });

    }
}

