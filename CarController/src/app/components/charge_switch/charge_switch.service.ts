import { Injectable } from '@angular/core';
@Injectable()
export class ChargeSwitchService {
    /**
     * 充电开关是否隐藏
     * 
     * @type {boolean}
     * @memberOf ChargeSwitchService
     */
    chargeSwitchHidden: boolean = true;
    /**
     * 充电开关是否充电
     * 
     * @type {boolean}
     * @memberOf ChargeSwitchService
     */
    charge: boolean = false;
    
    /**
     * 储存充电开关关闭要执行那些方法
     * 
     * 
     * @memberOf ChargeSwitchService
     */
    chargeOff=[];
    /**
     * 充电开关关闭要执行那些方法的下标
     * 
     * @type {number}
     * @memberOf ChargeSwitchService
     */
    chargeOffIndex:number;
      /**
     * 充电开关关闭是否执行自有的任务
     * 
     * 
     * @memberOf DashboardService
     */
     chargeOffContinue:boolean=true;
    /**
     * 储存充电开关开启要执行那些方法
     * 
     * 
     * @memberOf ChargeSwitchService
     */
    chargeOn=[];
    /**
     * 充电开关开启要执行那些方法的下标
     * 
     * @type {number}
     * @memberOf ChargeSwitchService
     */
    chargeOnIndex:number;
      /**
     * 充电开关打开是否执行自有的任务
     * 
     * 
     * @memberOf DashboardService
     */
     chargeOnContinue:boolean=true;
    /**
     * 设置充电开关那些状态下要执行那些方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf ChargeSwitchService
     */
    setchargeFun(status, fun) {
        switch (status) {
            case 'off':
                this.chargeOff[this.chargeOffIndex] = fun;
                this.chargeOffIndex += 1;
                 break;
            case 'on':
                this.chargeOn[this.chargeOnIndex] = fun;
                this.chargeOnIndex += 1;
                 break;

        }

    }
    /**
     * 充电开关关闭要执行那些方法
     * 
     * 
     * @memberOf ChargeSwitchService
     */
    offChargeFun() {
        for (let i in this.chargeOff) {
            this.chargeOff[i]();
        }
    }
      /**
     * 充电开关打开要执行那些方法
     * 
     * 
     * @memberOf ChargeSwitchService
     */
    onChargeFun() {
        for (let i in this.chargeOn) {
            this.chargeOn[i]();
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


    //充电原理页面进行动画
    chargeanimateArr = [];
    chargeanimateIndex : number;
    setChargeAnimate(fun){
        this.chargeanimateArr[this.chargeanimateIndex] = fun;
        this.chargeanimateIndex+=1;
    };
    chargeanimate(){
        for (let i in this.chargeanimateArr) {
            this.chargeanimateArr[i]();
        }
    };
    //停刹车充电进行动画
    stopchargeanimateArr = [];
    stopchargeanimateIndex : number;
    setStopChargeAnimate(fun){
        this.stopchargeanimateArr[this.stopchargeanimateIndex] = fun;
        this.stopchargeanimateIndex+=1;
    };
    stopchargeanimate(){
        for (let i in this.stopchargeanimateArr) {
            this.stopchargeanimateArr[i]();
        }
    }

}