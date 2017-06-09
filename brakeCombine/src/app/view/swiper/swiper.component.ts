import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';
import { MultipleService } from '../multiple/multiple.service';

declare const Swiper;

@Component({
    selector: 'sk-swiper',
    providers: [
    ],
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {


    constructor(
        public appService: AppService,
        public multipleService: MultipleService,

    ) {

    }

    // 生命周期钩子函数
    ngOnInit() {

        // console.log(this.multipleService.currImg);
        // console.log(Swiper);
        // console.log(document.querySelector('.swiper-container'));
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop : true,
            simulateTouch: false,
            autoplay: 2000, // 可选选项，自动滑动
            // 如果需要分页器
            pagination : '.swiper-pagination',
            paginationClickable: true,

            preloadImages: true,
            updateOnImagesReady: true,
        });
    }


}

