import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable , Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class DataResolverService {
  currentData: any;   // 当前对象包含通过当前页与页码
  componentArray: any;  //  当前页面所有组件
  publishArray: any;  // 待发布事件集合
  appConfig: any;  // 被解析对象
  suspendData: any =  {}; // 进度存储
  timer  = []; // 定时器管理
  recovery: boolean;  // 恢复进度标识
  resetChooseArray = {};  // 重新选择管理
  constructor(
  ) {
    this.recovery = false;
  }
  // 解析description
  public parserDescription(appConfig: any) {
    const description = appConfig.description;
    return {
        name: description.name,  // 课件名称
        courseNumber: description.courseNumber, // 课件编号
        metadata: description.metadata, // 标准，scrom ， xcj
        type: description.type || 'WBT', // 课件类型，WBT ,SBT, RM
        version: description.version || '1.0', // 版本
        client: description.client || 'PC', // 终端
        sumScore: description.sumScore || 0,  // 分数
        passCondition: description.passCondition || '', // 通过条件
        completeCondition: description.completeCondition || '', // 完成条件
        producer: description.producer || 'xcjer',  // 制作人
        data: description.data || new Date() // 制作日期
        // types: description.types || 'wbtCourseWare', // wbtCourseWare，rmCourseWare，sbtCourseWare
        // purpose: description.purpose,
        // require: description.require,
        // keyword: description.keyword,
        // language: description.language,
        // entry: description.entry, // 入口
    };
  }
  // 解析pageArray
  public parserPageArray(appConfig: any) {
    if (Array.isArray(appConfig.pageArray) && appConfig.pageArray) {
        this.appConfig = appConfig;
        Object.defineProperty(this.suspendData, appConfig.pageArray[0].id , {
          value: this.suspendData[appConfig.pageArray[0].id] || {}
        });
        Object.defineProperty(this.resetChooseArray, appConfig.pageArray[0].id , {
          value: this.resetChooseArray[appConfig.pageArray[0].id] || false,
          writable : true
        });
        const pageArray = appConfig.pageArray.sort(this.compare('order'));
        const newPageArray = pageArray.map((v, i) => {
          appConfig.chapterArray.forEach((element, key, arr) => {
                  if (element.id === v.chapterID) {
                      if (element.pages === undefined)
                          element.pages = [];
                      element.pages.push(v);
                  }
              });
              this.componentArray = v.componentArray;
              this.publishArray = v.publishArray;
              const pageObject = {};
              Object.defineProperty(pageObject, 'isPass_initial', { value: !!v.isPass });
              Object.assign(pageObject,
                  {
                      id: v.id,
                      order: parseInt(v.order, 10),
                      chapterID: v.chapterID,
                      isPass: !!v.isPass,
                      pageNumber: ++i,
                      componentArray: v.componentArray,
                      publishArray: v.publishArray,
                      backgroundImageSrc: v.backgroundImageSrc,
                      animation: v.animation,
                  },
              );
              return pageObject;
        });
          return newPageArray;
      } else {
          return [];
      }
  }
  // 解析chapterArray
  public parserChapterArray(appConfig: any) {
      let count: number = 1;
      if (Array.isArray(appConfig.chapterArray) && appConfig.chapterArray) {
          const chapterArray = appConfig.chapterArray.sort(this.compare('order'));
          const newChapterArray = chapterArray.map((v, i, ) => {
              const startPage = count;
              const endPage = count = count + v.pages.length;
              if (Array.isArray(v.childChapterArray) && v.childChapterArray.length > 0) {
                  console.error('数据包含子章节,暂时不对此结构解析');
              } else {
                  return {
                      id: v.id,
                      order: parseInt(v.order, 10),
                      name: v.name,
                      description: v.description,
                      startPage: startPage,
                      endPage: endPage - 1,
                      pages: v.pages,
                  };
              }
          });
          return newChapterArray;
      } else {
          return [];
      }
  }

  // 初始化页面组件
  public initComponentState() {
        this.componentArray.forEach((element, i, arr) => {
        Object.defineProperty(this.componentArray, element.id, { value: element });
    });
    this.getsuspendData();
    Object.defineProperties(this.componentArray, {
      'isPassArr': { value: [] },
    });
    this.componentArray.forEach((element, i, arr) => {
      let isPass: boolean;
      if (element.passCondition && element.passCondition.state) {
        isPass = false;
      } else {
        isPass = true;
        arr.isPassArr.push(element);
      }
      Object.assign(element, {
        isPass,
        publish: {},
      });
      Object.defineProperties(element, {
        'id': {
          value: element.id,
        },
        'type': {
          value: element.type,
        }
      });
      // 解析组件状态数组
      if (Array.isArray(element.stateArray)) {
        element.stateArray.forEach((v, j, arr2) => {

          Object.defineProperty(arr2, v.id, { value: v });
          if (Array.isArray(arr2.textArray))
            arr2.textArray.sort(this.compare('order'));
        });
        // 设置组件初始化状态id
        if (this.resetChooseArray[this.appConfig.pageArray[0].id]) {
          this.setCurrentStateID(element, element.initialStateID);
        } else
        {
          this.setCurrentStateID(element, element.currentStateID || element.initialStateID);
        }
      }
      Object.defineProperty(this.componentArray, element.id, { value: element });
    });
  }

  // 初始化组件事件状态
  public initComponentPublish() {
    const publishArray = this.publishArray;
    Object.defineProperty(publishArray, 'sortArr', { value: [] });
    Object.assign(publishArray, {
      'progress': publishArray.progress || 0,
    });
    publishArray.forEach((element, i, arr) => {
      if (!element.component || !element.component.id) {
        return;
      }
      if (!this.componentArray[element.component.id]) {
        console.error('找不到id为 ' + element.component.id + ' 的组件');
        return;
      }
      if (element.component) {
        const publish = this.componentArray[element.component.id].publish;
        if (!Array.isArray(publish[element.triggerEvent]))
          publish[element.triggerEvent] = [];
          publish[element.triggerEvent].push(element);
      }
      if (element.order) {
        arr.sortArr.push(element);
      }
    });
    // 对事件排序
    publishArray.sortArr.sort(this.compare('order'));
    let number1 = 1;
    let number2;
    publishArray.sortArr.forEach((v, i, arr) => {
      if (v.order === number2) {
        v.order = number1;
      } else if (v.order > number2) {
        number2 = v.order;
        v.order = ++number1;
      } else if (i === 0) {
        number2 = v.order;
        v.order = number1;
      }
    });
  }
  // 处理事件
  eventHandler(e, component) {
    let flag: boolean; // 标识是否处理事件
    if (!component.publish) return;
    let suspend = true;
    component.publish[e.type].forEach(publishObject => {
      if (publishObject.component.isPass === 1 && component.isPass === false) {
        console.log('未学习状态不发布此事件');
        return;
      } else if (publishObject.component.isPass === 0 && component.isPass) {
        console.log('学习过状态不发布此事件');
        return;
      }
      if (publishObject.component.stateID &&
        !(component.currentStateID === publishObject.component.stateID)) {
        console.log('stateID不同,,此时不能点击');
        return;
      }
      // 此页通过为false
      // ----------控制点击顺序------------
      const publishArray = this.publishArray;
      if (publishObject.order > (publishArray.progress + 1)) {
        console.log('需要按顺序点击');
        return;
      } else if (publishObject.order === (publishArray.progress + 1)) {
        publishArray.progress = publishObject.order;
      }
      // 保存进度
      if (suspend) {
        this.setsuspendData(e.type, component.id);
      }
      suspend = false;
      publishObject.subscribeArray.forEach(ele => {
        this.responseEvent(ele);
      });
      flag = true;
    });
    if (flag) {
      // --------控制操作通过条件----------
      if (component.passCondition && !component.isPass) {
        console.log('更新并检测通过状态');
        if (component.passCondition.state === 'start') {
          if (component.passCondition.event === e.type) {
            component.isPass = true;
            this.componentArray.isPassArr.push(component);
            // 检测通过操作,能否进入下一页
            this.checkPass();
          }
        }
      }
    }
  }
   // 响应事件
  responseEvent(subscribe) {
      if (!subscribe.setCurrentState) return;
      const timeout = parseInt(subscribe.timeOut, 10);
      this.timer[subscribe.id] =
        setTimeout(() => {
        const componentEle = this.componentArray[subscribe.component.id];
          if (!componentEle) {
            console.error('找不到id为 ' + subscribe.component.id + ' 的组件');
            return;
          }
          if (subscribe.component.isPass === 1 && componentEle.isPass === false) {
            console.log('未学习状态不响应事件');
            return;
          } else if (subscribe.component.isPass === 0 && componentEle.isPass) {
            console.log('学习过状态不响应事件');
            return;
          }
          if (subscribe.component.stateID &&
            !(componentEle.currentStateID === subscribe.component.stateID)) {
            console.log('stateID不同,此时不响应事件');
            return;
          }
          this.setCurrentStateID(componentEle, subscribe.setCurrentState);
        }, timeout);
    }
  // 设置组件状态
  public setCurrentStateID(componentEle, id: string) {
        if (!componentEle.stateArray[id]) {
          console.log('没有此状态id');
          return;
        }
        Object.assign(componentEle, {
          currentStateID: id,
          currentState: componentEle.stateArray[id],
        });
        Object.assign(componentEle, { currentStyle: {} }, );
        Object.assign(componentEle.currentStyle, componentEle.currentState.style.default, );
    }
  // 获取当前页面状态
   getcurrentState(currentData) {
     this.currentData = currentData;
   };

  // 检测组件通过状态
   public checkPass() {
      if (this.componentArray.isPassArr.length === this.componentArray.length) {
          this.currentData.isPass = true;
      }
    }

  clearTimer() {
    for (const i in this.timer) {
      if (this.timer.hasOwnProperty(i)) {
        clearTimeout(this.timer[i]);
      }
    }
  }

  schedule() {
    let state = true;
    for (const i in this.timer) {
      if (this.timer.hasOwnProperty(i)) {
        if (this.timer[i].state === 'scheduled') {
          state = false;
        }
        clearTimeout(this.timer[i]);
      }
    }
    if (state) {
      this.setsuspendData(null, null);
    }
  }

  // 保存进度
  setsuspendData(type, id) {
    const principle = this.suspendData[this.appConfig.pageArray[0].id];
    principle.componentArray = {};
    this.componentArray.forEach(element => {
      principle.componentArray[element.id] = {
        currentStateID: element.currentStateID,
        isPass: element.isPass,
      };
    });
    principle.publishArray = {
      progress: this.publishArray.progress,
    };
    principle.event = {
      type: type,
      componentID: id,
    };
  }

  // 恢复进度
  getsuspendData() {
    console.log(this.recovery + '恢复进度');
    if (this.recovery) {
      // return;
    }
    // 恢复进度标识
    this.recovery = true;
    const principle = this.suspendData[this.appConfig.pageArray[0].id];
    if (!principle.publishArray) {
      return;
    }
    // 恢复状态
    for (let key in principle.componentArray) {
      if (principle.componentArray.hasOwnProperty(key)) {
        Object.assign(this.componentArray[key], principle.componentArray[key]);
      }
    }
    // 恢复事件进度
    this.publishArray.progress = principle.publishArray.progress;
  }
  // 根据属性的值对数组排序
  private compare(property: string) {
      return (a, b) => {
          const value1 = a[property];
          const value2 = b[property];
          return value1 - value2;
      };
  }
}
