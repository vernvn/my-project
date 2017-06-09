/**
 * @createDate   2015-08-4 下午05:28:38
 * @author       hao liqiang
 * @email        lq.hao@xiaochejiang.com
 * @version      1.0
 */

multimeterModule.service('multimeterService', function () {
    redPenStop = 0;blackPenStop = 0;
    var multimeterService ={};
    multimeterService.Mdata = multimeterService.Mdata || {};//万用表中自己的参数
    multimeterService.Mint = multimeterService.Mint || {};//万用表中向仿真模型传输的参数
    multimeterService.Mout = multimeterService.Mout || {};//万用表中从仿真模型获取的参数
    multimeterService.Mdata ={
        multimeterOhm :function(){
            if(pageNum==='033'){
                if((multimeterService.Mdata.Radrepetition === '1' && multimeterService.Mdata.Blackrepetition === '3') || (multimeterService.Mdata.Radrepetition === '3' && multimeterService.Mdata.Blackrepetition === '1')){
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('0.02');
                        Kcomplete = true;
                        TestgoPage();
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                }else if( (multimeterService.Mdata.Radrepetition === '1' && multimeterService.Mdata.Blackrepetition === '2') ||  (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '1')){
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('8.04');
                        landKcomplete = true;
                        TestgoPage();
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                        landVcomplete = true;
                        TestgoPage();
                    }
                } else if((multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '3') || (multimeterService.Mdata.Radrepetition === '3' && multimeterService.Mdata.Blackrepetition === '2')){
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('8.06');
                        landKcomplete = true;
                        TestgoPage();
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        landVcomplete = true;
                        $("#multimeterShowData").text('0');
                        TestgoPage();
                    }
                }
            }
            if(pageNum==='036'){
                if((multimeterService.Mdata.Radrepetition === '4' && multimeterService.Mdata.Blackrepetition === '5')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('0.01');
                        // NextDarkOrLignt(1);
                        // Kcomplete = true;
                        // TestgoPage();
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                    $('#hhjmultimeterRed').css('z-index',11);
                    $('#hhjmultimeterBlack').css('z-index',11);
                } else if((multimeterService.Mdata.Radrepetition === '5' && multimeterService.Mdata.Blackrepetition === '4')){
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('0.01');
                        // NextDarkOrLignt(1);
                        // Kcomplete = true;
                        // TestgoPage();
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                    $('#hhjmultimeterRed').css('z-index',11);
                    $('#hhjmultimeterBlack').css('z-index',10);
                }
                else if((multimeterService.Mdata.Radrepetition === '4' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '4')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "";
                        $("#multimeterShowData").text('1.');
                        // landKcomplete = true;
                        // TestgoPage();
                        NextDarkOrLignt(1);
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                        // landVcomplete = true;
                        // TestgoPage();
                    }
                } else if((multimeterService.Mdata.Radrepetition === '5' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '5')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "";
                        $("#multimeterShowData").text('1.');
                        // landKcomplete = true;
                        // TestgoPage();
                        NextDarkOrLignt(1);
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                        // landVcomplete = true;
                        // TestgoPage();
                    }
                }
            }
            if(pageNum==='038'){
                if((multimeterService.Mdata.Radrepetition === '7' && multimeterService.Mdata.Blackrepetition === '8') || (multimeterService.Mdata.Radrepetition === '8' && multimeterService.Mdata.Blackrepetition === '7')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('0.01');
                        // NextDarkOrLignt(1);
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                } else if((multimeterService.Mdata.Radrepetition === '7' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '7')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "";
                        $("#multimeterShowData").text('1.');
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                } else if((multimeterService.Mdata.Radrepetition === '8' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '8')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "";
                        $("#multimeterShowData").text('1.');
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                }else if((multimeterService.Mdata.Radrepetition === '9' && multimeterService.Mdata.Blackrepetition === '10') || (multimeterService.Mdata.Radrepetition === '10' && multimeterService.Mdata.Blackrepetition === '9')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('0.01');
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                }else if((multimeterService.Mdata.Radrepetition === '9' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '9') || (multimeterService.Mdata.Radrepetition === '10' && multimeterService.Mdata.Blackrepetition === '2') || (multimeterService.Mdata.Radrepetition === '2' && multimeterService.Mdata.Blackrepetition === '10')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "Ω";
                        $("#multimeterShowData").text('8.04');
                        NextDarkOrLignt(1);
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                }else if((multimeterService.Mdata.Radrepetition === '7' && multimeterService.Mdata.Blackrepetition === '9') || (multimeterService.Mdata.Radrepetition === '9' && multimeterService.Mdata.Blackrepetition === '7') || (multimeterService.Mdata.Radrepetition === '8' && multimeterService.Mdata.Blackrepetition === '10') || (multimeterService.Mdata.Radrepetition === '10' && multimeterService.Mdata.Blackrepetition === '8')) {
                    if(multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "";
                        $("#multimeterShowData").text('1.');
                    }else if(multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x === '1'){
                        multimeterService.Mdata.multimeterScreenUnit = "V";
                        $("#multimeterShowData").text('0');
                    }
                }
            }
        },
        judgeS:function(href){
        if(multimeterService.Mdata.multimeterStatus){
            if(multimeterService.Mdata.w_multimeter_blackHtml==href||multimeterService.Mdata.w_multimeter_blackHtml==null){
                multimeterService.Mdata.SvgBlackStatus = true;
            }else{
                multimeterService.Mdata.SvgBlackStatus = false;
            }
            if(multimeterService.Mdata.w_multimeter_redHtml==href||multimeterService.Mdata.w_multimeter_redHtml==null){

                multimeterService.Mdata.SvgRedStatus = true;
            }else{
                multimeterService.Mdata.SvgRedStatus = false;
            }
        }

    },
        freshHontspot :function () {
        var _this = this;
        $(".multimeter-drop").find('a').droppable({
            accept: "#hhjmultimeterBlack_hotspot,#hhjmultimeterRed_hotspot",
            tolerance: "intersect",
            greedy: true,

            over: function (event, ui) {

                if (ui.draggable[0].id == "hhjmultimeterBlack_hotspot") {
                    $("#path_black").css("stroke", "#f69c19");
                }
                if (ui.draggable[0].id == "hhjmultimeterRed_hotspot") {
                    $("#path_Red").css("stroke", "#f69c19");
                }

            },
            out: function (event, ui) {
                if (ui.draggable[0].id == "hhjmultimeterRed_hotspot") {
                    $("#path_Red").css("stroke", "#db3040");
                    return false;
                }
                if (ui.draggable[0].id == "hhjmultimeterBlack_hotspot") {
                    $("#path_black").css("stroke", "#656261");
                    return false;
                }


            },
            drop: function (event, ui) {
               // console.log("----------------------------------------------------------------------------");
               

                if (ui.draggable[0].id == "hhjmultimeterRed_hotspot" && multimeterService.Mdata.Blackrepetition != $(this).attr("rqPosition")) {
                    $("#path_Red").css("stroke", "#db3040");
                    $("#hhjmultimeterRed").css("top", "" + ($(this).attr("h_x") - 233) + "px");
                    $("#hhjmultimeterRed").css("left", "" + (parseInt($(this).attr("h_y")) + 96) + "px");
                    $("#hhjmultimeterRed_hotspot").css("top", "" + ($(this).attr("h_x")) + "px");
                    $("#hhjmultimeterRed_hotspot").css("left", "" + (parseInt($(this).attr("h_y"))+101) + "px");
                    multimeterService.Mdata.multimeter_red = 0;

                    multimeterService.Mint.In1MultiLogic_x_Red_x_x = $(this).attr("rqPosition");
                    multimeterService.Mdata.Radrepetition = $(this).attr("rqPosition");//记忆已经有一只放在热区上
                    multimeterService.Mdata.multimeterredstartx = parseInt($("#hhjmultimeterRed").css("left")) + 10;
                    multimeterService.Mdata.multimeterredstarty = parseInt($("#hhjmultimeterRed").css("top")) + 5;
                    multimeterService.Mdata.multimeterredradianx = parseInt($("#hhjmultimeterRed").css("left")) - 90;
                    multimeterService.Mdata.multimeterredradiany = parseInt($("#hhjmultimeterRed").css("top")) - 90;
                    multimeterService.Mdata.multimeterredstopx = parseInt($("#mask-multimeter").css("left")) + 114;
                    multimeterService.Mdata.multimeterredstopy = parseInt($("#mask-multimeter").css("top")) + 298;
                    multimeterService.Mdata.svgRecoverStatus = 0;
                    multimeterService.Mdata.w_multimeter_redHtml = $(this).attr("h_href");
                    multimeterService.Mdata.multimeterredPosition = $(this).attr("wybredPosition");
                   // console.log("%c 红表笔的触发值----------" + multimeterService.Mint.In1MultiLogic_x_Red_x_x, "color: #cc0000");
                    $("#path_Red").attr("d", "M" + multimeterService.Mdata.multimeterredstartx + " " + multimeterService.Mdata.multimeterredstarty + " C" + multimeterService.Mdata.multimeterredstartx + " " + multimeterService.Mdata.multimeterredstarty + " " + multimeterService.Mdata.multimeterredradianx + " " + multimeterService.Mdata.multimeterredradiany + " " + multimeterService.Mdata.multimeterredstopx + " " + multimeterService.Mdata.multimeterredstopy);
                    if(multimeterService.Mdata.multimeterblackPosition!=null){
                     	recordHistory($(this).attr("rqPosition"));
	                }else{}
	                }
                if (ui.draggable[0].id == "hhjmultimeterBlack_hotspot" && multimeterService.Mdata.Radrepetition != $(this).attr("rqPosition")) {
                    $("#path_black").css("stroke", "#656261");
                    $("#hhjmultimeterBlack").css("top", "" + ($(this).attr("h_x") - 233) + "px");
                    $("#hhjmultimeterBlack").css("left", "" + (parseInt($(this).attr("h_y")) + 96) + "px");
                    $("#hhjmultimeterBlack_hotspot").css("top", "" + ($(this).attr("h_x")) + "px");
                    $("#hhjmultimeterBlack_hotspot").css("left", "" + (parseInt($(this).attr("h_y"))+ 101) + "px");
                    multimeterService.Mdata.multimeter_black = 0;
                    multimeterService.Mdata.Blackrepetition = $(this).attr("rqPosition");//记忆已经有一只放在热区上
                    multimeterService.Mdata.multimeterblackstartx = parseInt($("#hhjmultimeterBlack").css("left")) + 5;
                    multimeterService.Mdata.multimeterblackstarty = parseInt($("#hhjmultimeterBlack").css("top")) + 5;
                    multimeterService.Mdata.multimeterblackradianx = parseInt($("#hhjmultimeterBlack").css("left")) + 90;
                    multimeterService.Mdata.multimeterblackradiany = parseInt($("#hhjmultimeterBlack").css("top")) - 90;
                    multimeterService.Mdata.multimeterblackstopx = parseInt($("#mask-multimeter").css("left")) + 90;
                    multimeterService.Mdata.multimeterblackstopy = parseInt($("#mask-multimeter").css("top")) + 300;
                    multimeterService.Mdata.svgRecoverStatus = 0;
                    multimeterService.Mint.In1MultiLogic_x_Black_x_x = $(this).attr("rqPosition");
                    multimeterService.Mdata.w_multimeter_blackHtml = $(this).attr("h_href");
                    multimeterService.Mdata.multimeterblackPosition = $(this).attr("wybblackPosition");
                   // console.info(" 黑表笔的触发值----------" + multimeterService.Mint.In1MultiLogic_x_Black_x_x);
                    $("#path_black").attr("d", "M" + multimeterService.Mdata.multimeterblackstartx + " " + multimeterService.Mdata.multimeterblackstarty + " C" + multimeterService.Mdata.multimeterblackstartx + " " + multimeterService.Mdata.multimeterblackstarty + " " + multimeterService.Mdata.multimeterblackradianx + " " + multimeterService.Mdata.multimeterblackradiany + " " + multimeterService.Mdata.multimeterblackstopx + " " + multimeterService.Mdata.multimeterblackstopy);

                };
                multimeterService.Mdata.multimeterOhm();
            }
        });

    },//刷新热区
        multimeterblackRecover : function () {
        multimeterService.Mdata.w_multimeter_blackHtml = null;
        var topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
            toppoint = topInt - 80,
            leftpoint = leftInt - 290;
        $("#path_black").css("stroke", "#656261");
        $("#hhjmultimeterBlack").css("top", "" + (toppoint + 97) + "px");
        $("#hhjmultimeterBlack").css("left", "" + (leftpoint + 272) + "px");
        $("#hhjmultimeterBlack_hotspot").css("top", "" + (toppoint + 330) + "px");
        $("#hhjmultimeterBlack_hotspot").css("left", "" + (leftpoint + 278) + "px");

        multimeterService.Mdata.Param_blackx = leftpoint + 282;
        multimeterService.Mdata.Param_blacky = toppoint + 100;
        multimeterService.Mdata.Param_blackcx = leftpoint + 302;
        multimeterService.Mdata.Param_blackcy = toppoint + 37;
        multimeterService.Mdata.Param_blackpx = leftpoint + 376;
        multimeterService.Mdata.Param_blackpy = toppoint + 375;
           multimeterService.Mdata.multimeter_black = 1;
        multimeterService.Mdata.multimeterblackstartx = multimeterService.Mdata.Param_blackx;
        multimeterService.Mdata.multimeterblackstarty = multimeterService.Mdata.Param_blacky;
        multimeterService.Mdata.multimeterblackradianx = multimeterService.Mdata.Param_blackcx;
        multimeterService.Mdata.multimeterblackradiany = multimeterService.Mdata.Param_blackcy;
        multimeterService.Mdata.multimeterblackstopx = multimeterService.Mdata.Param_blackpx;
        multimeterService.Mdata.multimeterblackstopy = multimeterService.Mdata.Param_blackpy;
        multimeterService.Mdata.Param_blackstas = 0;
        multimeterService.Mdata.Param_stasds = 0;
        multimeterService.Mdata.hlq_multimeterBlackLine = true;
        multimeterService.Mint.In1MultiLogic_x_Black_x_x = "0";

        multimeterService.Mdata.Blackrepetition = 0;
       // console.info("恢复的黑表笔的触发值----------" + multimeterService.Mint.In1MultiLogic_x_Black_x_x);
        $("#path_black").attr("d", "M" + multimeterService.Mdata.Param_blackx + " " + multimeterService.Mdata.Param_blacky + " C" + multimeterService.Mdata.Param_blackx + " " + multimeterService.Mdata.Param_blacky + " " + multimeterService.Mdata.Param_blackcx + " " + multimeterService.Mdata.Param_blackcy + " " + multimeterService.Mdata.Param_blackpx + " " + multimeterService.Mdata.Param_blackpy);

    },//黑表笔的恢复初位置
        multimeterredRecover : function () {
        multimeterService.Mdata.w_multimeter_redHtml = null;
        var topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
            toppoint = topInt - 80,
            leftpoint = leftInt - 290;
        $("#hhjmultimeterRed").css("top", "" + (toppoint + 97) + "px");
        $("#hhjmultimeterRed").css("left", "" + (leftpoint + 428) + "px");

        $("#hhjmultimeterRed_hotspot").css("top", "" + (toppoint + 328) + "px");
        $("#hhjmultimeterRed_hotspot").css("left", "" + (leftpoint + 434) + "px");

        multimeterService.Mdata.Param_redx = leftpoint + 440;
        multimeterService.Mdata.Param_redy = toppoint + 100;
        multimeterService.Mdata.Param_redcx = leftpoint + 420;
        multimeterService.Mdata.Param_redcy = toppoint + 37;
        multimeterService.Mdata.Param_redpx = leftpoint + 403;
        multimeterService.Mdata.Param_redpy = toppoint + 375;

        multimeterService.Mdata.multimeter_red = 1;
        $("#path_Red").css("stroke", "#db3040");
        multimeterService.Mint.In1MultiLogic_x_Red_x_x = "0";

        multimeterService.Mdata.Radrepetition = 0;
        multimeterService.Mdata.multimeterredstartx = multimeterService.Mdata.Param_redx;
        multimeterService.Mdata.multimeterredstarty = multimeterService.Mdata.Param_redy;
        multimeterService.Mdata.multimeterredradianx = multimeterService.Mdata.Param_redcx;
        multimeterService.Mdata.multimeterredradiany = multimeterService.Mdata.Param_redcy;
        multimeterService.Mdata.multimeterredstopx = multimeterService.Mdata.Param_redpx;
        multimeterService.Mdata.multimeterredstopy = multimeterService.Mdata.Param_redpy;
        multimeterService.Mdata.hlq_multimeterBlackLine = true;
        /* console.log(Param_stasds);*/
        multimeterService.Mdata.Param_redstas = 0;
        multimeterService.Mdata.Param_stasds = 0;
       // console.log("%c 恢复的红表笔的触发值----------" + multimeterService.Mint.In1MultiLogic_x_Red_x_x, "color: #cc0000");
        $("#path_Red").attr("d", "M" + multimeterService.Mdata.Param_redx + " " + multimeterService.Mdata.Param_redy + " C" + multimeterService.Mdata.Param_redx + " " + multimeterService.Mdata.Param_redy + " " + multimeterService.Mdata.Param_redcx + " " + multimeterService.Mdata.Param_redcy + " " + multimeterService.Mdata.Param_redpx + " " + multimeterService.Mdata.Param_redpy);
    },//红表笔的恢复初位置
        rtnMultimeterPosition : function (num) {
        if (multimeterService.Mdata.multimeterredPosition == num) {
            multimeterService.Mdata.multimeterredRecover();
        }
        if (multimeterService.Mdata.multimeterblackPosition == num) {
            multimeterService.Mdata.multimeterblackRecover();
        }
    },//判断红黑表笔是否在控件上，是否要回到热区上
        closemultimeter : function () {
        //具体注释见js/angularJs/Service.js
        if($("#audio3").length>0){
            $("#audio3")[0].pause();
        }

        $(".multimeter-top").html("");
        $(".multimeter-topUnit").html("");
        $(".multimeter-bottom").css("transform","rotate(0deg)");
        multimeterService.Mdata.multimeterStatus = false;
        multimeterService.Mdata.multimeter_drag = '0';


 multimeterService.Mint.In1MultiLogic_x_Off_x_x = "1";
        multimeterService.Mint.In1MultiLogic_x_ACVlt_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_DCVlt_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_DCmVlt_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_hFE_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_Amp_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_mAmp_x_x = "0";
        multimeterService.Mint.In1MultiLogic_x_mirAmp_x_x = "0";
        multimeterService.Mdata.multimeterScreenStatus = false,
            multimeterService.Mdata.multimeterScreenUnit = "";

            
        multimeterService.Mdata.w_multimeter_redHtml = null;
        multimeterService.Mdata.w_multimeter_blackHtml = null;
        multimeterService.Mdata.SvgStatus = false;
        multimeterService.Mdata.multimeter_red = '0';
        multimeterService.Mdata.multimeter_black = '0';

        multimeterService.Mdata.wanyongbiao = '0';
        multimeterService.Mdata.svgRecoverStatus = '1';
        multimeterService.Mdata.multimeterblackPosition = null;
        multimeterService.Mdata.multimeterredPosition = null;
        multimeterPen('0', '0' , '0');
        multimeterService.Mdata.Radrepetition = '0';
        multimeterService.Mdata.Blackrepetition = '0';
        multimeterService.Mdata.multimeter_red = '1';
        multimeterService.Mdata.multimeter_black = '1';

        multimeterService.Mdata.multimeterredstartx = multimeterService.Mdata.Param_redx = '690';//红色表线起始x坐标
        multimeterService.Mdata.multimeterredstarty = multimeterService.Mdata.Param_redy = '100';//红色表线起始y坐标
        multimeterService.Mdata.multimeterredradianx = multimeterService.Mdata.Param_redcx = '670';//红色表线曲线拐x坐标
        multimeterService.Mdata.multimeterredradiany = multimeterService.Mdata.Param_redcy = '37';//红色表线曲线拐y坐标
        multimeterService.Mdata.multimeterredstopx = multimeterService.Mdata.Param_redpx = '653';//红色表线曲线结束x坐标
        multimeterService.Mdata.multimeterredstopy = multimeterService.Mdata.Param_redpy = '375';//红色表线曲线结束x坐标

        multimeterService.Mdata.multimeterblackstartx = multimeterService.Mdata.Param_blackx = '532';
        multimeterService.Mdata.multimeterblackstarty = multimeterService.Mdata.Param_blacky = '100';
        multimeterService.Mdata.multimeterblackradianx = multimeterService.Mdata.Param_blackcx = '552';
        multimeterService.Mdata.multimeterblackradiany = multimeterService.Mdata.Param_blackcy = '37';
        multimeterService.Mdata.multimeterblackstopx = multimeterService.Mdata.Param_blackpx = '626';
        multimeterService.Mdata.multimeterblackstopy = multimeterService.Mdata.Param_blackpy = '375';
        $("#mask-multimeter").css("top", "80px");
        $("#mask-multimeter").css("left", "540px");
        $("#hhjmultimeterRed").css("top", "97px");
        $("#hhjmultimeterRed").css("left", "680px");
        $("#hhjmultimeterBlack").css("top", "97px");
        $("#hhjmultimeterBlack").css("left", "522px");
        $("#hhjmultimeterRed_hotspot").css("top", "328px");
        $("#hhjmultimeterRed_hotspot").css("left", "684px");
        $("#hhjmultimeterBlack_hotspot").css("top", "330px");
        $("#hhjmultimeterBlack_hotspot").css("left", "528px");
        $("#path_Red").attr("d", "M" + multimeterService.Mdata.multimeterredstartx + " " + multimeterService.Mdata.multimeterredstarty + " C" + multimeterService.Mdata.multimeterredstartx + " " + multimeterService.Mdata.multimeterredstarty + " " + multimeterService.Mdata.multimeterredradianx + " " + multimeterService.Mdata.multimeterredradiany + " " + multimeterService.Mdata.multimeterredstopx + " " + multimeterService.Mdata.multimeterredstopy);
        $("#path_black").attr("d", "M" + multimeterService.Mdata.multimeterblackstartx + " " + multimeterService.Mdata.multimeterblackstarty + " C" + multimeterService.Mdata.multimeterblackstartx + " " + multimeterService.Mdata.multimeterblackstarty + " " + multimeterService.Mdata.multimeterblackradianx + " " + multimeterService.Mdata.multimeterblackradiany + " " + multimeterService.Mdata.multimeterblackstopx + " " + multimeterService.Mdata.multimeterblackstopy);

        //去除右侧工具栏的触发状态
        $(".right_multimeter").parent().removeClass("active");
        //隐藏热区
        $("a").addClass("transparent");
    },

        multimeterStatus: false,//万用表的表身显示和隐藏
        multimeterScreenStatus: false,//万用表的显示屏显示和隐藏
        multimeterScreenUnit: '',//万用表的显示屏中的单位是什么
        SvgStatus: false,//万用表红表线和红表笔显示和隐藏
        SvgRedStatus: true,//万用表红表线和红表笔显示和隐藏
        SvgBlackStatus: true,//万用表黑表线和黑表笔显示和隐藏
        multimeter_drag:0,//万用表是否拖动了
        multimeter_body: '1',//万用表表身是否能拖动，1代表能，0代表不能
        multimeter_red: '1',//万用表红表笔是否能拖动，1代表能，0代表不能
        multimeter_black: '1',//万用表黑表笔是否能拖动，1代表能，0代表不能
        svgRecoverStatus: '1',//万用表的表针时候需要恢复回原处，1代表用，0为不用
        multimeterblackPosition: null,//存储万用表黑色表笔放在那个控件上
        multimeterredPosition: null,//存储万用表黑色表笔放在那个控件上
        Radrepetition: '0',//存储万用表黑色表笔放在那个热区上
        Blackrepetition: '0',//存储万用表黑色表笔放在那个热区上
        w_multimeter_redHtml: null,//万用表红表笔的那个页面
        w_multimeter_blackHtml:null,//万用表红表笔的那个页面
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
        multimeterredstartx: '440',//红色表线起始x坐标\红色表线曲线起始x坐标的恢复值
        multimeterredstarty: '100',//红色表线起始y坐标\红色表线曲线起始y坐标的恢复值
        multimeterredradianx: '420',//红色表线曲线拐x坐标的恢复值
        multimeterredradiany: '37',//红色表线曲线拐y坐标的恢复值
        multimeterredstopx: '403',//红色表线曲线结束x坐标的恢复值
        multimeterredstopy: '375',//红色表线曲线结束x坐标的恢复值

        multimeterblackstartx: '282',//黑色表线起始x坐标\黑色表线曲线起始x坐标的恢复值
        multimeterblackstarty: '100',//黑色表线起始y坐标\黑色表线曲线起始y坐标的恢复值
        multimeterblackradianx: '302',//黑色表线曲线拐x坐标的恢复值
        multimeterblackradiany: '37',//黑色表线曲线拐y坐标的恢复值
        multimeterblackstopx: '376',//黑色表线曲线结束x坐标的恢复值
        multimeterblackstopy: '375'//黑色表线曲线结束x坐标的恢复值

    };
    multimeterService.Mint = {
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
        multimeterService.Mout = {
            Out1MultiLogic_x_ToScreen_x_x: '0'
        }

    return multimeterService;
})
