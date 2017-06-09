import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'magotan-scene',
    providers: [
    ],
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
    // 场景首页
  isShow: boolean = true;
  isDetail: boolean = false;
    // 场景放大图
    bigScenePicStyle: {} = {};
    componentArray;
    constructor(
        public appService: AppService,
        private zone: NgZone,
    ) {
    }

    // 生命周期钩子函数
    ngOnInit() { }

    // 重置按钮
    reset() {
      this.isShow = true;
      this.isDetail = false;
        this.bigScenePicStyle = {};
    }

    // 场景图片切换
    switchScene(id) {
      this.isShow = false;
      this.isDetail = true;
        if (id === '1') {
            this.bigScenePicStyle = {
                'background-position': 'center center',
                'background-image': 'url("./assets/images/scene/sene2.png")',
            };
        } else if (id === '2') {
            this.bigScenePicStyle = {
                'background-position': 'center center',
                'background-image': 'url("./assets/images/scene/sene3.png")',
            };
        } else if (id === '3') {
            this.bigScenePicStyle = {
                'background-position': 'center center',
                'background-image': 'url("./assets/images/scene/sene1.png")',
            };
        } else {
            this.isShow = true;
        }
    }


}
