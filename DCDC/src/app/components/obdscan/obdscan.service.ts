import { Injectable } from '@angular/core';
// import { DashboardService } from '../dashboard';
import 'rxjs/add/operator/toPromise';
declare let $: any;
@Injectable()
export class ObdscanService {
    // constructor(public dashboardService:DashboardService){

    // }
    Zdata = {
        isPower: true,
        url: 'obdscanMenu',
        obdscanStatus: false,
        tabBox1: true,
        tabBox2: false,
        tabBox3: false,
        obdscanOpen: false,
        layerType: "lay1",//动作测试类型弹出层
        actionType: "py",//发动机控制系统动作测试选项
        memory: [], //存模板  方面返回时用
        diagnosticStay: 0,//代表诊断没有点开过
        obdscanData: {
            "py": ["喷油量测试",
                "本测试选择喷油量从24.8%至-12.5%",
                "-12.5:Min to24.8%Max ",
                "在发动机转速不高于 3000 rpm ，冷却液温度不低于170F(77℃)并且过热保护装置关闭的情况下操作。"
            ]
        },
        obdscan() {

            //禁止弹出两次诊断仪
            if (this.diagnosticStay == 1) {
                return;
            }
            //加上触发样式
            $(".right-diagnostic").parent().addClass("active");
            //加上诊断仪使用状态码
            this.diagnosticStay = 1;
            //记录进度
            //$rootScope.recordHistory("A009");


            this.obdscanStatus = true;


            this.isPower = false;
            $("#mask-obdscan").draggable({    //示波仪的拖动
                handle: ".mask-obdscan",
                containment: ".main",
                scroll: false,
                cursor: "move",
                iframeFix: true,
                drag: function (event) {

                }
            });
            this.switchPage("obdscanMenu");

        },
        //动作测试弹出层的拖动
        ationTestPop() {
            $(".draghandle").draggable({
                handle: "",
                containment: "#obsanbody",
                scroll: false,
                cursor: "move",
                iframeFix: true,
                drag: function (event) {

                }
            });

        },
        //关闭动作测试里面的弹出层
        colsedPoplayer(name) {
            $(name).hide();
        },
        //关闭诊断仪
        closedobdscan() {
            //设置工具栏目状态万用表
            $("#zdy").removeClass("selected");
            $("#zdy").children("images").attr("src", "images/zdyunSelect.png");

            this.obdscanStatus = false;
            this.switchPage("obdscanMenu");

            //去除右侧工具栏的触发状态
            $(".right-diagnostic").parent().removeClass("active");
            //去除诊断仪使用状态码
            this.diagnosticStay = 0;
            //关闭诊断仪供电
            this.obdscanPower();
            //强行关上遮罩
            this.isPower = false;
        },


        /*诊断仪的菜单操作*/
        changeTemplate(type, page, clear, whicha, personTest) {
             console.log("1type");
            $.each(this.memory, function (index, value) {
                if (value == page) {
                    this.memory.splice($.inArray(page, this.memory), 1);  //判断模板数组是否存在，如存在删除
                }
            });
            console.log("2type");
            
             this.memory.push(page);//，添加模板
             this.switchPage(type);

            if (type == "obdscan2") {
                if (this.obdscanOpen) {
                   this.switchPage(type );
                } else {
                    this.switchPage("guzhang");
                }
            }

            //读取数据流
            if (type == "obdscan2") {
                //记录进度点
                //xcjDataService.setProgress("B005");
            }



            if (type == "actiontest") {
                setTimeout(function () {
                    this.ationTestPop();
                }, 1000);
            }

        },
        switchPage(page) {
            console.log(page);
           this.url=page;
        },
        //诊断仪的返回
        obdscanReturn() {
            this.initiativeTest = 0;
            //        alert(memory)
            var obj = this.memory.pop();
            if (!obj) {
                return;
            }
            //        alert(obj)
            // if (((this.dashboardService.Dint.In1IgnKey_x_LOCK_x_x == '1') || (this.dashboardService.Dint.In1IgnKey_x_ACC_x_x == '1')) && (!obj)) {
            //     obj = 'car';
            //     this.memory = ['obdscanMenu']
            // }
            //        alert(obj)
            if (obj) {
                this.switchPage(obj);
            } else {
                this.switchPage("obdscanMenu");
            }
        },

        //诊断仪的加电
        obdscanPower() {
            this.isPower = !this.isPower;
            this.switchPage("obdscanMenu");
            //清空返回历史
            this.memory = [];
            //this.isPower=this.isPower=!this.isPower;
        },
        //tabMenu 菜单
        tabMenu(type, target) {
            $('.tab_menu li').removeClass("selected");
            $(target).addClass("selected");
            this.tabBox1 = false;
            this.tabBox2 = false;
            this.tabBox3 = false;
            if (type == "tab1") {
                this.tabBox1 = true;
            }
            else if (type == "tab2") {
                this.tabBox2 = true;
            }
            else if (type == "tab3") {
                this.tabBox3 = true;
            }
        },
        actionTest(type, layer) {
            this.actionType = type;
            this.layerType = layer;
        },
        //设置Service参数
        setServiceData() {
            switch (this.actionType) {
                case "py":
                    var value = $(".tk-1-text").text();
                    this.Mint.In1OBD_x_CtrlInjVol_x_x = value;
                    break;
                case "jqzstjf":
                    var value = $(".tk-5-text").text();
                    this.Mint.In1OBD_x_CtrlVVTLinear_x_x = value;
                    break;
                case "pqzstjf":
                    var value = $(".tk-5-text").text();
                    this.Mint.In1OBD_x_CtrlVVTExLinear_x_x = value;
                    break;
                case "krbcgq":
                    var value = $(".tk-2-text").text();
                    this.Mint.In1OBD_x_CtrlInjVolforAF_x_x = value;
                    break;
                case "tgdcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiVsvEvap_x_x = value == 'off' ? "1" : "2";
                    break;
                case "ryb":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_CtrlTCandTE1_x_x = value == 'off' ? "1" : "2";
                    break;
                case "lqfs":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ElecCoolFan_x_x = value == 'off' ? "1" : "2";
                    break;
                case "qdjdq":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiStRelay_x_x = value == 'off' ? "1" : "2";
                    break;
                case "jqm":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_EtcsOpClSlowSpeed_x_x = value == 'close' ? "1" : "2";
                    break;
                case "qgdy"://?
                    var value = $(".tk-4-text").text();
                    this.Mint.In1OBD_x_SeleCylFuelCut_x_x = value == 'off' ? "1" : "2";

                    break;
                case "SLTdcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiSolenoldSLT_x_x = value == 'off' ? "1" : "2";
                    break;
                case "S1dcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiSolenoldS1_x_x = value == 'off' ? "1" : "2";
                    break;
                case "S2dcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiSolenoldS2_x_x = value == 'off' ? "1" : "2";
                    break;
                case "szdcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiLockUp_x_x = value == 'off' ? "1" : "2";
                    break;
                case "SLdcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiSolenoldSL_x_x = value == 'off' ? "1" : "2";
                    break;
                case "hdw":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ShiftPosition_x_x = value == 'off' ? "1" : "2";
                    break;
                case "STdcf":
                    var value = $(".tk-3-text").text();
                    this.Mint.In1OBD_x_ActiSolenoldST_x_x = value == 'off' ? "1" : "2";
                    break;

            }

        },
        //弹出层调节器
        leftAdjust(tmep: any, cs: any) {
            $('.tk-1-zuo').css('background', 'url("framework/obdscan/images/pylces/6.png")');
            $('.tk-1-you').css('background', 'url("framework/obdscan/images/pylces/4.png")');
            if (tmep == 'tmp1') {
                var val = parseFloat($(".tk-1-gun").css("left"));
                var left = val > 158 ? val - 6 : val;
                var text = parseFloat($(".tk-1-text").text());
                let adjust = parseInt((text - 2).toFixed(2)) > -12.5 ? (text - 2).toFixed(2) : -12.5;
                $(".tk-1-gun").css("left", function () { return left + "px"; });
                $(".tk-1-text").text(adjust + "%");
                this.setServiceData();
            }
            else if (tmep == 'tmp2') {
                var val = parseFloat($(".tk-5-gun").css("left"));
                var left = val > 158 ? val - 4 : val;
                var text = parseFloat($(".tk-5-text").text());
                let adjust = (text - 10) > -128 ? (text - 10) : -128;
                $(".tk-5-gun").css("left", function () { return left + "px"; });
                $(".tk-5-text").text(adjust);
                this.setServiceData();
            }
        },
        rightAdjust(temp, cs) {
            $('.tk-1-you').css('background', 'url("framework/obdscan/images/pylces/7.png")');
            $('.tk-1-zuo').css('background', 'url("framework/obdscan/images/pylces/5.png")');
            if (temp == 'tmp1') {
                var val = parseFloat($(".tk-1-gun").css("left"));
                var left = val < 242 ? val + 4 : val;
                var text = parseFloat($(".tk-1-text").text());
                let adjust = parseInt((text + 2).toFixed(2)) < 24.8 ? (text + 2).toFixed(2) : 24.8;
                $(".tk-1-text").text(adjust + "%");
                $(".tk-1-gun").css("left", function () {
                    return left + "px";
                });
                this.setServiceData();
            }
            else if (temp == 'tmp2') {
                var val = parseFloat($(".tk-5-gun").css("left"));
                var left = val < 242 ? val + 4 : val;
                var text = parseFloat($(".tk-5-text").text());
                var adjust = text + 10 < 127 ? text + 10 : 127;
                $(".tk-5-gun").css("left", function () { return left + "px"; });
                $(".tk-5-text").text(adjust);
                this.setServiceData();
            }
        },
        adjustData(num) {
            if (num == '-12.5') {
                $('.tk-2-zuo').css('background', 'url("framework/obdscan/images/krbcgq/zuo_2.png")');
                $('.tk-2-zhong').css('background', 'url("framework/obdscan/images/krbcgq/zhong.png")');
                $('.tk-2-you').css('background', 'url("framework/obdscan/images/krbcgq/you.png")');
            } else if (num == '0') {
                $('.tk-2-zuo').css('background', 'url("framework/obdscan/images/krbcgq/zuo.png")');
                $('.tk-2-zhong').css('background', 'url("framework/obdscan/images/krbcgq/zhong_2.png")');
                $('.tk-2-you').css('background', 'url("framework/obdscan/images/krbcgq/you.png")');
            } else if (num == '12.5') {
                $('.tk-2-zuo').css('background', 'url("framework/obdscan/images/krbcgq/zuo.png")');
                $('.tk-2-zhong').css('background', 'url("framework/obdscan/images/krbcgq/zhong.png")');
                $('.tk-2-you').css('background', 'url("framework/obdscan/images/krbcgq/you_2.png")');
            }
            $(".tk-2-text").text(num + "%");
        },

        switchBtn(type, str) {
            this.setServiceData();
            if (type == 'tk3' && str == 'off') {
                $('.tk-3-zuo').css('background', 'url("framework/obdscan/images/tgdcf/zuo-2.png")');
                $('.tk-3-you').css('background', 'url("framework/obdscan/images/tgdcf/you.png")');
            } else if (type == 'tk3' && str == 'on') {
                $('.tk-3-zuo').css('background', 'url("framework/obdscan/images/tgdcf/zuo.png")');
                $('.tk-3-you').css('background', 'url("framework/obdscan/images/tgdcf/you-2.png")');
            } else if (type == 'tk4' && str == 'off') {
                $('.tk-4-zuo').css('background', 'url("framework/obdscan/images/qgan/zuo-2.png")');
                $('.tk-4-you').css('background', 'url("framework/obdscan/images/qgan/you.png")');
            } else if (type == 'tk4' && str == 'on') {
                $('.tk-4-zuo').css('background', 'url("framework/obdscan/images/qgan/zuo.png")');
                $('.tk-4-you').css('background', 'url("framework/obdscan/images/qgan/you-2.png")');
            }

            if (type == "tk3") {
                if (this.actionType == "jqm") {
                    var tm = str == "off" ? "close" : "open";
                    $(".tk-3-text").text(tm);
                }
                else {
                    $(".tk-3-text").text(str);
                }
            }
            else if (type == "tk4") { $(".tk-4-text").text(str); }

        },
        setInitVal(num) {
            if (num == 1) {
                $('.shu1').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu1').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');

            }
            else if (num == 2) {
                $('.shu2').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu2').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 3) {
                $('.shu3').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu3').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 4) {
                $('.shu4').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu4').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 5) {
                $('.shu5').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu5').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 6) {
                $('.shu6').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu6').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 7) {
                $('.shu7').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu7').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            else if (num == 8) {
                $('.shu8').css('background', 'url("framework/obdscan/images/qgan/8.png")');
                $('.shu8').siblings().css('background', 'url("framework/obdscan/images/qgan/9.png")');
            }
            this.Mint.In1OBD_x_SeleCylFuelCutNum_x_x = num;
        },
        obdscanTake: function () {

            this.obdscan();
        },
        Mint: {
            In1NER_OBD_ClearCode_x_x: '0',//    清除故障码动作
            In1OBD_x_CtrlInjVol_x_x: '0',//    清除故障码动作
            In1OBD_x_CtrlVVTLinear_x_x: '0',//    清除故障码动作
            In1OBD_x_CtrlVVTExLinear_x_x: '0',//    清除故障码动作
            In1OBD_x_CtrlInjVolforAF_x_x: '0',//    清除故障码动作
            In1OBD_x_ActiVsvEvap_x_x: '',
            In1OBD_x_CtrlTCandTE1_x_x: '',
            In1OBD_x_ElecCoolFan_x_x: '',
            In1OBD_x_ActiStRelay_x_x: '',
            In1OBD_x_EtcsOpClSlowSpeed_x_x: '',
            In1OBD_x_SeleCylFuelCut_x_x: '',
            In1OBD_x_ActiSolenoldSLT_x_x: '',
            In1OBD_x_ActiSolenoldS1_x_x: '',
            In1OBD_x_ActiSolenoldS2_x_x: '',
            In1OBD_x_ActiLockUp_x_x: '',
            In1OBD_x_ActiSolenoldSL_x_x: '',
            In1OBD_x_ShiftPosition_x_x: '',
            In1OBD_x_ActiSolenoldST_x_x: '',
            In1OBD_x_SeleCylFuelCutNum_x_x: ''
        }
    };

    Mout={

        Out1Mot_Ignit_Key_x_x: 0,     //点火开关
        Out1Mot_Gear_Signal_x_x: 0,    //档位
        Out1Mot_Brake_Signal_x_x: 0,    //制动信号
        Out1Mot_Busbar_Current_x_x: 0,    //母线电流
        Out1Mot_Busbar_Vlt_x_x: 0,    //母线电压

        Out1Mot_Drection_Order_x_x: 0,    //驱动电机转矩，转速指令方向命令

        Out1Mot_MCU_Sped_Order_x: 0,    //MCU接收到的转速指令
        Out1Mot_Motor_Sped_rpm_x: 0,    //电机当前转速
        Out1Mot_D_Shaft_Vlt_x: 0,    //D轴电压
        Out1Mot_Q_Shaft_Vlt_x: 0,    //Q轴电压
        Out1Mot_D_Shaft_Current_x: 0,    //D轴电流
        Out1Mot_Q_Shaft_Current_x: 0,    //Q轴电流
        Out1Mot_Motor_Temp_x_x: 0,    //电机温度
        Out1Mot_Motor_Ctr_Temp_x: 0,    //电机控制器温度
        Out1Mot_MCU_Batt_Vlt_x:'',   //MCU低压供电电源电压
        Out1Mot_Motor_work_mode_x: 0 ,//驱动电机当前工作模式
        Out1AT_Gear_Position_x_x:''
    }
}
