import { Component, OnInit, DoCheck } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { BalanceService } from '../../components/balance';
import { MultimeterService } from '../../components/multimeter';
import { HandleErrorService } from '../../components/handle_error';
import { Lipositions, initLipositions, LipositionsLeft } from '../../index/in_memory_data.service';
declare var $: any;
@Component({

    selector: 'structure',
    providers: [
    ],
    styleUrls: ['./structure.component.scss'],
    templateUrl: './structure.component.html'
})
export class StructureComponent implements OnInit {
    pageTimerstructure: any = [];
    animateStatus = false;
    positions: any = [];
    index = 0;
    step: number;
    initsignalStatus = false;
    dischargeComplete = false;
    charge1fullsignal = false; 
    charge2fullsignal = false; 
    charge3fullsignal = false; 
    charge4fullsignal = false; 
    charge5fullsignal = false; 
    constructor(private dashboardService: DashboardService, private multimeterService: MultimeterService, private handleErrorService: HandleErrorService, private gearPanelService: GearPanelService,private balanceService: BalanceService
    ) {
    }
    loop(obj, start, max, duration, direction) {
        let self = this;
        if (!obj) return false;
        start = start || 0;
        max = max || 48;
        duration = duration || 20;
        let timer = [];
        function run() {
            $(obj).show();
            // 条件判断，以跳出循环动画
            if (!self.animateStatus) {
                clearTimeout(timer[obj.id]);
                $(obj).hide();
                return;
            }
            if (start > max) start = 0;
            // 下面是每隔一段时间执行动画的业务逻辑部分，可以修改
            if (direction) {
                switch (obj.id) {
                    case 'redpointsquare1': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare2': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare3': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare4': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare5': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare6': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare7': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare8': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare9': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare10': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare11': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare12': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare13': obj.style.marginLeft = -start + 'px'; break;
                    case 'electronbox1': obj.style.marginLeft = -start + 'px';if(start>15){obj.style.display='none'}else{obj.style.display='block'}; break;
                    case 'electronbox2': obj.style.marginTop = -start + 'px'; break;
                    case 'electronbox3': obj.style.marginLeft = start + 'px'; break;
                    case 'electronbox4': obj.style.marginTop = start + 'px'; break;
                    case 'electronbox5': obj.style.marginLeft = -start + 'px';if(start>15){obj.style.display='none'}else{obj.style.display='block'}; break;
                    case 'allLi': obj.style.marginLeft = start + 'px';break;
                }
            } else {
                switch (obj.id) {
                    case 'redpointsquare1': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare2': obj.style.marginTop = start + 'px'; break;
                    case 'redpointsquare3': obj.style.marginLeft = start + 'px'; break;
                    case 'redpointsquare4': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare5': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare6': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare7': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare8': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare9': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare10': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare11': obj.style.marginLeft = -start + 'px'; break;
                    case 'redpointsquare12': obj.style.marginTop = -start + 'px'; break;
                    case 'redpointsquare13': obj.style.marginLeft = start + 'px'; break;
                    case 'electronbox1': obj.style.marginLeft = start + 'px';if(start>15){obj.style.display='none'}else{obj.style.display='block'}; break;
                    case 'electronbox2': obj.style.marginTop = start + 'px'; break;
                    case 'electronbox3': obj.style.marginLeft = -start + 'px'; break;
                    case 'electronbox4': obj.style.marginTop = -start + 'px'; break;
                    case 'electronbox5': obj.style.marginLeft = start + 'px';if(start>15){obj.style.display='none'}else{obj.style.display='block'}; break;
                    case 'allLi': obj.style.marginLeft = -start + 'px';break;
                }
            }
            // 该帧动画执行完毕后，width + 1，然后进行下一帧动画
            start++;
            clearTimeout(timer[obj.id]);
            timer[obj.id] = setTimeout(run, duration);
        };
        run();
    }
    /**
     *动力电池电路内有红色小圆球流动，方向true为正，false为反
     * @memberOf FunctionComponent
     */
    redsquareflow(doOrfalse: boolean, direction: boolean): void {
        let main1 = document.getElementById('redpointsquare1');
        let main2 = document.getElementById('redpointsquare2');
        let main3 = document.getElementById('redpointsquare3');
        let main4 = document.getElementById('redpointsquare4');
        let main5 = document.getElementById('redpointsquare5');
        let main6 = document.getElementById('redpointsquare6');
        let main7 = document.getElementById('redpointsquare7');
        let main8 = document.getElementById('redpointsquare8');
        let main9 = document.getElementById('redpointsquare9');
        let main10 = document.getElementById('redpointsquare10');
        let main11 = document.getElementById('redpointsquare11');
        let main12 = document.getElementById('redpointsquare12');
        let main13 = document.getElementById('redpointsquare13');
        let self = this;
        self.animateStatus = doOrfalse;
        this.loop(main1, 0, 10, 20, direction);
        this.loop(main2, 0, 10, 20, direction);
        this.loop(main3, 0, 10, 20, direction);
        this.loop(main4, 0, 10, 20, direction);
        this.loop(main5, 0, 10, 20, direction);
        this.loop(main6, 0, 10, 20, direction);
        this.loop(main7, 0, 10, 20, direction);
        this.loop(main8, 0, 10, 20, direction);
        this.loop(main9, 0, 10, 20, direction);
        this.loop(main10, 0, 10, 20, direction);
        this.loop(main11, 0, 10, 20, direction);
        this.loop(main12, 0, 10, 20, direction);
        this.loop(main13, 0, 10, 20, direction);
    }
    /**
     *所有电池开始闪烁
     * @memberOf FunctionComponent
     */
    batteryflash(doOrfalse: boolean) {
        let _this = this;
        if (doOrfalse) {
            let batteryflashanimate = function () {
                _this.pageTimerstructure['timer1'] = setInterval(() => {
                    $('.battery').css('opacity', '1');
                    setTimeout(() => {
                        $('.battery').css('opacity', '0.8');
                    }, 300)
                }, 600)
            }
            batteryflashanimate();
            $('.redline').show();
        } else {
            clearInterval(this.pageTimerstructure['timer1']);
            $('.battery').css({ 'opacity': '1' }).stop();
            $('.redline').hide();
        }
    }
    /**
     *电池电量开始下降
     * @memberOf FunctionComponent
     */
    batterydown(doOrfalse: boolean): void {
        if (doOrfalse) {
            let _this = this;
            let animateTime = 10000;
            let battery1top = $('.fixbattery1').css('top').replace('px', '');
            let battery2top = $('.fixbattery2').css('top').replace('px', '');
            let battery3top = $('.fixbattery3').css('top').replace('px', '');
            let battery4top = $('.fixbattery4').css('top').replace('px', '');
            let battery5top = $('.fixbattery5').css('top').replace('px', '');

            

            let structureline1 = function () {
                if (battery1top < 22) {
                    $('.fixbattery1').show().stop().css({ 'top': battery1top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery1top) / (28 - 16)), "linear", function () {
                        $(this).addClass('battery1-orange').removeClass('battery1').css({ 'top': '22px' }).stop().animate({
                            top: '28px'
                        }, animateTime * ((6) / (28 - 16)), "linear", function () {
                            _this.checkoutbatteryTop();
                        })
                    })
                }
                else if (battery1top > 22) {
                    $('.fixbattery1').show().stop().css({ 'top': battery1top + 'px' }).animate({
                        top: '28px'
                    }, animateTime * ((28 - battery1top) / (28 - 16)), "linear", function () {
                        _this.checkoutbatteryTop();
                    })
                }
            }
            let structureline2 = function () {
                if (battery2top < 4) {
                    $('.fixbattery2').show().stop().addClass('battery2').removeClass('battery2-full').css({ 'top': battery2top + 4 + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery2top - 4 - 1 ) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery2-orange').removeClass('battery2').removeClass('battery2-full').css({ 'top': '22px' }).stop().animate({
                            top: '27px'
                        }, animateTime * ((5) / (27 - 16)), "linear")
                    })
                }
                else if (battery2top < 22 && battery2top >= 4) {
                    $('.fixbattery2').show().stop().css({ 'top': battery2top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery2top - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery2-orange').removeClass('battery2').removeClass('battery2-full').css({ 'top': '22px' }).stop().animate({
                            top: '27px'
                        }, animateTime * ((5) / (27 - 16)), "linear")
                    })
                } else if (battery2top > 22) {
                    $('.fixbattery2').show().stop().css({ 'top': battery2top + 'px' }).animate({
                        top: '27px'
                    }, animateTime * ((27 - battery2top) / (27 - 16)), "linear")
                }
            }
            let structureline3 = function () {
                if (battery3top < 4) {
                    $('.fixbattery3').show().stop().addClass('battery3').removeClass('battery3-full').css({ 'top': battery3top + 4 + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery3top - 4 - 3 ) / (25 - 16)), "linear", function () {
                        $(this).addClass('battery3-orange').removeClass('battery3').removeClass('battery3-full').css({ 'top': '22px' }).stop().animate({
                            top: '25px'
                        }, animateTime * ((3) / (25 - 16)), "linear")
                    })
                }
                if (battery3top < 22 && battery3top >= 4) {
                    $('.fixbattery3').show().stop().css({ 'top': battery3top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery3top - 3) / (25 - 16)), "linear", function () {
                        $(this).addClass('battery3-orange').removeClass('battery3').removeClass('battery3-full').css({ 'top': '22px' }).stop().animate({
                            top: '25px'
                        }, animateTime * ((3) / (25 - 16)), "linear")
                    })
                } else if (battery3top > 22) {
                    $('.fixbattery3').show().stop().css({ 'top': battery3top + 'px' }).animate({
                        top: '25px'
                    }, animateTime * ((25 - battery3top) / (25 - 16)), "linear")
                }
            }
            let structureline4 = function () {
                if (battery4top < 4) {
                    $('.fixbattery4').show().stop().addClass('battery4').removeClass('battery4-full').css({ 'top': battery4top + 4 + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery4top - 4 - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery4-orange').removeClass('battery4').removeClass('battery4-full').css({ 'top': '22px' }).stop().animate({
                            top: '27px'
                        }, animateTime * ((5) / (27 - 16)), "linear")
                    })
                }
                if (battery4top < 22 && battery4top >= 4) {
                    $('.fixbattery4').show().stop().css({ 'top': battery4top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery4top - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery4-orange').removeClass('battery4').removeClass('battery4-full').css({ 'top': '22px' }).stop().animate({
                            top: '27px'
                        }, animateTime * ((5) / (27 - 16)), "linear")
                    })
                } else if (battery4top > 22) {
                    $('.fixbattery4').show().stop().css({ 'top': battery4top + 'px' }).animate({
                        top: '27px'
                    }, animateTime * ((27 - battery4top) / (27 - 16)), "linear")
                }
            }
            let structureline5 = function () {
                if (battery5top < 22) {
                    $('.fixbattery5').show().stop().css({ 'top': battery5top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((22 - battery5top) / (28 - 16)), "linear", function () {
                        $(this).addClass('battery5-orange').removeClass('battery5').css({ 'top': '22px' }).stop().animate({
                            top: '28px'
                        }, animateTime * ((6) / (28 - 16)), "linear")
                    })
                } else {
                    $('.fixbattery5').show().stop().css({ 'top': battery5top + 'px' }).animate({
                        top: '28px'
                    }, animateTime * ((28 - battery5top) / (28 - 16)), "linear")
                }
            }

            structureline1();
            structureline2();
            structureline3();
            structureline4();
            structureline5();

        } else {
            $('.fixbattery1').show().stop();
            $('.fixbattery2').show().stop();
            $('.fixbattery3').show().stop();
            $('.fixbattery4').show().stop();
            $('.fixbattery5').show().stop();

        }
    }

    /**
     *电池电量开始上升
     * @memberOf FunctionComponent
     */
    batteryup(doOrfalse: boolean): void {
        if (doOrfalse) {
            let _this = this;
            let animateTime = 10000;
            let battery1top = $('.fixbattery1').css('top').replace('px', '');
            let battery2top = $('.fixbattery2').css('top').replace('px', '');
            let battery3top = $('.fixbattery3').css('top').replace('px', '');
            let battery4top = $('.fixbattery4').css('top').replace('px', '');
            let battery5top = $('.fixbattery5').css('top').replace('px', '');


            let structureline1 = function () {
                if (battery1top > 22) {
                    $('.fixbattery1').show().stop().css({ 'top': battery1top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((battery1top - 22) / (28 - 16)), "linear", function () {
                        $(this).addClass('battery1').removeClass('battery1-orange').css({ 'top': '22px' }).stop().animate({
                            top: '4px'
                        }, animateTime * ((18) / (28 - 16)), "linear", function () {
                            // setTimeout(()=>{
                            //     _this.checkoutbatteryfull();
                            // },500)
                            _this.charge1fullsignal = true;
                            if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                                _this.checkoutbatteryfull();
                            }
                        })
                    })
                }
                else {
                    $('.fixbattery1').show().stop().css({ 'top': battery1top + 'px' }).animate({
                        top: '4px'
                    }, animateTime * ((battery1top - 4) / (28 - 16)), "linear", function () {
                        // setTimeout(()=>{
                        //     _this.checkoutbatteryfull();
                        // },500)
                        _this.charge1fullsignal = true;
                        if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                            _this.checkoutbatteryfull();
                        }
                    })
                }
            }
            let structureline2 = function () {
                if (battery2top > 22) {
                    $('.fixbattery2').show().stop().css({ 'top': battery2top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((battery2top - 22 - 1) / (27- 16)), "linear", function () {
                        $(this).addClass('battery2').removeClass('battery2-orange').css({ 'top': '22px' }).stop().animate({
                            top: '4px'
                        }, animateTime * ((18) / (27 - 16)), "linear", function () {
                            $(this).addClass('battery2-full').removeClass('battery2').css('top', 0);
                            _this.charge2fullsignal = true;
                            if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                                _this.checkoutbatteryfull();
                            }
                        })
                    })
                } else {
                    $('.fixbattery2').show().stop().css({ 'top': battery2top + 'px' }).animate({
                        top: '4px'
                    }, animateTime * ((battery2top - 4 - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery2-full').removeClass('battery2').css('top', 0);
                        _this.charge2fullsignal = true;
                        if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                            _this.checkoutbatteryfull();
                        }
                    })
                }
            }
            let structureline3 = function () {
                if (battery3top > 22) {
                    $('.fixbattery3').show().stop().css({ 'top': battery3top  + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((battery3top - 22) / (25 - 16)), "linear", function () {
                        $(this).addClass('battery3').removeClass('battery3-orange').css({ 'top': '22px' }).stop().animate({
                            top: '4px'
                        }, animateTime * ((18-3) / (25 - 16)), "linear", function () {
                            $(this).addClass('battery3-full').removeClass('battery3').css('top', 0);
                            _this.charge3fullsignal = true;
                            if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                                _this.checkoutbatteryfull();
                            }
                        })
                    })
                } 
                else {
                    $('.fixbattery3').show().stop().css({ 'top': battery3top + 'px' }).animate({
                        top: '4px'
                    }, animateTime * ((battery3top - 4 - 3) / (25 - 16)), "linear", function () {
                        $(this).addClass('battery3-full').removeClass('battery3').css('top', 0);
                        _this.charge3fullsignal = true;
                        if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                            _this.checkoutbatteryfull();
                        }
                    })
                }
            }
            let structureline4 = function () {
                if (battery4top > 22) {
                    $('.fixbattery4').show().stop().css({ 'top': battery4top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((battery4top - 22 - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery4').removeClass('battery4-orange').css({ 'top': '22px' }).stop().animate({
                            top: '4px'
                        }, animateTime * ((18) / (27 - 16)), "linear", function () {
                            $(this).addClass('battery4-full').removeClass('battery4').css('top', 0);
                            _this.charge4fullsignal = true;
                            if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                                _this.checkoutbatteryfull();
                            }
                        })
                    })
                } else {
                    $('.fixbattery4').show().stop().css({ 'top': battery4top + 'px' }).animate({
                        top: '4px'
                    }, animateTime * ((battery4top - 4 - 1) / (27 - 16)), "linear", function () {
                        $(this).addClass('battery4-full').removeClass('battery4').css('top', 0);
                        _this.charge4fullsignal = true;
                        if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                            _this.checkoutbatteryfull();
                        }
                    })
                }
            }
            let structureline5 = function () {
                if (battery5top > 22) {
                    $('.fixbattery5').show().stop().css({ 'top': battery5top + 'px' }).animate({
                        top: '22px'
                    }, animateTime * ((battery5top - 22) / (28 - 16)), "linear", function () {
                        $(this).addClass('battery5').removeClass('battery5-orange').css({ 'top': '22px' }).stop().animate({
                            top: '4px'
                        }, animateTime * ((18) / (28 - 16)), "linear",function(){
                            _this.charge5fullsignal = true;
                            if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                                _this.checkoutbatteryfull();
                            }
                        })
                    })
                } else {
                    $('.fixbattery5').show().stop().css({ 'top': battery5top + 'px' }).animate({
                        top: '4px'
                    }, animateTime * ((battery5top - 4) / (28 - 16)), "linear",function(){
                        _this.charge5fullsignal = true;
                        if(_this.charge1fullsignal && _this.charge2fullsignal && _this.charge3fullsignal && _this.charge4fullsignal && _this.charge5fullsignal){
                            _this.checkoutbatteryfull();
                        }
                    })
                }
            }
            structureline1();
            structureline2();
            structureline3();
            structureline4();
            structureline5();

        } else {
            $('.fixbattery1').show().stop();
            $('.fixbattery2').show().stop();
            $('.fixbattery3').show().stop();
            $('.fixbattery4').show().stop();
            $('.fixbattery5').show().stop();
        }
    }

    

    checkoutbatteryTop() {
        this.dischargeComplete = true;
        this.redsquareflow(false, true);
        this.handleErrorService.handleError({ message: "动力电池亏电，请充电。" });
        this.singnalChargeAnimate(false,false);
        this.batteryflash(false);
        return;
    }
    checkoutbatteryfull() {
        this.gearPanelService.chargeComplete = true;
        this.dischargeComplete = false;
        this.redsquareflow(false,true);
        if(!this.balanceService.Mdata.balanceStart){
            this.handleErrorService.handleError({ message: "动力电池已充满。" });
        }
        this.singnalChargeAnimate(false,true);
        this.batteryflash(false);
        this.balanceService.Mdata.balanceComplete = true;
        return;
    }
    getpositions() {
        this.positions = initLipositions;
        setTimeout(() => {
            this.startObj();
        }, 0)
    }
    startObj() {
        let ullength = this.positions.length;
        for (let j = 0; j < ullength; j++) {
            let lis = $($('.libox').find('ul')[j]).find('li');
            let lilength = this.positions[0].position.length;
            for (let i = 0; i < lilength; i++) {
                $(lis[i]).css({ 'left': this.positions[j].position[i].x + 'px' });
                $(lis[i]).css({ 'top': this.positions[j].position[i].y + 'px' })
            }
        }
    }

    //单体结构电池动画
    singnalChargeAnimate(doOrfalse: boolean, direction: boolean) {
        this.initsignalStatus = true;
        let self = this;
        let animateTime = 10000;
        let ullength = this.positions.length;
        let lilength = this.positions[0].position.length;
        
        function ligo() {
            if (!doOrfalse) {
                $('.leftLi').show();
                $('.libox').find('li').stop();
                return;
            }else{
                $('.leftLi').hide();
            }
            if (self.index < lilength - 1) {
                self.index += 1;
            } else {
                return;
            }
            for(let j = 0; j < ullength; j++) {
                let lis = $($('.libox').find('ul')[j]).find('li');
                if(direction) {
                    $(lis[self.index]).hide().stop().animate({
                        // left: Lipositions[j].position[self.index].x + 'px',
                        // top: Lipositions[j].position[self.index].y + 'px',
                        'display':'block'
                    },animateTime/5,'linear',function(){
                        $(lis[21-self.index]).show().stop();
                        if (self.index < lilength - 1 &&　j==6) {
                            ligo();
                        }
                    });
                    
                } else {
                    $(lis[21-self.index]).hide().stop().animate({
                        // left:LipositionsLeft[j].position[self.index].x+'px',
                        // top: LipositionsLeft[j].position[self.index].y+'px',
                        'display':'block'
                    },animateTime/5,'linear',function(){
                        $(lis[self.index]).show().stop();
                        if(self.index<lilength-1 && j==6){
                            ligo();
                        }
                    })
                }
            }
        }
        ligo()
        let main1 = document.getElementById('electronbox1');
        let main2 = document.getElementById('electronbox2');
        let main3 = document.getElementById('electronbox3');
        let main4 = document.getElementById('electronbox4');
        let main5 = document.getElementById('electronbox5');
        let main6 = document.getElementById('allLi');
        self.animateStatus = doOrfalse;
        this.loop(main1, 0, 20, 20, direction);
        this.loop(main2, 0, 20, 20, direction);
        this.loop(main3, 0, 20, 20, direction);
        this.loop(main4, 0, 20, 20, direction);
        this.loop(main5, 0, 20, 20, direction);
        this.loop(main6, 0, 50, 40, direction);
    }











    //关闭
    lockGearFun() {
        if(this.gearPanelService.switchStatus){
            return;
        }else{
            for (let each in this.pageTimerstructure) {
                clearTimeout(this.pageTimerstructure[each]);   //清除全局定时器
            }
            this.redsquareflow(false, true);
            this.batteryflash(false);
            this.singnalChargeAnimate(false,true);
            this.balanceService.Mdata.balanceComplete = false;
            if(this.index>0){
                this.index -=1;
            }
        }
    }
    //打开
    onGearFun() {
        let fixbattery1top = $('.fixbattery1').css('top').replace('px','');
        if(fixbattery1top<1){
            $('.fixbattery1').addClass('battery1').removeClass('battery1-full').css('top','4px');
            $('.fixbattery5').addClass('battery5').removeClass('battery5-full').css('top','4px');
        }
        if(!this.dischargeComplete){
            this.redsquareflow(true, true);
            this.batteryflash(true);
            this.batterydown(true);
            this.index = 0;
            this.singnalChargeAnimate(true,true);
            
        }else{
            this.redsquareflow(false, false);
            this.singnalChargeAnimate(false,false);
            this.batteryflash(false);
            this.handleErrorService.handleError({ message: "动力电池亏电，请充电。" });
            return;
            
        }
        this.gearPanelService.chargeComplete = false;

        this.charge1fullsignal = false;
        this.charge3fullsignal = false;
        
    }

    //充电动画
    chargeAnimate() {
        this.redsquareflow(true, false);
        this.batteryflash(true);
        this.batteryup(true);
        this.index = 0;

        if (!this.initsignalStatus) {
        }
        this.singnalChargeAnimate(true,false);
        this.dischargeComplete = false;
    }
    //停止充电动画
    stopchargeAnimate() {
        this.redsquareflow(false, false);
        this.batteryflash(false);
        this.batteryup(false);
        this.singnalChargeAnimate(false,false);
        this.batteryflash(false);
        if(this.index>0){
            this.index -=1;
        }
    }
    // 均衡仪充电动画
    balancechargeAnimate(){
        this.redsquareflow(false,false);
        this.batteryflash(true);
        this.batteryup(true);
        this.singnalChargeAnimate(true,false);
        
    }
    // 均衡仪停止充电动画
    balancestopchargeAnimate() {
        this.redsquareflow(false, false);
        this.batteryflash(false);
        this.batteryup(false);
        this.singnalChargeAnimate(false,false);
    }
    //生命周期钩子函数
    ngOnInit() {
        this.getpositions();
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() });
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() });
        this.gearPanelService.setChargeAnimate(() => { return this.chargeAnimate() });
        this.gearPanelService.setStopChargeAnimate(() => { return this.stopchargeAnimate() });
        this.balanceService.Mdata.setChargeAnimate(() => { return this.balancechargeAnimate() });
        this.balanceService.Mdata.setStopChargeAnimate(() => { return this.balancestopchargeAnimate() });
    }
}
