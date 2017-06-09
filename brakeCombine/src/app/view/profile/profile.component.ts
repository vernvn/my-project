import { Component, OnInit } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-profile',
    providers: [
    ],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    isPopver;
    popverInfo;
    popverTitle;
    constructor(
        public appService: AppService,
    ) {
        this.isPopver = false;
    }

    // 生命周期钩子函数
    ngOnInit() {


    }

    // 弹出框
    showPopver(type: string) {
        this.isPopver = true;
        if (type === 'use') {
            this.popverTitle = '使用本课程';
            this.popverInfo = '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注';
        }
        if (type === 'exit') {
            this.popverTitle = '退出本课程';
            this.popverInfo = '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面';
        }
    }
    closePopver() {
        this.isPopver = false;
    }
    closeWindow() {
        window.close();
    }

}

