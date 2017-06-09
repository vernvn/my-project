import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { appConfig as confMock } from './diagnostic_config.mock';

import { DataResolverService } from '../../index/app.resolver';
// declare const $;

export type InternalStateType = {
  [key: string]: any
};


@Injectable()
export class PljDiagnosticService {
  description: any;
  chapters: any[]; // 章节数组
  pages: any[];    // 页面数组
  state: {               // 当前状态
    current: any,      // 当前状态页面对象
    progress: number,  // 当前学习进度
    // publishProgress: number,  // 当前页面内的学习进度
    // isPass: boolean,  // 是否通过
  };
  // nextPage: boolean;  // 允许进入下一页

  private appConfigUrl = './assets/appConfig.json';  // URL to get appConfig

  constructor(
    private http: Http,
    private dataResolverService: DataResolverService,
  ) {
    this.state = {
      current: {},
      progress: 0,
      // publishProgress: 0,
      // isPass: true,
    };
    // this.nextPage = true;

    // this.init();
  }

  // 初始化当前项目
  init(): void {
    console.log('initConfig');
    // this.initConfig(appConfig);
    // this.initState();
    // console.log(this);
    // console.log(confMock);
    // const data = new DataResolver(confMock);
    // this.pages = data.pageArray;
    // this.description = data.description;
    // this.chapters = data.chapterArray.filter((v, i) => {
    //   if (v.name) {
    //     return true;
    //   }
    // });
    this.description = this.dataResolverService.parserDescription(confMock);
    this.pages = this.dataResolverService.parserPageArray(confMock);
    this.chapters = this.dataResolverService.parserChapterArray(confMock).filter((v, i) => {
      if (v.name) {
        return true;
      }
    });
    this.initState();
  }


  // 页面导航
  go2page(newPage: number): void {
    // if (!this.nextPage && newPage > this.state.current.pageNumber) return;
    if (!newPage || !this.state.current.isPass
      && newPage > this.state.current.pageNumber) return;

    // this.nextPage = true;
    // this.state.current.isPass = true;

    if (newPage > 0 && newPage <= this.pages.length) {

      if (this.state.progress < newPage) {

        // this.doCommit();

        this.state.progress = newPage;
        // 保存进度
        // $.xcj.scorm.api.setSuspendData(this.state.progress);
        // console.log('记录', this.state.progress);
      }

      // console.log('lengtg:' + this.pages.length, 'progress:' + this.state.progress);
      this.cleanPage();
      // console.log('当前页面', this.state.current);
      // setTimeout(() => {
      this.state.current = this.pages[newPage - 1];
      console.log('当前页面', this.state.current);
      // }, 1);
    }
  }


  // 模拟 异步 获取项目配置
  // getAppConfigmock(): Promise<any[]> {
  //     return Promise.resolve(appConfig);
  // }
  // 获取项目配置
  getAppConfig(): Promise<any[]> {
    return this.http.get(this.appConfigUrl)
      .toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }


  // 根据当前项目保存的进度初始化状态
  private initState(): void {
    // let saved = 1;

    // ------------------ 获取平台数据 ------------------
    // $.xcj.scorm.api.loadPage();
    // if ($.xcj.scorm.api.getComplete() !== 'incomplete' &&
    //     $.xcj.scorm.api.getComplete() !== 'completed') {
    //     $.xcj.scorm.api.setComplete('not attempted');
    //     $.xcj.scorm.api.doCommit();
    // }

    // const rePage = $.xcj.scorm.api.getSuspendData();
    // if (rePage === '' || rePage === undefined || rePage === 'false') {
    //     // saved = 4;
    // } else {
    //     saved = rePage;
    // }
    // // console.log('获取平台数据');
    // -------------------------------------------------
    // console.log(saved);
    // this.state.progress = saved;

    this.go2page(this.state.progress || 1);
  }

  // 平台通信
  // private doCommit(): void {
  //     // ---------------- 平台通信 -------------

  //     if (this.state.current.pageNumber >= this.state.progress) {
  //         // console.log('开始提交平台数据');

  //         let progress = Math.floor((this.state.current.pageNumber / (this.pages.length - 1))
  //             * 100);
  //         $.xcj.scorm.api.setProgress(progress);
  //         // console.log('进度', progress);
  //         $.xcj.scorm.api.doCommit();
  //         if (progress === 100) {
  //             $.xcj.scorm.api.setComplete('completed');
  //             $.xcj.scorm.api.doCommit();
  //         }
  //         // console.log('结束提交平台数据');
  //     }
  //     // --------------------------------------
  // }
  // 处理错误
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // 刷新页面
  private cleanPage(): void {
    this.state.current = {
      pageNumber: this.state.current.pageNumber,
    };
  }
}

