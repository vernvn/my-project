import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-video',
    providers: [
    ],
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    showBtn;
    videoDom;
    constructor(
        public appService: AppService,
    ) {
        this.showBtn = true;
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.videoDom = document.querySelector('video');
        this.videoDom.onpause = () => {
            this.showBtn = true;
        };
        this.videoDom.onplay = () => {
            this.appService.state.current.showed = true;
            this.appService.setNextPage(true);
            this.showBtn = false;
        };
        const appService = this.appService;

        // 初始化页面中每个触发点的状态
        if (appService.state.current.page >= appService.state.progress) {
            this.appService.state.current.showed = false;
        } else if (appService.state.current.page < appService.state.progress) {
            this.appService.state.current.showed = true;
        }
        if (!this.appService.state.current.showed) {
            this.appService.setNextPage(false);
        }
    }
    playVideo($event) {
        // console.log(event.toElement.parentNode.querySelector('video'));
        // 获取视频元素
        // const videoDom = $event.toElement.parentNode.querySelector('video');

        this.videoDom.play();

        this.appService.state.current.showed = true;
        this.appService.setNextPage(true);
        this.showBtn = false;

        // console.log(this.appService.state.current.showed);
    }

}

