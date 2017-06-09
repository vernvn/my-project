import { Component } from '@angular/core';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from './gear_panel.service';
import { DashboardService } from '../dashboard';
import { ChargeSwitchService } from '../../components/charge_switch';
import { CommunicationService } from '../communication';

declare let $: any,
    stallsRAnimate: any,
    stallsDAnimate: any;

@Component({
    selector: 'gear-panel',
    styleUrls: ['./gear_panel.component.scss'],
    templateUrl: './gear_panel.component.html',
    providers: []
})
/**
 * 处理错误的组件
 */
export class GearPanelComponent {
    //档位开关是否隐藏
    gearPanelHidden: boolean = true;
    //是否踩下刹车踏板
    isBrake = 0;
    //是否在拖拽
    isDrag = 0;
    //控制中心的按钮在什么档位，1、2、3分别代表r、n、d
    controlStalls = 0;
    //档位在lock档
    stalls = 0;

    timergear = [];
    constructor(
        private gearPanelService: GearPanelService,
        private dashboardService: DashboardService,
        private handleErrorService: HandleErrorService,
        private chargeSwitchService: ChargeSwitchService,
        private communicationService: CommunicationService
    ) {

    }

    ngOnInit() {
        this.dragAcc();
        this.dragDiv();

    }

    /*
     *
     * 面板拖拽
     *
     * */
    dragDiv() {
        //给新面板加上拖拽事件
        $(".dragSource").draggable({
            containment: ".container",
            cursor: "move"
        })
    }

    /*
     *
     * 点开面板
     *
     * */

    openSwitchPanel(val: number): void {
        let zIndex = 14;
        //打开门控开关
        if (val == 1) {
            $(".wifi-switch-panel,.key-switch-panel").css("z-index", (zIndex - 1));
            $(".gear-wrap").removeClass("hide-important").css("z-index", "16");
            $(".door-switch").parent().addClass("active");
        }
        //打遥控器
        if (val == 2) {
            $(".door-switch-panel,.key-switch-panel").css("z-index", (zIndex - 1));
            $(".wifi-switch-panel").removeClass("hide-important").css("z-index", "16");
            $(".wifi-switch").parent().addClass("active");
        }
        //打开车门锁
        if (val == 3) {
            $(".wifi-switch-panel,.door-switch-panel").css("z-index", (zIndex - 1));
            $(".key-switch-panel").removeClass("hide-important").css("z-index", "16");
            $(".key-switch").parent().addClass("active");
        }
    }


    /*
     *
     * 关闭面板
     *
     * */

    closeSwitchPanel(val) {
        //关闭门控开关
        if (val == 1) {
            $(".gear-wrap").addClass("hide-important");
            $(".door-switch").parent().removeClass("active");
        }
        //关闭遥控器
        if (val == 2) {
            $(".wifi-switch-panel").addClass("hide-important");
            $(".wifi-switch").parent().removeClass("active");
        }
        //关闭门锁
        if (val == 3) {
            $(".key-switch-panel").addClass("hide-important");
            $(".key-switch").parent().removeClass("active");
        }
    }
    /*
     *
     * 控制面板刹车点击
     *
     * */

    brakeOn(_obj) {
        let tireSpeed = 1;
        let _top = parseInt($(_obj).css("top"));
        if (_top == 35) {
            $('.brakepedal').css('transform','rotate(10deg)');
            
            
            
            // console.log(this.gearPanelService.pressureValuerotate)

            if(this.gearPanelService.pressureValuerotate>-52 && this.gearPanelService.pressureValuerotate<0){
                this.gearPanelService.space = -this.gearPanelService.pressureValuerotate;
                this.gearPanelService.pressureValuerotate +=-this.gearPanelService.pressureValuerotate;
                this.gearPanelService.pressbrakeanimate();
                if(this.timergear['timer1']){
                    clearTimeout(this.timergear['timer1'])
                }
                clearTimeout(this.timergear['timer2'])
                this.timergear['timer1'] = setTimeout(()=>{
                    this.gearPanelService.pressdownanimate();
                    //  this.gearPanelService.pressdownanimate();
                },3000)
            }else if(this.gearPanelService.pressureValuerotate<-52){
                this.gearPanelService.space = 52;
                this.gearPanelService.pressureValuerotate +=52;
                this.gearPanelService.pressbrakeanimate();
                
                if(this.timergear['timer2']){
                    clearTimeout(this.timergear['timer2'])
                }
                clearTimeout(this.timergear['timer1'])
                this.timergear['timer2'] = setTimeout(()=>{
                    console.log(this.gearPanelService.pressisOk)
                    this.gearPanelService.pressdownanimate();
                    //  this.gearPanelService.pressdownanimate();
                },3000)
                
            }
            
            
            this.gearPanelService.brakesignalanimate();
            
            

            this.gearPanelService.isBrake = 1;

            this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = '1';

            $(_obj).css("top", "107px");

            $(".circuit-brake").attr({ "stroke": "#E50012" });
            $(".circuit-switch3").attr({ "stroke": "#E50012", "x2": "589.988" });
            if (this.gearPanelService.pressBrakeFun()) {
                this.gearPanelService.pressBrakeFun()
            }
            
            if(this.dashboardService.stalls ==1 || this.chargeSwitchService.charge){
                if(this.gearPanelService.brakeanimate()){
                    this.gearPanelService.brakeanimate()
                }
            }
            //记录进度点
            //xcjDataService.setProgress("B007");
            this.communicationService.setAction({id:'ver005',flag:'',sub:'',value:undefined});

        } else {
            this.gearPanelService.isBrake = 0;


            // this.gearPanelService.stoppressbrakeanimate();

            this.gearPanelService.stopbrakesignalanimate();
            // clearTimeout(this.timergear['timer1']);
            // clearTimeout(this.timergear['timer2']);


            $('.brakepedal').css('transform','rotate(-5deg)');

            this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = '0';

            $(_obj).css("top", "35px");

            $(".circuit-brake").attr({ "stroke": "#231815" });

            $(".circuit-switch3").attr({ "stroke": "#231815", "x2": "598.233" });
            if (this.gearPanelService.loosenBrakeFun()) {
                this.gearPanelService.loosenBrakeFun()
            }
            
            if(this.gearPanelService.stopbrakeanimate()){
                this.gearPanelService.stopbrakeanimate()
            }
            
            
            //松开刹车动画
            this.releaseBrake();
        }
    };

    /*
    *
    * 加速踏板松开动画
    *
    * */
    accRelease(): void {
        if (this.gearPanelService.loosenAcceleratorFun()) {
            this.gearPanelService.loosenAcceleratorFun()
        }
        //页面动画控制
        //松开就改变动画方向
        if ((this.gearPanelService.controlStalls == 1 || this.gearPanelService.controlStalls == 3) && this.dashboardService.stalls == 1 && this.gearPanelService.isBrake == 0) {
            $(".block-slide1").show();
            $(".block-slide2").hide();
            //流向动力电池
            $(".line-flow1").hide();
            $(".line-flow2").show();
            //页面动画控制

            //r
            if (this.gearPanelService.controlStalls == 1) {

                stallsRAnimate(1);

            } else if (this.gearPanelService.controlStalls == 3) {

                stallsDAnimate(1)

            }
        }



    }
    /*
     *
     * 面板拖拽事件，加速
     *
     * */

    dragAcc(): void {
        var _this = this;
        //给新面板加上拖拽事件
        $(".accelerator").draggable({
            containment: ".gear-accelerator",
            cursor: "move",
            drag: function () {
                _this.gearPanelService.isDrag = 1;
                let _left = parseInt($(".accelerator").css("top"));
                let oldLeft = $(".data-show").html();
                let newLeft = Math.floor(_left * (84 / 52)) + 16;

                //控制中心档位在r和d档
                if ((_this.gearPanelService.controlStalls == 1 || _this.gearPanelService.controlStalls == 3) && _this.gearPanelService.isBrake == 1) {
                    _this.handleErrorService.handleError({ message: "请松开刹车踏板" });
                    return;
                }

                //加速踏板拖拽动画
                _this.accDrag(newLeft, oldLeft);

                _this.dashboardService.Mint.In1NER_APP_NO1_x_x = newLeft + '';
                $(".data-show").html(newLeft);



            },
            stop: function () {

                //控制中心档位在r和d档
                if ((_this.gearPanelService.controlStalls == 1 || _this.gearPanelService.controlStalls == 3) && _this.gearPanelService.isBrake == 1) {
                    _this.handleErrorService.handleError({ message: "请松开刹车踏板" });

                }
                $(".accelerator ").css("top", "0");

                _this.dashboardService.Mint.In1NER_APP_NO1_x_x = '16';

                $(".data-show").html("16");

                //加速踏板松开动画
                _this.accRelease();
                _this.gearPanelService.isDrag = 2;
                //记录进度点
                // xcjDataService.setProgress("B008");
                _this.communicationService.setAction({id:'ver006',flag:'',sub:'',value:undefined});
                //if(speedListener){$interval.cancel(speedListener);}
                //clearInterval( pageTimer['speed']);
            }
        })
    };


    /*
     *
     * 档位事件
     *
     * */
    switchGear(id, obj) {

        //console.log(dashboardService.Mint.In1Mot_Gear_Signal_x_x +",,,,"+id)

        if (this.dashboardService.Mint.In1Mot_Gear_Signal_x_x == id) {
            return;
        }


        if (this.dashboardService.stalls == 1) {
            if (id == 1) {

                if (this.gearPanelService.isBrake == 0) {

                    this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
                    return;
                }
                this.gearPanelService.controlStalls = 1;

                this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '1';

                $(".gear-switch").css("transform", "rotate(-90deg)");

                $(".circuit-stalls").attr("stroke", "#231815");

                $(".circuit-r").attr("stroke", "#28C2FF");
                //记录进度点
                //xcjDataService.setProgress("B010");
                this.communicationService.setAction({id:'ver007',flag:'',sub:'',value:undefined});

            } else if (id == 2) {
                if (this.gearPanelService.isBrake == 0) {
                    this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
                    return;
                }
                this.gearPanelService.controlStalls = 2;

                this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '2';

                $(".gear-switch").css("transform", "rotate(-44deg)");

                $(".circuit-stalls").attr("stroke", "#231815");
                $(".circuit-n").attr("stroke", "#28C2FF");

                // this.gearPanelService.stopanimate();


            } else if (id == 3) {
                if (this.gearPanelService.isBrake == 0) {
                    this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
                    return;
                }
                this.gearPanelService.controlStalls = 3;

                this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '3';

                $(".gear-switch").css("transform", "rotate(0deg)");

                $(".circuit-stalls").attr("stroke", "#231815");
                $(".circuit-d").attr("stroke", "#28C2FF");
                //记录进度点
                // xcjDataService.setProgress("B009");
                this.communicationService.setAction({id:'ver007',flag:'',sub:'',value:undefined});

            }

            //页面动画先初始化一下
            //stallsInit();
            //circuitInit();

            //按钮样式
            $(".state-wrap span").removeClass("active");

            $(obj).addClass("active");


        }


    }

    /*
     *
     * 松开刹车动画
     *
     * */
    releaseBrake() {
        let pageTimer = {
            "mask": null
        };

        //松开刹车
        //r
        if (this.gearPanelService.controlStalls == 1 && this.dashboardService.stalls == 1) {
            //stallsRAnimate(1);
            $(".block-slide2").show();
            $(".block-slide1").hide();
            //流向控制电机
            $(".line-flow1").show();
            $(".line-flow2").hide();
            clearInterval(pageTimer["mask"]);

            pageTimer["mask"] = setInterval(function () {
                if ($(".line-mask4").css("display") == "none") {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").hide();
                    $(".line-mask4,.line-mask5").show();
                } else if ($(".line-mask3").css("display") == "none") {
                    $(".line-mask1,.line-mask2").hide();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").show();
                } else if ($(".line-mask1").css("display") == "none") {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").hide();
                } else {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").hide();
                }
            }, 300)

        } else if (this.gearPanelService.controlStalls == 3 && this.dashboardService.stalls == 1) {

            //stallsDAnimate(1);

            $(".block-slide2").show();
            $(".block-slide1").hide();
            //流向控制电机
            $(".line-flow1").show();
            $(".line-flow2").hide();

            clearInterval(pageTimer["mask"]);

            pageTimer["mask"] = setInterval(function () {
                if ($(".line-mask4").css("display") == "none") {
                    $(".line-mask1,.line-mask2").hide();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").show();
                } else if ($(".line-mask1").css("display") == "none") {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").hide();
                    $(".line-mask4,.line-mask5").show();
                } else if ($(".line-mask3").css("display") == "none") {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").hide();
                } else {
                    $(".line-mask1,.line-mask2").show();
                    $(".line-mask3").show();
                    $(".line-mask4,.line-mask5").hide();
                }
            }, 300)
        }
    }

    /*
*
* 加速踏板拖动动画
*
* */


    accDrag(newLeft, oldLeft) {
        let speedListener = 0;
        let times = 0;
        //console.log("------------------------------------");
        //如果是往上滑动，就是减速，减速动画改变
        if ((this.gearPanelService.controlStalls == 1 || this.gearPanelService.controlStalls == 3) && this.dashboardService.stalls == 1 && this.gearPanelService.isBrake == 0 && this.gearPanelService.isDrag == 1) {
            if (newLeft == oldLeft) {
                if (this.gearPanelService.rackAcceleratorFun()) {
                    this.gearPanelService.rackAcceleratorFun()
                }

                //return false;
            } else {
                if (oldLeft > newLeft) {
                    if (this.gearPanelService.minusAcceleratorFun()) {
                        this.gearPanelService.minusAcceleratorFun()
                    }
                    $(".block-slide1").show();
                    $(".block-slide2").hide();
                    //流向动力电池
                    $(".line-flow1").hide();
                    $(".line-flow2").show();
                } else {
                    if (this.gearPanelService.addAcceleratorFun()) {
                        this.gearPanelService.addAcceleratorFun()
                    }
                    $(".block-slide1").hide();
                    $(".block-slide2").show();
                    //流向动力电池
                    $(".line-flow1").show();
                    $(".line-flow2").hide();
                }
            }


        }
    }


}
