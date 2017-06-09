import { Component } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { DataResolverService } from '../../index/app.resolver';
import { AppService } from '../../index/app.service';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'sk-instruction',
  providers: [
  ],
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent  {

  isDetail: boolean;
  modal: boolean;
  currentData;
  data;
  constructor(
    private dataResolverService: DataResolverService,
    private router: Router,
    public appService: AppService,
    private http: Http,
  ) {
  }

  showDetail(page: number) {
    if (page === 0) {
      this.isDetail = false;
      this.dataResolverService.resetChooseArray[this.dataResolverService.appConfig.pageArray[0].id] = true;
      return;
    }
    this.isDetail = true;
    this.initDate(page);
  }


  // 打开弹窗
  showModal() {
    this.modal = true;
  }

  // 关闭弹窗
  reStudy() {
    this.modal = false;
  }
  go2router(a) {
    this.router.navigate([a]);
  }

  async getDate() {
    return this.http.get('http://localhost:3000/321')
    .toPromise()
      .then((res: Response) => {
        return res.json();
      });
    }
  async resolveDate(index) {
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
    this.currentData = this.dataResolverService.componentArray;
  }
  ngOnDestroy() {
    this.dataResolverService.schedule();
  }
}
