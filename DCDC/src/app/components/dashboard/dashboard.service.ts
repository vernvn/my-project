import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()
export class DashboardService {
    dackspeed: number = 0;
    stalls = 0; // 档位在lock档
    /**
     * 储存lock档位需要执行哪些外部方法
     * 
     * 
     * @memberOf DashboardService
     */
    lockGear = [];
    /**
    * lock档位是否执行自有的任务
    * 
    * 
    * @memberOf DashboardService
    */
    lockGearContinue: boolean = true;
    /**
     * lock档位执行那些外部方法的下标
     * 
     * 
     * @memberOf DashboardService
     */
    lockGearIndex: number=0;

    /**
     * 储存on档位需要执行哪些外部方法
     * 
     * 
     * @memberOf DashboardService
     */
    onGear = [];
    /**
     * on档位执行那些外部方法的下标
     * 
     * 
     * @memberOf DashboardService
     */
    onGearIndex: number = 0;
    /**
    * lock档位是否执行自有的任务
    * 
    * 
    * @memberOf DashboardService
    */
    onGearContinue: boolean = true;
    /**
     * 设置仪表需要在哪个档位执行外部的什么方法
     * 
     * @param {any} gear
     * @param {any} fun
     * 
     * @memberOf DashboardService
     */
    setGearsFun(gear, fun) {
        switch (gear) {
            case 'lock':
                this.lockGear[this.lockGearIndex] = fun;
                this.lockGearIndex += 1;
                console.log(this.lockGear);
                break;
            case 'on':
                this.onGear[this.onGearIndex] = fun;
                this.onGearIndex += 1;
                // console.log(this.onGear);
                break;
            default:
                break;

        }

    }

    /**
     * lock档位需要执行的哪些方法
     * 
     * 
     * @memberOf DashboardService
     */
    lockGearFun() {
        for (let i in this.lockGear) {
            this.lockGear[i]();
        }
    }
    /**
     * on档位需要执行的哪些方法
     * 
     * 
     * @memberOf DashboardService
     */
    onGearFun() {
        for (let i in this.onGear) {
            this.onGear[i]();
        }
    }
    /**
     * 储存车速为零需要执行哪些外部方法
     * 
     * 
     * @memberOf DashboardService
     */
    speedIsZero = [];
    /**
     * 车速为零执行那些外部方法的下标
     * 
     * 
     * @memberOf DashboardService
     */
    speedIsZeroIndex: number = 0;
    /**
     * 设置速度为固定值需要在哪个档位执行外部的什么方法
     * 
     * @param {number} num
     * @param {any} fun
     * 
     * @memberOf DashboardService
     */
    setSpeedIsFixedFun(num, fun) {
        switch (num) {
            case 0:
                this.speedIsZero[this.speedIsZeroIndex] = fun;
                this.speedIsZeroIndex += 1;
                break;
            default:
                break;

        }

    }
    /**
    * 速度为零需要执行的哪些方法
    * 
    * 
    * @memberOf DashboardService
    */
    SpeedIsZeroFun() {
        for (let i in this.speedIsZero) {
            this.speedIsZero[i]();
        }
    }
    oldSpeed: string[] = ["test", "test"];
    oldSpeedIndex: number = 1;
    /**
     * 储存车速不变时需要执行哪些外部方法
     * 
     * 
     * @memberOf DashboardService
     */
    speedIsRack = [];
    /**
     * 车速不变时执行那些外部方法的下标
     * 
     * 
     * @memberOf DashboardService
     */
    speedIsRackIndex: number = 0;
    /**
     * 设置速度在某个状态时需要在哪个档位执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf DashboardService
     */
    setspeedIsStatusFun(status, fun) {
        switch (status) {
            case 'rack':
                this.speedIsRack[this.speedIsRackIndex] = fun;
                this.speedIsRackIndex += 1;
                break;
            default:
        }
    }
    /**
     * 速度不变需要执行的哪些方法
     * 
     * 
     * @memberOf DashboardService
     */
    speedIsRackFun() {
        for (let i in this.speedIsRack) {
            this.speedIsRack[i]();
        }
    }
    SpeedFixedFun: number = 0;
    SpeedStatusFun: string = 'rack';
    timeoutID;
    checkSpeed(speed) {
        let _speed = speed;
        if (this.oldSpeed[this.oldSpeedIndex] == _speed) {

            if (this.oldSpeedIndex == 20) {
                this.speedIsRackFun();
                this.SpeedStatusFun = '';
            }

            this.oldSpeedIndex += 1;

        } else {
            if ( this.oldSpeed[this.oldSpeedIndex-1] != _speed) {
                this.oldSpeedIndex = 1;
            }
            this.oldSpeed[this.oldSpeedIndex] = _speed;
            // if(this.timeoutID){
            // clearTimeout(this.timeoutID);
            // }
            // this.timeoutID=setTimeout(()  => this.SpeedStatusFun = 'rack',1000);
        }
        // }, 3000);
        if (speed != 0) {
            // console.log(speed);
            this.dackspeed = speed;
            this.SpeedFixedFun = 0;
        }
        switch (speed) {

            case 0:
                if (this.SpeedFixedFun == 0) {

                    this.SpeedIsZeroFun();
                    this.SpeedFixedFun = 1;

                }
                break;
            default:


        }

    }
    Mint = {
        In1NER_APP_NO1_x_x: '16',	//油门踏板信号
        In1NER_x_BrakeSig_x_x: '0',	//制动踏板信号
        In1Mot_Gear_Signal_x_x: '0',	//档位信号
        In1NER_IgnKey_LOCK_x_x: '1',  //点火LOCK档位
        In1NER_IgnKey_ON_x_x: '0'   //on


    }
    Mout = {
        Out1NER_x_LED_ABS_Jud: '0',  //ABS灯输出
        Out1NER_x_LED_Brake_Jud: '0',  //驻车制动灯输出
        Out1NER_x_LED_SafeBag_Jud: '0',  //安全气囊灯输出
        Out1NER_x_LED_MIL_Jud: '0',  //发动机故障灯输出
        Out1NER_x_LED_OilPre_Jud: '0',  //油压灯输出
        Out1NER_x_LED_BATTFault_Jud: '0',  //蓄电池灯输出
        Out1NER_x_LED_SafeBelt_Jud: '0',  //安全带灯输出
        Out1NER_x_LED_BrakLamp_Jud: '',  //制动液位灯
        Out1Mot_x_Power_x_x: '0',  //功率表指针参数
        Out1Mot_x_VehSpeed_x_x: 0  //车速


    }
}