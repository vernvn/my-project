import { Component,OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { GearPanelService } from '../gear_panel';
import { ObdscanService } from '../obdscan';
import { HandleErrorService } from '../handle_error';
import { BalanceService } from '../balance';
import { CommunicationService } from '../communication';

declare let $: any;
@Component({
    selector: 'dashboard',
    providers: [
    ],
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    timerDashBoardPointer;

    charge : number;
    voltage : number ;
    current : number = 9.0 ;
    dashboardInfotext:string;
    chargeStatus= false;
    dischargeStatus = false;
    constructor(public obdscanService: ObdscanService, public dashboardService: DashboardService, public gearPanelService: GearPanelService,public handleErrorService: HandleErrorService,public balanceService: BalanceService,public communicationService: CommunicationService, ) {
        
    }
    ngOnInit() {
        this.gearPanelService.setChargeAnimate(() => { return this.chargeAnimate() });
        this.gearPanelService.setStopChargeAnimate(() => { return this.stopchargeAnimate() });

        this.balanceService.Mdata.dashboardsetChargeAnimate(() => { return this.chargeAnimate() });
        this.balanceService.Mdata.dashboardsetStopChargeAnimate(() => { return this.stopchargeAnimate() });


        this.dragDiv();
        
    }
    dragDiv(): void {
        // 给新面板加上拖拽事件
        $(".dashboard-body").draggable({
            containment: ".container",
            cursor: "move"
        })
    };

    /*
    *
    *仪表的打开和关闭
    *
    * */

    dashboardShowOrHide(param) {
        if (param == 1) {
            $(".dashboard-body").show();
            $(".ignition-switch").hide();
        } else {
            $(".ignition-switch").show();
            $(".dashboard-body").hide();
        }
    }
    //电量降低
    chargedown(doOrfalse:boolean){
        let _this = this;
        if(doOrfalse){
            let animateTime = 10000;
            let battery6top = $('.unit-box').css('top').replace('px','');
            if(battery6top>26){
                _this.dashboardInfotext = '需要充电';
            }else{
                _this.dashboardInfotext = '';
            }
            let structureline6 = function(){
                if(battery6top<=26 && battery6top>3){
                    $('.unit-box').show().stop().css({'top':battery6top+'px'}).animate({
                        top:'26px'
                    },animateTime*((26-battery6top)/(33-16)),"linear",function(){
                        // $('.chargeinfo').html('需要充电').show();
                        _this.dashboardInfotext = '需要充电';
                        $('.fixunit').addClass('unit-orange').removeClass('unit');
                        $(this).css({'top':'26px'}).stop().animate({
                            top:'33px'
                        },animateTime*((7)/(33-16)),"linear")
                    })
                }else if(battery6top==3){
                    $('.unit-box').show().stop().css({'top':battery6top+'px'}).animate({
                        top:'26px'
                    },animateTime*((26)/(33-16)),"linear",function(){
                        // $('.chargeinfo').html('需要充电').show();
                        _this.dashboardInfotext = '需要充电';
                        $('.fixunit').addClass('unit-orange').removeClass('unit');
                        $(this).css({'top':'26px'}).stop().animate({
                            top:'33px'
                        },animateTime*((7)/(33-16)),"linear")
                    })
                }
                else{
                    $('.unit-box').show().stop().css({'top': battery6top+'px'}).animate({
                        top:'33px'
                    },animateTime*((33-battery6top)/(33-16)),"linear") 
                }

            }
            structureline6();
        }else{
            $('.unit-box').stop();
         }   
    }
    //电量升高

    chargeup(doOrfalse:boolean){
        let _this = this;
        if(doOrfalse){
            let animateTime = 10000;
            let battery6top = $('.unit-box').css('top').replace('px','');
            if(battery6top>26){
                _this.dashboardInfotext = '需要充电';
            }else{
                _this.dashboardInfotext = '';
            }
            let structureline6 = function(){
                if(battery6top>26 && battery6top<33){
                    $('.unit-box').show().stop().css({'top':battery6top+'px'}).animate({
                        top:'26px'
                    },animateTime*((battery6top-26)/(33-16)),"linear",function(){
                        $('.fixunit').removeClass('unit-orange').addClass('unit');
                        _this.dashboardInfotext = '';
                        $(this).css({'top':'26px'}).stop().animate({
                            top:'3px'
                        },animateTime*((23 + 1)/(33-16)),"linear",function(){
                            // _this.dashboardInfotext = '电量已充满';
                            _this.current =0;
                            setTimeout(()=>{
                                _this.dashboardService.dashboardInfo = false;
                                $(".dashborad-screen").show();
                            },500)
                        })
                    })
                }else if(battery6top==33){
                    $('.unit-box').show().stop().css({'top':battery6top+'px'}).animate({
                        top:'26px'
                    },animateTime*((33-26 + 3.7)/(33-16)),"linear",function(){
                        $('.fixunit').removeClass('unit-orange').addClass('unit');
                        _this.dashboardInfotext = '';
                        $(this).css({'top':'26px'}).stop().animate({
                            top:'3px'
                        },animateTime*((23)/(33-16)),"linear",function(){
                            // _this.dashboardInfotext = '电量已充满';
                            _this.current =0;
                            setTimeout(()=>{
                                _this.dashboardService.dashboardInfo = false;
                                $(".dashborad-screen").show();
                            },500)
                        })
                    })
                }else{
                    $('.unit-box').show().stop().css({'top': battery6top+'px'}).animate({
                        top:'3px'
                    },animateTime*((battery6top-3 + 3.7)/(33-16)),"linear",function(){
                        // $('.chargeinfo').html('电量已充满').show();
                        // _this.dashboardInfotext = '电量已充满';
                        _this.current =0;
                        
                        setTimeout(()=>{
                            _this.dashboardService.dashboardInfo = false;
                            $(".dashborad-screen").show();
                        },500)
                    }) 
                }
            }
            structureline6();
        }else{
            $('.unit-box').stop();
         }
    }

    ngDoCheck(){
        let battery6top = $('.unit-box').css('top').replace('px','');
        let dashboardcharge = Math.floor(battery6top);
        let dashboardNum = (-3*dashboardcharge)+108;
        if(dashboardNum==99){
            dashboardNum = 100;
        }else if(dashboardNum==9){
            dashboardNum = 10;
        }
        this.charge = dashboardNum;
        this.voltage = Number(this.balanceService.Mout.Out1PowBat_111112_EPO.substring(0,4))*100;
    }


    stallsAngle(val) {

        if (val == (this.dashboardService.stalls + 1)) {
            return false
        }
        if (val == 1) {
            if (this.dashboardService.lockGearFun()) {
                this.dashboardService.lockGearFun();
                return this.dashboardService.lockGearContinue
            }
          
            if (this.dashboardService.lockGearContinue) {
                if (this.timerDashBoardPointer) { clearInterval(this.timerDashBoardPointer); }


                this.obdscanService.Zdata.obdscanOpen = false;
                //模型通讯
                this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = '1';
                this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = '0';
                //按钮旋转
                $(".ignition").css("transform", "rotate(0deg)");
                if(!this.gearPanelService.switchStatus){
                    $(".dashborad-screen").show();
                }   
                

                //转速指针旋转
                $(".pointer-right").css({ "transform": "rotate(0deg)", "-ms-transform": "rotate(0deg)", "-moz-transform": "rotate(0deg)", "-webkit-transform": "rotate(0deg)" });
                $(".pointer-left").css({ "transform": "rotate(0deg)", "-ms-transform": "rotate(0deg)", "-moz-transform": "rotate(0deg)", "-webkit-transform": "rotate(0deg)" });


                //诊断仪断开
                if (!this.obdscanService.Zdata.obdscanOpen) {
                    this.obdscanService.Zdata.url = "guzhang";
                    if ($.inArray("obdscan2", this.obdscanService.Zdata.memory) != -1) {
                        this.obdscanService.Zdata.memory.pop();
                    }
                }

                //档位信号
                this.gearPanelService.controlStalls = 0;
                //档位信号
                this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '0';
                //按钮样式
                $(".gear-switch").css("transform", "rotate(-44deg)");
                $(".state-wrap span").removeClass("active");
                this.dashboardService.stalls = 0;
                this.dashboardService.dashboardInfo = false;
            }
            this.chargedown(false);
            this.chargeStatus = false;
            this.dischargeStatus = false;
        } else if (val == 2) {

            if(this.gearPanelService.switchStatus){
                this.handleErrorService.handleError({ message: "充电状态下，车辆不能切换到行驶模式。" });
                return;
            }
            if(this.balanceService.Mdata.balanceStart){
                this.handleErrorService.handleError({ message: "电池处于均衡状态不能进行充放电。" });
                return;
            }
            if (this.dashboardService.onGearFun()) {
                this.dashboardService.onGearFun();
                return false
            }
            if (this.dashboardService.onGearContinue) {


                var _this: any = this;
                this.obdscanService.Zdata.obdscanOpen = true;
                //模型通讯
                this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = '0';
                this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = '1';
                //按钮旋转
                $(".ignition").css("transform", "rotate(90deg)");
                $(".dashborad-screen").hide();

                if (this.timerDashBoardPointer) { clearInterval(this.timerDashBoardPointer); }
                //实时改变车速和速率
                this.timerDashBoardPointer = setInterval(function () {


                    var angle = _this.dashboardService.Mout.Out1Mot_x_VehSpeed_x_x * 1.1125;
                    var angle1 = _this.dashboardService.Mout.Out1Mot_x_Power_x_x * 1.1125;
                    //转速指针旋转
                    $(".pointer-right").css({ "transform": "rotate(" + "-" + angle + "deg)", "-ms-transform": "rotate(" + "-" + angle + "deg)", "-moz-transform": "rotate(" + "-" + angle + "deg)", "-webkit-transform": "rotate(" + "-" + angle + "deg)" });
                    $(".pointer-left").css({ "transform": "rotate(" + angle1 + "deg)", "-ms-transform": "rotate(" + angle1 + "deg)", "-moz-transform": "rotate(" + angle1 + "deg)", "-webkit-transform": "rotate(" + angle1 + "deg)" });
                }, 100);

                var obj = this.obdscanService.Zdata.memory.pop();
                if (obj) {
                    this.obdscanService.Zdata.url = obj;

                }
                this.gearPanelService.controlStalls = 2;

                //档位在on档
                this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '2';

                //按钮样式
               
                $(".state-wrap .stateN").addClass("active");




                this.dashboardService.stalls = 1;
                 this.dashboardService.dashboardInfo = true;

                //记录进度点
                //xcjDataService.setProgress("B006");
                this.communicationService.setAction({id:'ver009',flag:'',sub:'',value:undefined});

            }
            this.chargeStatus = false;
            this.dischargeStatus = true;
            this.chargedown(true);
        }
    }
    //仪表充电动画
    chargeAnimate(){
        this.current = 9.0;
        this.chargeup(true);
        this.chargeStatus = true;
        this.dischargeStatus = false;
        $(".dashborad-screen").hide();
        this.dashboardService.dashboardInfo=true;
    }
    //停止仪表充电动画
    stopchargeAnimate(){
        this.current = 9.0;
        this.chargeup(false);
        this.chargeStatus = false;
        this.dischargeStatus = false;
        $(".dashborad-screen").show();
        this.dashboardService.dashboardInfo=false;
    }

}
