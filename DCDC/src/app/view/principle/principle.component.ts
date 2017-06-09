import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { AppService } from '../../index/app.service';
declare let $: any,
    InitializePrinciple: any,
    InitializeCircuit: any,
    principleAnimate: any,
    circuitAnimate: any;
@Component({
    selector: 'principle',
    styleUrls: ['principle.component.scss'],
    providers: [
    ],
    templateUrl: './principle.component.html'
})
export class PrincipleComponent implements OnInit {
    pageTimer: any = [];
    animateStatus = false;
    arrowTurnStatus = false;
    constructor(private dashboardService: DashboardService, private gearpanelService: GearPanelService, private appService: AppService) {
    }
    ngOnInit() {
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })
        this.gearpanelService.setStopAnimate(() => { return this.onGearFun() })
    }
     /**
     * 把要执行的循环动画都绑定到一个数组中，统一循环
     */
    loopB = [];
     /**
     * 执行的循环动画在数组中的下标
     */
    loopBIndex: number = 0;
     /**
     * 是否执行动画循环
     */
    setTimeoutGO: boolean = true;
    duration;
    /**
     * 执行所有的循环动画
     */
    loopBFun() {
        for (let i in this.loopB) {
            this.loopB[i]();
        }
    }
    loop2(obj, start, max, duration, direction) {
        if (!obj) return false;
        start = start || 0;
        max = max || 48;
        this.duration = duration || 20;
        let timer = [];
        this.loopB[this.loopBIndex] = () => {
            $(obj).show();
            // 条件判断，以跳出循环动画
            // if (obj.id === 'arrow-turn2') {
            //     console.log(self.arrowTurnStatus);
            //     if (!self.arrowTurnStatus) {
            //         // cancelAnimationFrame(timer[obj.id]);
            //         $(obj).hide();
            //         return;
            //     }
            // } else {
            console.log(this.animateStatus);
            if (!this.animateStatus) {
                // cancelAnimationFrame(timer[obj.id]);
                $(obj).hide();
                this.setTimeoutGO = false;
                return;
            }
            // }
            if (start > max) start = 0;
            // 下面是每隔一段时间执行动画的业务逻辑部分，可以修改
            if (direction) {
                switch (obj.id) {
                    case 'redpointsquare3': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare1': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare2': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare4': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare5': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare6': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare7': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare8': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare9': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare10': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare11': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare12': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare13': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare14': obj.style.marginTop = -start + 'px'; break;
                    case 'impulsewave1': obj.style.marginLeft = -start + 'px'; break;
                    case 'impulsewave2': obj.style.marginLeft = -start + 'px'; break;
                    case 'impulsewave3': obj.style.marginLeft = -start + 'px'; break;
                    case 'impulsewave4': obj.style.marginLeft = -start + 'px'; break;
                    case 'impulsewave5': obj.style.marginLeft = -start + 'px'; break;
                }
            } else {
                switch (obj.id) {
                    case 'redpointsquare3': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare1': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare2': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare4': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare5': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare6': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare7': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare8': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare9': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare10': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare11': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare12': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare13': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare14': obj.style.marginTop = start + 'px'; break;
                    case 'impulsewave1': obj.style.marginLeft = start + 'px'; break;
                    case 'impulsewave2': obj.style.marginLeft = start + 'px'; break;
                    case 'impulsewave3': obj.style.marginLeft = start + 'px'; break;
                    case 'impulsewave4': obj.style.marginLeft = start + 'px'; break;
                    case 'impulsewave5': obj.style.marginLeft = start + 'px'; break;
                }
            }
            // 该帧动画执行完毕后，width + 1，然后进行下一帧动画
            start++;
            // clearTimeout(timer[obj.id]);
            // timer[obj.id] = setTimeout(run, duration);
            // timer[obj.id] = requestAnimationFrame(run);
        };
        this.loopBIndex += 1;
        //    timer[obj.id] = requestAnimationFrame(run);
        // run();
    }
     /**
     * 处理动画是否循环执行
     */
    requestBnimation(boolean) {
        if (boolean) {
            this.setTimeoutGO = true;
            this.animateStatus = true;
        }
        if (this.loopBIndex > 0) {
            this.loopBFun();
        }
        if (this.setTimeoutGO) {
            setTimeout(() => this.requestBnimation(false), this.duration);

        } else {
            this.loopB = [];
            this.loopBIndex = 0;
        }
    }
    /**
     *动力电池正极有电流流出到V1、V3；V2、V4有电流从负极线流入动力电池
     * @memberOf FunctionComponent
     */
    redsquareflow(doOrfalse: boolean): void {
        let main1 = document.getElementById('redpointsquare1');
        let main2 = document.getElementById('redpointsquare2');
        let main3 = document.getElementById('redpointsquare3');
        let main4 = document.getElementById('redpointsquare4');
        let main11 = document.getElementById('redpointsquare11');
        let main12 = document.getElementById('redpointsquare12');
        let main13 = document.getElementById('redpointsquare13');
        let main14 = document.getElementById('redpointsquare14');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop2(main1, 0, 10, 20, false);
        this.loop2(main2, 0, 10, 20, true);
        this.loop2(main3, 0, 10, 20, true);
        this.loop2(main4, 0, 10, 20, true);
        this.loop2(main11, 0, 10, 20, false);
        this.loop2(main12, 0, 10, 20, false);
        this.loop2(main13, 0, 10, 20, false);
        this.loop2(main14, 0, 10, 20, true);
    }
    /**
     *变压器一直闪烁；滤波电路一直闪烁
     * @memberOf FunctionComponent
     */
    componenttwinkle(openOrclose: boolean) {
        if (openOrclose) {
            let hotarea = function () {
                $('.flashransformer').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        hotarea();
                    });
                });
                $('.wavefilter').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        hotarea();
                    });
                });
            }
            hotarea();

        } else {
            $('.flashransformer').hide().stop();
            $('.wavefilter').hide().stop();
        }
    }
    /**
     *V1、V4（晶体管）” 和“V2、V3（晶体管）”交替闪烁；
     * @memberOf FunctionComponent
     */
    transistorflashcontinue(openOrclose: boolean) {
        if (openOrclose) {
            this.transistor1and4flash(true);
            this.transistor2and3flash(false);
            if (this.pageTimer['timer1']) {
                clearTimeout(this.pageTimer['timer1'])
            }
            this.pageTimer['timer1'] = setTimeout(() => {
                this.transistor1and4flash(false);
                this.transistor2and3flash(true);
            }, 500);
            if (this.pageTimer['timer2']) {
                clearInterval(this.pageTimer['timer2'])
            }
            this.pageTimer['timer2'] = setInterval(() => {
                this.transistor1and4flash(true);
                this.transistor2and3flash(false);
                if (this.pageTimer['timer3']) {
                    clearTimeout(this.pageTimer['timer3'])
                }
                this.pageTimer['timer3'] = setTimeout(() => {
                    this.transistor1and4flash(false);
                    this.transistor2and3flash(true);
                }, 500)
            }, 1000)
        } else {
            this.transistor1and4flash(false);
            this.transistor2and3flash(false);
        }
    }
    transistor1and4flash(openOrclose: boolean) {
        if (openOrclose) {
            let transistor1and4 = function () {
                $('.transistor1').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        transistor1and4();
                    });
                });
                $('.transistor4').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        transistor1and4();
                    });
                });
            }
            transistor1and4();
        } else {
            $('.transistor1').hide().stop();
            $('.transistor4').hide().stop();
        }
    }
    transistor2and3flash(openOrclose: boolean) {
        if (openOrclose) {
            let transistor2and3 = function () {
                $('.transistor2').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        transistor2and3();
                    });
                });
                $('.transistor3').show().stop().animate({
                    'display': 'block'
                }, 500, function () {
                    $(this).hide().stop().animate({
                        'display': 'block'
                    }, 500, function () {
                        $(this).hide();
                        transistor2and3();
                    });
                });
            }
            transistor2and3();
        } else {
            $('.transistor2').hide().stop();
            $('.transistor3').hide().stop();
        }
    }
    /**
     *滤波电路到辅助电池正极电路有电流流动；从辅助电池有电流流入变压器
     * @memberOf FunctionComponent
     */
    redsquareflow2transformer(doOrfalse: boolean): void {
        let main5 = document.getElementById('redpointsquare5');
        let main6 = document.getElementById('redpointsquare6');
        let main7 = document.getElementById('redpointsquare7');
        let main8 = document.getElementById('redpointsquare8');
        let main9 = document.getElementById('redpointsquare9');
        let main10 = document.getElementById('redpointsquare10');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop2(main5, 0, 10, 20, false);
        this.loop2(main6, 0, 10, 20, false);
        this.loop2(main7, 0, 10, 20, false);
        this.loop2(main8, 0, 10, 20, true);
        this.loop2(main9, 0, 10, 20, true);
        this.loop2(main10, 0, 10, 20, true);
    }
    /**
     *滤波电路到辅助电池正极电路有电流流动；从辅助电池有电流流入变压器
     * @memberOf FunctionComponent
     */
    impulsewave1flash(doOrfalse: boolean): void {
        let main1 = document.getElementById('impulsewave1');
        let main2 = document.getElementById('impulsewave2');
        let main3 = document.getElementById('impulsewave3');
        let main4 = document.getElementById('impulsewave4');
        let main5 = document.getElementById('impulsewave5');
        // let main6 = document.getElementById('redpointsquare10');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop2(main1, 0, 27, 20, false);
        this.loop2(main2, 0, 27, 20, false);
        this.loop2(main3, 0, 25, 20, false);
        this.loop2(main4, 0, 25, 20, false);
        this.loop2(main5, 0, 25, 20, false);


        // this.loop(main6,0,10,20,true);
    }
    // lock档位执行方法
    lockGearFun() {
        this.InitializePrinciple();

    }
    //on档位执行方法
    onGearFun() {
        this.InitializePrinciple();
        this.redsquareflow(true);
        this.componenttwinkle(true);
        this.transistorflashcontinue(true);
        this.redsquareflow2transformer(true);
        this.impulsewave1flash(true);

        this.requestBnimation(true);
        $('.switchprinciple').addClass('switchprincipletransform').removeClass('switchprinciple');
        //    setInterval(()=>{
        //         for(let each in this.pageTimer){
        //             clearTimeout(this.pageTimer[each]);   //清除全局定时器
        //             clearInterval(this.pageTimer[each]); 
        //         }
        //     },500)
    }
    // 初始化原理页面
    InitializePrinciple() {
        console.log("InitializePrinciple");
        this.animateStatus = false;
        this.componenttwinkle(false);
        this.transistorflashcontinue(false);
        for (let each in this.pageTimer) {
            clearInterval(this.pageTimer[each]);
            clearTimeout(this.pageTimer[each]);
        }
        $('.switchprincipletransform').addClass('switchprinciple').removeClass('switchprincipletransform');
    }
}
