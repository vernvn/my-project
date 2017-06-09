/**
 * @createDate   2015-08-4 下午05:28:38
 * @author       hao liqiang
 * @email        lq.hao@xiaochejiang.com
 * @version      1.0
 */

batteryModule.service('batteryService', function () {
    var batteryService ={};
    batteryService.Mdata = batteryService.Mdata || {};//万用表中自己的参数
    batteryService.Mint = batteryService.Mint || {};//万用表中向仿真模型传输的参数
    batteryService.Mout = batteryService.Mout || {};//万用表中从仿真模型获取的参数
    batteryService.Mdata ={
        judgeS:function(href){
            if(batteryService.Mdata.batteryStatus){
                if(batteryService.Mdata.w_battery_blackHtml==href||batteryService.Mdata.w_battery_blackHtml==null){
                    batteryService.Mdata.SvgBlackStatus = true;
                }else{
                    batteryService.Mdata.SvgBlackStatus = false;
                }
                if(batteryService.Mdata.w_battery_redHtml==href||batteryService.Mdata.w_battery_redHtml==null){

                    batteryService.Mdata.SvgRedStatus = true;
                }else{
                    batteryService.Mdata.SvgRedStatus = false;
                }
            }

        },

        freshHontspot :function () {
            $("body").find('a').droppable({
                accept: "#hhjbatteryBlack_hotspot,#hhjbatteryRed_hotspot",
                tolerance: "pointer",
                greedy: true,

                over: function (event, ui) {

                    if (ui.draggable[0].id == "hhjbatteryBlack_hotspot") {
                        $("#path_black").css("stroke", "#f69c19");
                    }
                    if (ui.draggable[0].id == "hhjbatteryRed_hotspot") {
                        $("#path_Red").css("stroke", "#f69c19");
                    }
                },
                out: function (event, ui) {
                    if (ui.draggable[0].id == "hhjbatteryRed_hotspot") {
                        $("#path_Red").css("stroke", "#db3040");
                        return false;
                    }
                    if (ui.draggable[0].id == "hhjbatteryBlack_hotspot") {
                        $("#path_black").css("stroke", "#656261");
                        return false;
                    }
                },
                drop: function (event, ui) {
                   // console.log("----------------------------------------------------------------------------");

                    if (ui.draggable[0].id == "hhjbatteryRed_hotspot" && batteryService.Mdata.Blackrepetition != $(this).attr("rqPosition")) {
                        $("#path_Red").css("stroke", "#db3040");
                        $("#hhjbatteryRed").css("top", "" + ($(this).attr("h_x") - 234) + "px");
                        $("#hhjbatteryRed").css("left", "" + (parseInt($(this).attr("h_y")) + 5) + "px");
                        $("#hhjbatteryRed_hotspot").css("top", "" + ($(this).attr("h_x") - 17) + "px");
                        $("#hhjbatteryRed_hotspot").css("left", "" + (parseInt($(this).attr("h_y")) + 5) + "px");
                        batteryService.Mdata.battery_red = 0;

                        batteryService.Mint.In1MultiLogic_x_Red_x_x = $(this).attr("rqPosition");
                        batteryService.Mdata.Radrepetition = $(this).attr("rqPosition");//记忆已经有一只放在热区上
                        batteryService.Mdata.batteryredstartx = parseInt($("#hhjbatteryRed").css("left")) + 10;
                        batteryService.Mdata.batteryredstarty = parseInt($("#hhjbatteryRed").css("top")) + 5;
                        batteryService.Mdata.batteryredradianx = parseInt($("#hhjbatteryRed").css("left")) - 90;
                        batteryService.Mdata.batteryredradiany = parseInt($("#hhjbatteryRed").css("top")) - 90;
                        batteryService.Mdata.batteryredstopx = parseInt($("#mask-battery").css("left")) + 114;
                        batteryService.Mdata.batteryredstopy = parseInt($("#mask-battery").css("top")) + 298;
                        batteryService.Mdata.svgRecoverStatus = 0;
                        batteryService.Mdata.w_battery_redHtml = $(this).attr("h_href");
                        batteryService.Mdata.batteryredPosition = $(this).attr("wybredPosition");
                       // console.log("%c 红表笔的触发值----------" + batteryService.Mint.In1MultiLogic_x_Red_x_x, "color: #cc0000");
                        $("#path_Red").attr("d", "M" + batteryService.Mdata.batteryredstartx + " " + batteryService.Mdata.batteryredstarty + " C" + batteryService.Mdata.batteryredstartx + " " + batteryService.Mdata.batteryredstarty + " " + batteryService.Mdata.batteryredradianx + " " + batteryService.Mdata.batteryredradiany + " " + batteryService.Mdata.batteryredstopx + " " + batteryService.Mdata.batteryredstopy);
                        if(batteryService.Mdata.batteryblackPosition!=null){
                         	recordHistory($(this).attr("rqPosition"));
    	                }else{}
    	                }
                    if (ui.draggable[0].id == "hhjbatteryBlack_hotspot" && batteryService.Mdata.Radrepetition != $(this).attr("rqPosition")) {
                        $("#path_black").css("stroke", "#656261");
                        $("#hhjbatteryBlack").css("top", "" + ($(this).attr("h_x") - 234) + "px");
                        $("#hhjbatteryBlack").css("left", "" + (parseInt($(this).attr("h_y")) + 5) + "px");
                        $("#hhjbatteryBlack_hotspot").css("top", "" + ($(this).attr("h_x") - 17) + "px");
                        $("#hhjbatteryBlack_hotspot").css("left", "" + (parseInt($(this).attr("h_y")) + 5) + "px");
                        batteryService.Mdata.battery_black = 0;
                        batteryService.Mdata.Blackrepetition = $(this).attr("rqPosition");//记忆已经有一只放在热区上
                        batteryService.Mdata.batteryblackstartx = parseInt($("#hhjbatteryBlack").css("left")) + 5;
                        batteryService.Mdata.batteryblackstarty = parseInt($("#hhjbatteryBlack").css("top")) + 5;
                        batteryService.Mdata.batteryblackradianx = parseInt($("#hhjbatteryBlack").css("left")) + 90;
                        batteryService.Mdata.batteryblackradiany = parseInt($("#hhjbatteryBlack").css("top")) - 90;
                        batteryService.Mdata.batteryblackstopx = parseInt($("#mask-battery").css("left")) + 90;
                        batteryService.Mdata.batteryblackstopy = parseInt($("#mask-battery").css("top")) + 300;
                        batteryService.Mdata.svgRecoverStatus = 0;
                        batteryService.Mint.In1MultiLogic_x_Black_x_x = $(this).attr("rqPosition");
                        batteryService.Mdata.w_battery_blackHtml = $(this).attr("h_href");
                        batteryService.Mdata.batteryblackPosition = $(this).attr("wybblackPosition");
                       // console.info(" 黑表笔的触发值----------" + batteryService.Mint.In1MultiLogic_x_Black_x_x);
                        $("#path_black").attr("d", "M" + batteryService.Mdata.batteryblackstartx + " " + batteryService.Mdata.batteryblackstarty + " C" + batteryService.Mdata.batteryblackstartx + " " + batteryService.Mdata.batteryblackstarty + " " + batteryService.Mdata.batteryblackradianx + " " + batteryService.Mdata.batteryblackradiany + " " + batteryService.Mdata.batteryblackstopx + " " + batteryService.Mdata.batteryblackstopy);
                    };
                }
            });
        },//刷新热区
        
        batteryblackRecover : function () {
        batteryService.Mdata.w_battery_blackHtml = null;
        var topInt = parseInt($("#mask-battery").css("top").replace("px", "")),
            leftInt = parseInt($("#mask-battery").css("left").replace("px", "")),
            toppoint = topInt - 80,
            leftpoint = leftInt - 290;
        $("#path_black").css("stroke", "#656261");
        $("#hhjbatteryBlack").css("top", "" + (toppoint + 97) + "px");
        $("#hhjbatteryBlack").css("left", "" + (leftpoint + 272) + "px");
        $("#hhjbatteryBlack_hotspot").css("top", "" + (toppoint + 315) + "px");
        $("#hhjbatteryBlack_hotspot").css("left", "" + (leftpoint + 272) + "px");

        batteryService.Mdata.Param_blackx = leftpoint + 282;
        batteryService.Mdata.Param_blacky = toppoint + 100;
        batteryService.Mdata.Param_blackcx = leftpoint + 302;
        batteryService.Mdata.Param_blackcy = toppoint + 37;
        batteryService.Mdata.Param_blackpx = leftpoint + 376;
        batteryService.Mdata.Param_blackpy = toppoint + 375;
           batteryService.Mdata.battery_black = 1;
        batteryService.Mdata.batteryblackstartx = batteryService.Mdata.Param_blackx;
        batteryService.Mdata.batteryblackstarty = batteryService.Mdata.Param_blacky;
        batteryService.Mdata.batteryblackradianx = batteryService.Mdata.Param_blackcx;
        batteryService.Mdata.batteryblackradiany = batteryService.Mdata.Param_blackcy;
        batteryService.Mdata.batteryblackstopx = batteryService.Mdata.Param_blackpx;
        batteryService.Mdata.batteryblackstopy = batteryService.Mdata.Param_blackpy;
        batteryService.Mdata.Param_blackstas = 0;
        batteryService.Mdata.Param_stasds = 0;
        batteryService.Mdata.hlq_batteryBlackLine = true;
        batteryService.Mint.In1MultiLogic_x_Black_x_x = "0";

        batteryService.Mdata.Blackrepetition = 0;
       // console.info("恢复的黑表笔的触发值----------" + batteryService.Mint.In1MultiLogic_x_Black_x_x);
        $("#path_black").attr("d", "M" + batteryService.Mdata.Param_blackx + " " + batteryService.Mdata.Param_blacky + " C" + batteryService.Mdata.Param_blackx + " " + batteryService.Mdata.Param_blacky + " " + batteryService.Mdata.Param_blackcx + " " + batteryService.Mdata.Param_blackcy + " " + batteryService.Mdata.Param_blackpx + " " + batteryService.Mdata.Param_blackpy);

        },//黑表笔的恢复初位置
            batteryredRecover : function () {
            batteryService.Mdata.w_battery_redHtml = null;
            var topInt = parseInt($("#mask-battery").css("top").replace("px", "")),
                leftInt = parseInt($("#mask-battery").css("left").replace("px", "")),
                toppoint = topInt - 80,
                leftpoint = leftInt - 290;
            $("#hhjbatteryRed").css("top", "" + (toppoint + 97) + "px");
            $("#hhjbatteryRed").css("left", "" + (leftpoint + 428) + "px");

            $("#hhjbatteryRed_hotspot").css("top", "" + (toppoint + 311) + "px");
            $("#hhjbatteryRed_hotspot").css("left", "" + (leftpoint + 431) + "px");

            batteryService.Mdata.Param_redx = leftpoint + 440;
            batteryService.Mdata.Param_redy = toppoint + 100;
            batteryService.Mdata.Param_redcx = leftpoint + 420;
            batteryService.Mdata.Param_redcy = toppoint + 37;
            batteryService.Mdata.Param_redpx = leftpoint + 403;
            batteryService.Mdata.Param_redpy = toppoint + 375;

            batteryService.Mdata.battery_red = 1;
            $("#path_Red").css("stroke", "#db3040");
            batteryService.Mint.In1MultiLogic_x_Red_x_x = "0";

            batteryService.Mdata.Radrepetition = 0;
            batteryService.Mdata.batteryredstartx = batteryService.Mdata.Param_redx;
            batteryService.Mdata.batteryredstarty = batteryService.Mdata.Param_redy;
            batteryService.Mdata.batteryredradianx = batteryService.Mdata.Param_redcx;
            batteryService.Mdata.batteryredradiany = batteryService.Mdata.Param_redcy;
            batteryService.Mdata.batteryredstopx = batteryService.Mdata.Param_redpx;
            batteryService.Mdata.batteryredstopy = batteryService.Mdata.Param_redpy;
            batteryService.Mdata.hlq_batteryBlackLine = true;
            /* console.log(Param_stasds);*/
            batteryService.Mdata.Param_redstas = 0;
            batteryService.Mdata.Param_stasds = 0;
           // console.log("%c 恢复的红表笔的触发值----------" + batteryService.Mint.In1MultiLogic_x_Red_x_x, "color: #cc0000");
            $("#path_Red").attr("d", "M" + batteryService.Mdata.Param_redx + " " + batteryService.Mdata.Param_redy + " C" + batteryService.Mdata.Param_redx + " " + batteryService.Mdata.Param_redy + " " + batteryService.Mdata.Param_redcx + " " + batteryService.Mdata.Param_redcy + " " + batteryService.Mdata.Param_redpx + " " + batteryService.Mdata.Param_redpy);
        },//红表笔的恢复初位置
        rtnMultimeterPosition : function (num) {
        if (batteryService.Mdata.batteryredPosition == num) {
            batteryService.Mdata.batteryredRecover();
        }
        if (batteryService.Mdata.batteryblackPosition == num) {
            batteryService.Mdata.batteryblackRecover();
        }
    },//判断红黑表笔是否在控件上，是否要回到热区上
        closebattery : function () {
        //具体注释见js/angularJs/Service.js
        if($("#audio3").length>0){
            $("#audio3")[0].pause();
        }

        pages41=1;
        $(".battery-top").html("");
        $(".battery-topUnit").html("");
        $(".battery-bottom").css("transform","rotate(0deg)");
        batteryService.Mdata.batteryStatus = false;
        batteryService.Mdata.battery_drag = '0';


    batteryService.Mint.In1MultiLogic_x_Off_x_x = "1";
        batteryService.Mint.In1MultiLogic_x_ACVlt_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_DCVlt_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_DCmVlt_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_Pass2Ohm_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_hFE_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_Amp_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_mAmp_x_x = "0";
        batteryService.Mint.In1MultiLogic_x_mirAmp_x_x = "0";
        batteryService.Mdata.batteryScreenStatus = false,
            batteryService.Mdata.batteryScreenUnit = "";

            
        batteryService.Mdata.w_battery_redHtml = null;
        batteryService.Mdata.w_battery_blackHtml = null;
        batteryService.Mdata.SvgStatus = false;
        batteryService.Mdata.battery_red = '0';
        batteryService.Mdata.battery_black = '0';

        batteryService.Mdata.wanyongbiao = '0';
        batteryService.Mdata.svgRecoverStatus = '1';
        batteryService.Mdata.batteryblackPosition = null;
        batteryService.Mdata.batteryredPosition = null;
        batteryService.Mdata.Radrepetition = '0';
        batteryService.Mdata.Blackrepetition = '0';
        batteryService.Mdata.battery_red = '1';
        batteryService.Mdata.battery_black = '1';

        batteryService.Mdata.batteryredstartx = batteryService.Mdata.Param_redx = '440';//红色表线起始x坐标
        batteryService.Mdata.batteryredstarty = batteryService.Mdata.Param_redy = '100';//红色表线起始y坐标
        batteryService.Mdata.batteryredradianx = batteryService.Mdata.Param_redcx = '420';//红色表线曲线拐x坐标
        batteryService.Mdata.batteryredradiany = batteryService.Mdata.Param_redcy = '37';//红色表线曲线拐y坐标
        batteryService.Mdata.batteryredstopx = batteryService.Mdata.Param_redpx = '403';//红色表线曲线结束x坐标
        batteryService.Mdata.batteryredstopy = batteryService.Mdata.Param_redpy = '375';//红色表线曲线结束x坐标

        batteryService.Mdata.batteryblackstartx = batteryService.Mdata.Param_blackx = '282';
        batteryService.Mdata.batteryblackstarty = batteryService.Mdata.Param_blacky = '100';
        batteryService.Mdata.batteryblackradianx = batteryService.Mdata.Param_blackcx = '302';
        batteryService.Mdata.batteryblackradiany = batteryService.Mdata.Param_blackcy = '37';
        batteryService.Mdata.batteryblackstopx = batteryService.Mdata.Param_blackpx = '376';
        batteryService.Mdata.batteryblackstopy = batteryService.Mdata.Param_blackpy = '375';
        $("#mask-battery").css("top", "80px");
        $("#mask-battery").css("left", "290px");
        $("#hhjbatteryRed").css("top", "97px");
        $("#hhjbatteryRed").css("left", "428px");
        $("#hhjbatteryBlack").css("top", "97px");
        $("#hhjbatteryBlack").css("left", "272px");
        $("#hhjbatteryRed_hotspot").css("top", "311px");
        $("#hhjbatteryRed_hotspot").css("left", "431px");
        $("#hhjbatteryBlack_hotspot").css("top", "315px");
        $("#hhjbatteryBlack_hotspot").css("left", "272px");
        $("#path_Red").attr("d", "M" + batteryService.Mdata.batteryredstartx + " " + batteryService.Mdata.batteryredstarty + " C" + batteryService.Mdata.batteryredstartx + " " + batteryService.Mdata.batteryredstarty + " " + batteryService.Mdata.batteryredradianx + " " + batteryService.Mdata.batteryredradiany + " " + batteryService.Mdata.batteryredstopx + " " + batteryService.Mdata.batteryredstopy);
        $("#path_black").attr("d", "M" + batteryService.Mdata.batteryblackstartx + " " + batteryService.Mdata.batteryblackstarty + " C" + batteryService.Mdata.batteryblackstartx + " " + batteryService.Mdata.batteryblackstarty + " " + batteryService.Mdata.batteryblackradianx + " " + batteryService.Mdata.batteryblackradiany + " " + batteryService.Mdata.batteryblackstopx + " " + batteryService.Mdata.batteryblackstopy);

        //去除右侧工具栏的触发状态
        $(".right_battery").parent().removeClass("active");
        //隐藏热区
        $("a").addClass("transparent");
    },

        batteryStatus: false,//万用表的表身显示和隐藏
        batteryScreenStatus: false,//万用表的显示屏显示和隐藏
        batteryScreenUnit: '',//万用表的显示屏中的单位是什么
        SvgStatus: false,//万用表红表线和红表笔显示和隐藏
        SvgRedStatus: true,//万用表红表线和红表笔显示和隐藏
        SvgBlackStatus: true,//万用表黑表线和黑表笔显示和隐藏
        battery_drag:0,//万用表是否拖动了
        battery_body: '1',//万用表表身是否能拖动，1代表能，0代表不能
        battery_red: '1',//万用表红表笔是否能拖动，1代表能，0代表不能
        battery_black: '1',//万用表黑表笔是否能拖动，1代表能，0代表不能
        svgRecoverStatus: '1',//万用表的表针时候需要恢复回原处，1代表用，0为不用
        batteryblackPosition: null,//存储万用表黑色表笔放在那个控件上
        batteryredPosition: null,//存储万用表黑色表笔放在那个控件上
        Radrepetition: '0',//存储万用表黑色表笔放在那个热区上
        Blackrepetition: '0',//存储万用表黑色表笔放在那个热区上
        w_battery_redHtml: null,//万用表红表笔的那个页面
        w_battery_blackHtml:null,//万用表红表笔的那个页面
        Param_redx: '440',//红色表线起始x坐标\红色表线曲线起始x坐标
        Param_redy: '100',//红色表线起始y坐标\红色表线曲线起始y坐标
        Param_redcx: '420',//红色表线曲线拐x坐标
        Param_redcy: '37',//红色表线曲线拐y坐标
        Param_redpx: '403',//红色表线曲线结束x坐标
        Param_redpy: '375',//红色表线曲线结束x坐标

        Param_blackx: '282',//黑色表线起始x坐标\黑色表线曲线起始x坐标
        Param_blacky: '100',//黑色表线起始y坐标\黑色表线曲线起始y坐标
        Param_blackcx: '302',//黑色表线曲线拐x坐标
        Param_blackcy: '37',//黑色表线曲线拐y坐标
        Param_blackpx: '376',//黑色表线曲线结束x坐标
        Param_blackpy: '375',//黑色表线曲线结束x坐标
        batteryredstartx: '440',//红色表线起始x坐标\红色表线曲线起始x坐标的恢复值
        batteryredstarty: '100',//红色表线起始y坐标\红色表线曲线起始y坐标的恢复值
        batteryredradianx: '420',//红色表线曲线拐x坐标的恢复值
        batteryredradiany: '37',//红色表线曲线拐y坐标的恢复值
        batteryredstopx: '403',//红色表线曲线结束x坐标的恢复值
        batteryredstopy: '375',//红色表线曲线结束x坐标的恢复值

        batteryblackstartx: '282',//黑色表线起始x坐标\黑色表线曲线起始x坐标的恢复值
        batteryblackstarty: '100',//黑色表线起始y坐标\黑色表线曲线起始y坐标的恢复值
        batteryblackradianx: '302',//黑色表线曲线拐x坐标的恢复值
        batteryblackradiany: '37',//黑色表线曲线拐y坐标的恢复值
        batteryblackstopx: '376',//黑色表线曲线结束x坐标的恢复值
        batteryblackstopy: '375'//黑色表线曲线结束x坐标的恢复值

    };
    batteryService.Mint = {
        In1MultiLogic_x_Off_x_x: '1',
        In1MultiLogic_x_ACVlt_x_x: '0',
        In1MultiLogic_x_DCVlt_x_x: '0',
        In1MultiLogic_x_DCmVlt_x_x: '0',
        In1MultiLogic_x_Pass2Ohm_x_x: '0',//当时电阻挡时该值为1
        In1MultiLogic_x_hFE_x_x: '0',
        In1MultiLogic_x_Amp_x_x: '0',
        In1MultiLogic_x_mAmp_x_x: '0',
        In1MultiLogic_x_mirAmp_x_x: '0',
        In1MultiLogic_x_Hold_x_x: '0',
        In1MultiLogic_x_VltRP_x_x: '1',
        In1MultiLogic_x_AmpMea_x_x: '0',
        In1MultiLogic_x_mirAmA_x_x: '0',
        In1MultiLogic_x_COM_x_x: '1',
        In1MultiLogic_x_Power_x_x: '1',
        In1MultiLogic_x_Red_x_x: '0',
        In1MultiLogic_x_Black_x_x: '0'

    };
    batteryService.Mout = {
        Out1MultiLogic_x_ToScreen_x_x: '0'
    }

    return batteryService;
})
