import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { appConfig } from '../../app-config';
declare const $;

@Injectable()
export class AppService {
    chapters: any[]; // 章节数组
    pages: any[];    // 页面数组
    state: {               // 当前状态
        current: any,      // 当前状态页面对象
        progress: number,  // 当前学习进度
    };
    nextPage: boolean;  // 允许进入下一页
    preStatus:boolean; //  上一页箭头置灰
    // switch2ImgIndex:number = 0; //指定模板保留索引
    private appConfigUrl = './assets/appConfig.json';  // URL to get appConfig

    constructor(
        private http: Http,
    ) {
        this.state = {
            current: {},
            progress: 0,
        };
        this.nextPage = true;
        this.preStatus = true;
    }

    // 初始化当前项目
    init(appConfig: any): void {
        // console.log('initConfig');
        this.initConfig(appConfig);
        this.initState();
    }

    // 初始化当前项目的配置内容
    initConfig(appConfig: any): void {
        const chapters: any[] = [];
        const pages: any[] = [];
        let imp: number = 1;
        for (let i of appConfig) {
            if (i.isChapter) {
                chapters.push({
                    title: i.chapter,
                    logo: i.logo,
                    startPage: imp,
                    endPage: imp + i.pages.length - 1,
                    // studyed: false,
                });

                for (let value of i.pages) {
                    if (value.logo || value.chapter)
                        console.error('Unexpected property of type for config');
                    Object.assign(value, {
                        logo: i.logo,
                        chapter: i.chapter,
                    });
                }
            }
            // 初始化页面数组
            for (let value of i.pages) {
                if (value.page)
                    console.error('Unexpected property of type for config');
                Object.assign(value, {
                    page: imp++,
                });
                pages.push(value);
            }
        }
        // console.log('页面数组', pages);
        // console.log('章节数组', chapters);
        this.chapters = chapters;
        this.pages = pages;
    }

    // 根据当前项目保存的进度初始化状态
    initState(): void {
        let saved = 1;

        // ------------------ 获取平台数据 ------------------
        $.xcj.scorm.api.loadPage();
        if ($.xcj.scorm.api.getComplete() !== 'incomplete' &&
            $.xcj.scorm.api.getComplete() !== 'completed') {
            $.xcj.scorm.api.setComplete('not attempted');
            $.xcj.scorm.api.doCommit();
        }

        const rePage = $.xcj.scorm.api.getSuspendData();
        if (rePage === '' || rePage === undefined || rePage === 'false') {
            // saved = 1;
        } else {
            saved = rePage;
        }
        // console.log('获取平台数据');
        // -------------------------------------------------
        // console.log(saved);
        this.state.progress = saved;

        this.go2page(this.state.progress);
    }

    // 平台通信
    doCommit(): void {
        // ---------------- 平台通信 -------------

        if (this.state.current.page >= this.state.progress) {
            // console.log('开始提交平台数据');

            let progress = Math.floor((this.state.current.page / (this.pages.length - 1)) * 100);
            $.xcj.scorm.api.setProgress(progress);
            // console.log('进度', progress);
            $.xcj.scorm.api.doCommit();
            if (progress === 100) {
                $.xcj.scorm.api.setComplete('completed');
                $.xcj.scorm.api.doCommit();
            }
            // console.log('结束提交平台数据');
        }
        // --------------------------------------
    }

    // 页面导航
    go2page(newPage: number): void {

        if (!this.nextPage && newPage > this.state.current.page) return;

        this.nextPage = true;
        if(newPage<=1){
            this.preStatus = true;
        }else{
            this.preStatus = false;
        }
        if (newPage > 0 && newPage <= this.pages.length) {



            if (this.state.progress < newPage) {

                this.doCommit();

                this.state.progress = newPage;
                // 保存进度
                $.xcj.scorm.api.setSuspendData(this.state.progress);
                // console.log('记录', this.state.progress);
            }


            this.cleanPage();

            setTimeout(() => {
                this.state.current = this.pages[newPage - 1];
                // console.log('当前页面', this.state.current);
            }, 1);

        }
        if( this.state.current.page >= this.pages.length - 1) {
            this.nextPage = false;
        }
    }

    // 刷新页面
    cleanPage(): void {
        this.state.current = {
            page: this.state.current.page,
        };
    }

    // 设置是否允许进入下一页
    setNextPage(bool: boolean): void {
        this.nextPage = bool;
    }


    // 模拟 异步 获取项目配置
    getAppConfigmock(): Promise<any[]> {
        return Promise.resolve(appConfig);
    }
    // 获取项目配置
    getAppConfig(): Promise<any[]> {
        return this.http.get(this.appConfigUrl)
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }
    // 处理错误
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
