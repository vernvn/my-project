import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()
export class GearPanelService {
    //是否踩下刹车踏板
    isBrake = 0;
    //是否在拖拽
    isDrag = 0;
    //控制中心的按钮在什么档位，1、2、3分别代表r、n、d
    controlStalls = 0;
    //档位开关操作面板是否隐藏
    pressureValuerotate = 0;   //压力传感器初始数值

    space = 52;  //刹车压力传感器上升间隔,初始为数值0.02，rotate为50

    pressisOk : boolean;   //踏板增加0.02后是否可以下降
    //gearPanelHidden:boolean=true;

    addspeedIndex = 0;
    minusspeedIndex = 0
    /**
     * 储存踩下制动需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    pressBrake = [];

    /**
     * 踩下制动执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    pressBrakeIndex: number;

    /**
     * 储存松开制动需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    loosenBrake = [];

    /**
     * 松开制动执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    loosenBrakeIndex: number;

    /**
     * 设置制动踏板需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setBrakesFun(status, fun) {
        switch (status) {
            case 'press':
                this.pressBrake[this.pressBrakeIndex] = fun;
                this.pressBrakeIndex += 1;
                // console.log(this.lockGear);
                break;
            case 'loosen':
                this.loosenBrake[this.loosenBrakeIndex] = fun;
                this.loosenBrakeIndex += 1;
                // console.log(this.onGear);
                break;

        }

    }
    /**
     * 踩下制动需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    pressBrakeFun() {
        for (let i in this.pressBrake) {
            this.pressBrake[i]();
        }
    }

    /**
     * 松开制动需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    loosenBrakeFun() {
        for (let i in this.loosenBrake) {
            this.loosenBrake[i]();
        }
    }


    /**
     * 储存加油门需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    addAccelerator = [];

    /**
     * 加油门执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    addAcceleratorIndex: number;

    /**
     * 储存减油门需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    minusAccelerator = [];

    /**
     * 减油门执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    minusAcceleratorIndex: number;
    /**
     * 储存松开油门需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    loosenAccelerator = [];

    /**
     * 松开油门执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    loosenAcceleratorIndex: number;
    /**
    * 储存匀速油门需要执行哪些外部方法
    * 
    * 
    * @memberOf GearPanelService
    */
    rackAccelerator = [];

    /**
     * 匀速油门执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    rackAcceleratorIndex: number;
    /**
     * 设置油门需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setAcceleratorsFun(status, fun) {
        switch (status) {
            case 'add':
                this.addAccelerator[this.addAcceleratorIndex] = fun;
                this.addAcceleratorIndex += 1;
                // console.log(this.lockGear);
                break;
            case 'minus':
                this.minusAccelerator[this.minusAcceleratorIndex] = fun;
                this.minusAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;
            case 'loosen':
                this.loosenAccelerator[this.loosenAcceleratorIndex] = fun;
                this.loosenAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;
            case 'rack':
                this.rackAccelerator[this.rackAcceleratorIndex] = fun;
                this.rackAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;

        }

    }
    /**
     * 加油门需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    addAcceleratorFun() {
        for (let i in this.addAccelerator) {
            this.addAccelerator[i]();
        }
    }

    /**
     * 减油门需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    minusAcceleratorFun() {
        for (let i in this.minusAccelerator) {
            this.minusAccelerator[i]();
        }
    }

    /**
      * 匀速油门需要执行的哪些方法
      * 
      * 
      * @memberOf GearPanelService
      */
    rackAcceleratorFun() {
        for (let i in this.rackAccelerator) {
            this.rackAccelerator[i]();
        }
    }
    /**
    * 松开油门需要执行的哪些方法
    * 
    * 
    * @memberOf GearPanelService
    */
    loosenAcceleratorFun() {
        for (let i in this.loosenAccelerator) {
            this.loosenAccelerator[i]();
        }
    }



    /**
     * 倒档需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    reverse = [];

    /**
     * 倒档执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    reverseIndex: number;

    /**
     * 储存空档需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    neutral = [];

    /**
     * 空档执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    neutralIndex: number;
    /**
     * 储存前进档需要执行哪些外部方法
     * 
     * 
     * @memberOf GearPanelService
     */
    drive = [];

    /**
     * 前进档执行那些外部方法的下标
     * 
     * @type {number}
     * @memberOf GearPanelService
     */
    driveIndex: number;
    /**
     * 设置档位开关需要在哪个状态执行外部的什么方法
     * 
     * @param {any} gear
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setShiftFun(gear, fun) {
        switch (gear) {
            case 'reverse':
                this.reverse[this.reverseIndex] = fun;
                this.reverseIndex += 1;
                // console.log(this.lockGear);
                break;
            case 'neutral':
                this.neutral[this.neutralIndex] = fun;
                this.neutralIndex += 1;
                // console.log(this.onGear);
                break;
            case 'drive':
                this.drive[this.driveIndex] = fun;
                this.driveIndex += 1;
                // console.log(this.onGear);
                break;

        }

    }
    /**
     * 倒档需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    reverseFun() {
        for (let i in this.reverse) {
            this.reverse[i]();
        }
    }

    /**
     * 空档需要执行的哪些方法
     * 
     * 
     * @memberOf GearPanelService
     */
    neutralFun() {
        for (let i in this.neutral) {
            this.neutral[i]();
        }
    }

    /**
    * 前进档需要执行的哪些方法
    * 
    * 
    * @memberOf GearPanelService
    */
    driveFun() {
        for (let i in this.drive) {
            this.drive[i]();
        }
    }
    //N档停止动画 
    stopanimateArr = [];
    stopanimateIndex : number;
    setStopAnimate(fun){
        this.stopanimateArr[this.stopanimateIndex] = fun;
        this.stopanimateIndex+=1;
    }
    stopanimate(){
        for (let i in this.stopanimateArr) {
            this.stopanimateArr[i]();
        }
    };
    //刹车进行动画
    brakeanimateArr = [];
    brakeanimateIndex : number;
    setBrakeAnimate(fun){
        this.brakeanimateArr[this.brakeanimateIndex] = fun;
        this.brakeanimateIndex+=1;
    };
    brakeanimate(){
        for (let i in this.brakeanimateArr) {
            this.brakeanimateArr[i]();
        }
    };
    //停刹车充电进行动画
    stopbrakeanimateArr = [];
    stopbrakeanimateIndex : number;
    setStopBrakeAnimate(fun){
        this.stopbrakeanimateArr[this.stopbrakeanimateIndex] = fun;
        this.stopbrakeanimateIndex+=1;
    };
    stopbrakeanimate(){
        for (let i in this.stopbrakeanimateArr) {
            this.stopbrakeanimateArr[i]();
        }
    }
    //压力传感器刹车进行动画
    pressbrakeanimateArr = [];
    pressbrakeanimateIndex : number;
    setpressBrakeAnimate(fun){
        this.pressbrakeanimateArr[this.pressbrakeanimateIndex] = fun;
        this.pressbrakeanimateIndex+=1;
    };
    pressbrakeanimate(){
        for (let i in this.pressbrakeanimateArr) {
            this.pressbrakeanimateArr[i]();
        }
    };
    //停止压力传感器刹车进行动画
    stoppressbrakeanimateArr = [];
    stoppressbrakeanimateIndex : number;
    setStoppressBrakeAnimate(fun){
        this.stoppressbrakeanimateArr[this.stoppressbrakeanimateIndex] = fun;
        this.stoppressbrakeanimateIndex+=1;
    };
    stoppressbrakeanimate(){
        for (let i in this.stoppressbrakeanimateArr) {
            this.stoppressbrakeanimateArr[i]();
        }
    };

    //压力传感器自动下降进行动画
    pressdownanimateArr = [];
    pressdownanimateIndex : number;
    setpressDownAnimate(fun){
        this.pressdownanimateArr[this.pressdownanimateIndex] = fun;
        this.pressdownanimateIndex+=1;
    };
    pressdownanimate(){
        for (let i in this.pressdownanimateArr) {
            this.pressdownanimateArr[i]();
        }
    };


    //刹车信号动画
    brakesignalanimateArr = [];
    brakesignalanimateIndex : number;
    setbrakesignalAnimate(fun){
        this.brakesignalanimateArr[this.brakesignalanimateIndex] = fun;
        this.brakesignalanimateIndex+=1;
    };
    brakesignalanimate(){
        for (let i in this.brakesignalanimateArr) {
            this.brakesignalanimateArr[i]();
        }
    };
    //停止刹车信号动画
    stopbrakesignalanimateArr = [];
    stopbrakesignalanimateIndex : number;
    setstopbrakesignalAnimate(fun){
        this.stopbrakesignalanimateArr[this.stopbrakesignalanimateIndex] = fun;
        this.stopbrakesignalanimateIndex+=1;
    };
    stopbrakesignalanimate(){
        for (let i in this.stopbrakesignalanimateArr) {
            this.stopbrakesignalanimateArr[i]();
        }
    };

}