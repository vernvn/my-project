import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
    selector: 'sk-single',
    providers: [
    ],
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    componentArray;
    constructor(
        public appService: AppService,
        private zone: NgZone,
    ) {
        this.componentArray = appService.state.current.componentArray;
    }

    // 生命周期钩子函数
    ngOnInit() {

        const appService = this.appService;

        if (appService.state.current.pageNumber < appService.state.progress) {
            console.log('此页已经学习过');
        } else {
            appService.state.current.isPass = appService.state.current.isPass_initial;

            if (this.componentArray.length > 0 && this.componentArray.isPassArr) {
                console.log('此页已经初始化过');
            }
            // 初始化页面组件
            this.initComponentState();

            // 初始化页面的事件
            this.initComponentPublish();

            // 检测组件通过状态
            this.checkPass();
        }





    }



    // 初始化页面的组件
    initComponentState() {
        // Object.defineProperty(this.componentArray, 'isPassArr', { value: [] });

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
            // if (element.passCondition === '') {
            //     isPass = true;
            // } else if (element.passCondition === 'start') {
            //     isPass = false;
            // } else if (element.passCondition === 'complete') {
            //     isPass = false;
            // }
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
                // 等等.
            });

            // 解析组件状态数组
            if (Array.isArray(element.stateArray)) {
                element.stateArray.forEach((v, j, arr2) => {

                    Object.defineProperty(arr2, v.id, { value: v });
                    if (Array.isArray(arr2.textArray))
                        arr2.textArray.sort(this.compare('order'));
                });

                // 设置组件初始化状态id
                this.setCurrentStateID(element, element.currentStateID || element.initialStateID);

            }
            // this.componentArray[element.id] = element;
            Object.defineProperty(this.componentArray, element.id, { value: element });
        });
        // console.log(this.componentArray);


    }


    // 初始化组件事件状态
    initComponentPublish() {

        const publishArray = this.appService.state.current.publishArray;


        Object.defineProperty(publishArray, 'sortArr', { value: [] });

        Object.assign(publishArray, {
            'progress': 0,
        });

        publishArray.forEach((element, i, arr) => {
            // console.log(element.component.id);
            if (!element.component || !element.component.id) {
                // console.log(element.component.id);
                return;
            }
            // console.log(this.componentArray[element.component.id]);
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
        // console.log(e.type, component.id);
        // console.log(component.publish[e.type]);
        if (!component.publish) return;
        // console.log(component.currentStateID);
        // console.log(component.publish[e.type].component.stateID);

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
            const publishArray = this.appService.state.current.publishArray;
            // console.log('当前事件order', publishObject.order);
            // console.log('事件progress', publishArray.progress);
            if (publishObject.order > (publishArray.progress + 1)) {
                console.log('需要按顺序点击');
                return;
            } else if (publishObject.order === (publishArray.progress + 1)) {
                // console.log('增加点击进度');
                publishArray.progress = publishObject.order;
            }



            publishObject.subscribeArray.forEach(ele => {
                this.responseEvent(ele);
            });
            // console.log('发布是啊劲啊');
            flag = true;
        });

        if (flag) {
            // --------控制操作通过条件----------
            if (component.passCondition && !component.isPass) {
                console.log('更新并检测通过状态');
                if (component.passCondition.state === 'start') {
                    // console.log(component.passCondition);
                    if (component.passCondition.event === e.type) {
                        //     console.log(component.passCondition);
                        component.isPass = true;
                        this.componentArray.isPassArr.push(component);
                        // 检测通过操作,能否进入下一页
                        this.checkPass();
                    }
                }
            }
        }


        /*
                const publishArr = component.publish[e.type];

                if (publishArr.component.stateID &&
                    !(component.currentStateID === publishArr.component.stateID)) {
                    console.log('stateID不同,,此时不能点击');
                    return;
                }
                // 此页通过为false
                // if (!this.appService.state.current.isPass) {
                // ----------控制点击顺序------------
                const publishArray = this.appService.state.current.publishArray;
                // console.log('当前事件order', publishArr.order);
                // console.log('事件progress', publishArray.progress);
                if (publishArr.order > (publishArray.progress + 1)) {
                    console.log('需要按顺序点击');
                    return;
                } else if (publishArr.order === (publishArray.progress + 1)) {
                    // console.log('增加点击进度');
                    publishArray.progress = publishArr.order;
                }

                // --------控制操作通过条件----------
                if (component.passCondition && !component.isPass) {
                    console.log('更新并检测通过状态');
                    if (component.passCondition.state === 'start') {
                        // console.log(component.passCondition);
                        if (component.passCondition.event === e.type) {
                            //     console.log(component.passCondition);
                            component.isPass = true;
                            this.componentArray.isPassArr.push(component);
                            // 检测通过操作,能否进入下一页
                            this.checkPass();
                        }
                    }
                }


                publishArr.subscribeArray.forEach(ele => {
                    this.responseEvent(ele);
                });
        */

    }
    // 响应事件
    responseEvent(subscribe) {
        // console.log(subscribe);
        // console.log(subscribe.setCurrentState);

        if (!subscribe.setCurrentState) return;


        const timeout = parseInt(subscribe.timeOut, 10);
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
                // console.log(componentEle.id, componentEle.currentStateID);
                // console.log(subscribe.component.stateID);
                return;
            }


            this.setCurrentStateID(componentEle, subscribe.setCurrentState);

        }, timeout);


    }

    // 根据属性的值对数组排序
    private compare(property: string) {
        return (a, b) => {
            const value1 = a[property];
            const value2 = b[property];
            return value1 - value2;
        };
    }


    // 设置组件状态
    private setCurrentStateID(componentEle, id: string) {

        if (!componentEle.stateArray[id]) {
            // console.log(componentEle, id);
            console.log('没有此状态id');
            return;
        }
        Object.assign(componentEle, {
            currentStateID: id,
            currentState: componentEle.stateArray[id],
        });


        // console.log('v.style', v.style);
        Object.assign(componentEle, { currentStyle: {} }, );
        Object.assign(componentEle.currentStyle, componentEle.currentState.style.default, );

    }

    // 检测组件通过状态
    private checkPass() {

        if (this.componentArray.isPassArr.length === this.componentArray.length) {
            this.appService.state.current.isPass = true;
        }
        // console.log(this.appService.state.current.isPass);
    }
}
