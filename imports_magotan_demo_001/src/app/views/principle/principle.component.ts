import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import { DataResolverService } from '../../index/app.resolver';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'principle-page',
  templateUrl: './principle.component.html',
  styleUrls: ['./principle.component.scss', './mixin.scss'],
})
export class PrincipleComponent implements OnInit, OnDestroy {
  componentArray;
  imageComponentArray = [];
  buttonComponentArray = [];
  arrowComponentArray = [];
  prompComponentArray = [];
  principleAnimatePage: boolean = false;
  isDetail: boolean = false;
  constructor(
    public appService: AppService,
    private zone: NgZone,
    private http: Http,
    private dataResolverService: DataResolverService,
  ) {
  }
  // 生命周期钩子函数
  ngOnInit() {
    this.initDate(1);
  }
  async getDate() {
    return this.http.get('http://localhost:3000/123')
    .toPromise()
      .then((res: Response) => {
        return res.json();
      });
    }
  async resolveDate(index) {
    // let dataObj = {};
    // await this.getDate().then(data => dataObj = data);
    // this.appService.getAppConfigmock(dataObj).then(data => {
    //   this.appService.init(data);
    // });
    let dataObj = {};
    let currentPageArray = {};
    await this.getDate().then(data => {
      currentPageArray = {
        pageArray: [data.pageArray[index - 1]]
      };
      dataObj = Object.assign({}, { chapterArray: data.chapterArray }, { description: data.description }, currentPageArray);
    });
    this.appService.getAppConfigmock(dataObj).then(data => {
      this.appService.init(data);
    });
  }
  async initDate(index) {
    const appService = this.appService;
    await this.resolveDate(index);
    if (appService.state.current.pageNumber < appService.state.progress) {
      // console.log('此页已经学习过');
    } else {
      appService.state.current.isPass = appService.state.current.isPass_initial;
      this.dataResolverService.initComponentState();
      this.dataResolverService.initComponentPublish();
      this.dataResolverService.checkPass();
    }
    this.componentArray = this.dataResolverService.componentArray;
    // this.componentArray = this.appService.state.current.componentArray;
    this.componentArray.forEach((v, x) => {
      if (v.type === 'image') {
        this.imageComponentArray.push(v);
      } else if (v.type === 'button') {
        this.buttonComponentArray.push(v);
      } else if (v.type === 'arrow') {
        this.arrowComponentArray.push(v);
      } else if (v.type === 'promp') {
        this.prompComponentArray.push(v);
      }
    });
  }
  ngOnDestroy() {
    this.dataResolverService.schedule();
  }
  turnTPrinciplePage() {
    this.principleAnimatePage = true;
    this.isDetail = true;
  }
  showDetail(page: number) {
    if (page === 1) {
      this.isDetail = false;
      this.principleAnimatePage = false;
      this.dataResolverService.resetChooseArray[this.dataResolverService.appConfig.pageArray[0].id] = true;
      this.dataResolverService.clearTimer();
      this.dataResolverService.initComponentState();
      this.dataResolverService.initComponentPublish();
      this.dataResolverService.checkPass();
    }
  }
}
