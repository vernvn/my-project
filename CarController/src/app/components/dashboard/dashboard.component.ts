import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { GearPanelService } from '../gear_panel';
import { ObdscanService } from '../obdscan';
import { ChargeSwitchService } from '../charge_switch';
import { HandleErrorService } from '../handle_error';
import { CommunicationService } from '../communication';
declare let $: any;
@Component({
    selector: 'dashboard',
    providers: [
    ],
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    timerDashBoardPointer;
    voltage : number  ;
    current : number  ;
    constructor(public obdscanService: ObdscanService, public dashboardService: DashboardService, public gearPanelService: GearPanelService,public chargeSwitchService: ChargeSwitchService,public handleErrorService: HandleErrorService,public communicationService: CommunicationService ) {

    }
    ngOnInit() {
        // this.dashboardService.setGearsFun('on', () => {  return this.onGearFun() })
        this.dragDiv();
        this.valueChange();
    }
    createValue(){
        let randomvoltage = Math.random()*2.1+345.1;
        let randomcurrent = Math.random()*0.3+9;
        this.voltage = randomvoltage;
        this.current = randomcurrent;
    }
    valueChange(){
        setInterval(()=>{
            this.createValue();
        },1000)   
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

    stallsAngle(val) {

        if (val == (this.dashboardService.stalls + 1)) {
            return false
        }
        if (val == 1) {
            if (this.dashboardService.lockGearFun()) {
                this.dashboardService.lockGearFun();
                return this.dashboardService.lockGearContinue
            }
            this.dashboardService.stopbrakeanimate();
            this.dashboardService.stopfananimate();

            
            if (this.dashboardService.lockGearContinue) {
                if (this.timerDashBoardPointer) { clearInterval(this.timerDashBoardPointer); }


                this.obdscanService.Zdata.obdscanOpen = false;
                //模型通讯
                this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = '1';
                this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = '0';
                //按钮旋转
                $(".ignition").css("transform", "rotate(0deg)");
                $(".dashborad-screen").show();

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
            }
        } else if (val == 2) {
            if(this.chargeSwitchService.charge){
                this.handleErrorService.handleError({ message: "充电状态下，车辆不能切换到行驶模式。" });
                return;
            }
            if (this.dashboardService.onGearFun()) {
                this.dashboardService.onGearFun();
                return false
            }
            if(this.gearPanelService.isBrake == 1){
                this.dashboardService.brakeanimate();
            }
            if(this.dashboardService.fanisOK){
                this.dashboardService.fananimate();
            }else{
                this.dashboardService.stopfananimate();
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

                //记录进度点
                //xcjDataService.setProgress("B006");
                this.communicationService.setAction({id:'ver004',flag:'',sub:'',value:undefined})

            }


        }
    }

}
