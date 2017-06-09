
import { AppService } from '../../index/app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const $;



@Component({
    selector: 'lee-ic-hc-mis-bsc',
    providers: [
    ],
    templateUrl: './fjz-img-content.component.html',
    styleUrls: ['./fjz-img-content.component.scss'],
})

// Hc头内容 Mis中间多图 Bsc下内容带阴影框
export class LeeICHcMisBscComponent implements OnInit {
    @Input() pageData : any;
    @Input() cd : any;
    @Output('open') openEvent = new EventEmitter<void>();
    @Output('close') closeEvent = new EventEmitter<void>();

    constructor(
        public appService: AppService,
    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {

        // console.log(this.cd)
    }
    closemodel(){
       this.closeEvent.emit();
    }

}

