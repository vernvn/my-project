import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication';
//import { hideAHot } from '../main';
declare let $: any,hideAHot:any;
@Injectable()
export class MultimeterService {
    constructor(public communicationService:CommunicationService){}
    //万用表中自己的参数
    Mdata = {
        xingnengStatus : false,
        modelOrself:'model',
        falseconnectStatus : false, //错误弹窗状态
        multimetervlockOron : 'lock', //存放lock或on档数据
        dropsuccessNum : '', //  表笔放在热区位置代表的数值 1正常测试，2短路
        redposition:'',  //红表笔在热区的位置
        blackposition:'', //黑表笔在热区的位置
        multimeterStatus: false,//万用表的表身显示和隐藏
        multimeterScreenStatus: false,//万用表的显示屏显示和隐藏
        multimeterScreenNum: "",//万用表的显示屏数值
        multimeterScreenUnit: '',//万用表的显示屏中的单位是什么
        multimetershowDateUnit : '', // 字体为LED，而欧姆单位显示不见，增加一个单位
        multimeterScreenrightUnit:'',//增加一个单位
        SvgStatus: false,//万用表红表线和红表笔显示和隐藏
        SvgRedStatus: true,//万用表红表线和红表笔显示和隐藏
        SvgBlackStatus: true,//万用表黑表线和黑表笔显示和隐藏
        multimeter_drag: '0',//万用表是否拖动了
        multimeterinsulated : false , //万用表是否在绝缘电阻档位
        multimetervisOrnot : false, //万用表是否在电压档位
        wanyongbiao: '',
        multimeter_body: '1',//万用表表身是否能拖动，1代表能，0代表不能
        multimeter_red: '1',//万用表红表笔是否能拖动，1代表能，0代表不能
        multimeter_black: '1',//万用表黑表笔是否能拖动，1代表能，0代表不能
        svgRecoverStatus: '1',//万用表的表针时候需要恢复回原处，1代表用，0为不用
        multimeterblackPosition: null,//存储万用表黑色表笔放在那个控件上
        multimeterredPosition: null,//存储万用表红色表笔放在那个控件上
        Radrepetition: '0',//存储万用表红色表笔放在那个热区上
        Blackrepetition: '0',//存储万用表黑色表笔放在那个热区上
        w_multimeter_redHtml: null,//万用表红表笔的那个页面
        w_multimeter_blackHtml: null,//万用表红表笔的那个页面
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
        multimeterblackstopy: '375',//黑色表线曲线结束x坐标的恢复值
        communicationService:this.communicationService,
        arrowAnimate1(doOrfalse:boolean){
            if(doOrfalse){
                let arrow = function() {
                    $(".opacitybox").show().stop().animate({
                        "top": "157px"
                    },300,'linear', function () {
                        $(this).animate({
                            "top": "153px"
                        },300,'linear', function () {
                            arrow();
                        });
                    });
                };
                arrow();
            }else{
                $(".opacitybox").stop().hide();
            }
        },
        arrowAnimate2(doOrfalse:boolean){
            if(doOrfalse){
                let arrow = function() {
                    $(".opacitybox2").show().stop().animate({
                        "top": "129px"
                    },300,'linear', function () {
                        $(this).animate({
                            "top": "125px"
                        },300,'linear', function () {
                            arrow();
                        });
                    });
                };
                arrow();
            }else{
                $(".opacitybox2").stop().hide();
            }
        },
        multimeter() {
            //被使用的状态码
            //**multimeterStay = 1;
            //加上触发样式
            $(".right-multimeter").parent().addClass("active");
            $(".test1").css('opacity', 0.5);
            $(".test1").css("z-index", 1)
            $(".test2").css("z-index", 6666)
            $("#mask-svg").removeClass("hide-important");
            $(".multimeter-bottom").css("transform", "rotate(0deg)");
            $(".multimeter-contain").removeClass("hide-important");
            $(".clickcircle").css("opacity", 1);
            //continuevoltageflash(voltageflash);
            $(".buttonflash").addClass("hide-important");
            //显示热区
            $(".circuit-multimeter-hot").removeClass("hide-important");
            //showAHot();
            //记录进度
            //        recordHistory("A008");
            if ($(".test2").css("opacity") == 0.5) {
                $(".temperature-contain").addClass("hide-important");
                $(".test2").css("opacity", 0);
                $(".temperaturehotwrap").addClass("hide-important");
                $(".multimeter-contain").removeClass("hide-important");
            }
            $('.hotareatest').css('zIndex',5);
            this.SvgStatus = true;
            this.multimeterScreenNum = '';
            this.multimeterScreenUnit = "";
            this.multimeterStatus = true;//万用表身显示
            this.SvgRedStatus = true;//万用表红表笔和红表线显示
            this.SvgBlackStatus = true;//万用表黑表笔和黑表线显示
            setTimeout(() => {
                this.multimeterredRecover();
                this.multimeterblackRecover();

                this.freshHontspot();//刷新页面的热区，为表笔接触做准备

                this.dragStart();
            },0)


        },
        dragStart() {
            let _this: any = this;
            //红表笔drag，通过一个小块热区带动红表笔
            $("#hhjmultimeterRed-hotspot").draggable({
                containment: ".multimeter-ceontain", //只能在规定范围
                scroll: false,//不出现滚动条
                iframeFix: true,//不受iframe的影响
                cursor: "move",//拖动的鼠标样式
                drag: function (event) {
                    $("#hhjmultimeterRed").css("top", "" + (parseInt($("#hhjmultimeterRed-hotspot").css("top").replace("px", "")) - 217) + "px");
                    $("#hhjmultimeterRed").css("left", "" + (parseInt($("#hhjmultimeterRed-hotspot").css("left").replace("px", ""))) + "px");
                    var redLeftInt = parseInt($("#hhjmultimeterRed").css("left").replace("px", "")) + 15,
                        redTopInt = parseInt($("#hhjmultimeterRed").css("top").replace("px", "")) + 5,
                        topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")) + 230,
                        leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")) + 110,

                        cl = (redLeftInt - 40),
                        ct = (redTopInt - 80);
                    /* console.log(window.parent.Param_stasds);*/

                    _this.multimeterredstartx = leftInt;
                    _this.multimeterredstarty = topInt;
                    _this.multimeterredradianx = cl;
                    _this.multimeterredradiany = ct;
                    _this.multimeterredstopx = redLeftInt;
                    _this.multimeterredstopy = redTopInt;

                    var redLeftIntt = redLeftInt - 15, redTopIntt = redTopInt + 230;
                    //              $(".clickcircle").css("opacity",1);

                    $("#path_Red").attr("d", "M" + redLeftInt + " " + redTopInt + " C" + redLeftInt + " " + redTopInt + " " + cl + " " + ct + " " + leftInt + " " + topInt);

                },
                stop() {
                    if (_this.svgRecoverStatus == 1) {
                        _this.multimeterredRecover();
                        // console.log(_this.redposition,_this.blackposition)
                        if((_this.redposition==='41' && _this.blackposition==='42') || (_this.redposition==='41' && _this.blackposition==='43') ||
                        (_this.redposition==='42' && _this.blackposition==='41') || (_this.redposition==='43' && _this.blackposition==='41')){
                            _this.dropsuccessNum = '1';
                        }else if((_this.redposition==='42' && _this.blackposition==='43') || (_this.redposition==='43' && _this.blackposition==='42')){
                            _this.dropsuccessNum = '2';
                        }else{
                            _this.dropsuccessNum = '0';
                            // console.log('lee');
                            if(_this.multimeterinsulated){
                                _this.multimeterScreenNum = "----";
                                _this.multimetershowDateUnit = '';
                                _this.multimeterScreenUnit = '---';
                            } 
                        }
                        _this.circleareaAnimate(false);
                        if(_this.multimetervisOrnot){
                            _this.multimeterScreenNum = "0.00";
                        }
                        
                        
                    } else {

                        _this.svgRecoverStatus = 1;
                    }
                    


                    if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                        if (_this.multimeter_black == 0 && _this.multimeter_red == 0) {
                            //                      $(".buttonflash").animate({'opacity':1},250,function(){$(".buttonflash").animate({'opacity':0},250)})
                            $(".buttonflash").css("z-index", 3);
                            $(".clickcircle ").css("z-index", 1);
                            _this.multimeterScreenNum = '1.';
                            _this.multimeterScreenUnit = "";
                        }
                        else {
                            _this.multimeterScreenNum = '1.';
                            _this.multimeterScreenUnit = "";
                        }
                    }

                    //判断是否测量了电阻(两个表针是否都测量了，并且是否打到欧姆档)
                    if ((_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == '1') && (_this.Radrepetition != '0') && (_this.Blackrepetition != '0')) {
                        //创建警告框
                        if ((parseInt(_this.Radrepetition) <= 1000)) {
                            //$rootScope.createResistanceWarn('此功能不能用');
                        }
                    }
                }        //alert("drag:"+multimeter_drag_status+"para_sta:"+Param_stasds+"red_sta:"+Param_redstas+"black_sta:"+Param_blackstas+"body:"+multimeter_body+"red"+multimeter_red+"black"+multimeter_black+"");


            });
            //黑表笔drag，通过一个小块热区带动红表笔
            $("#hhjmultimeterBlack-hotspot").draggable({
                containment: ".multimeter-contain",
                scroll: false,
                iframeFix: true,
                cursor: "move",
                drag: function (event) {

                    $("#hhjmultimeterBlack").css("top", "" + (parseInt($("#hhjmultimeterBlack-hotspot").css("top").replace("px", "")) - 217) + "px");
                    $("#hhjmultimeterBlack").css("left", "" + (parseInt($("#hhjmultimeterBlack-hotspot").css("left").replace("px", ""))) + "px");
                    var redLeftInt = parseInt($("#hhjmultimeterBlack").css("left").replace("px", "")) + 10,
                        redTopInt = parseInt($("#hhjmultimeterBlack").css("top").replace("px", "")) + 10,
                        topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")) + 295,
                        leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")) + 85,
                        cl = (redLeftInt - 40),
                        ct = (redTopInt - 80);
                    //                  $(".clickcircle").css("opacity",1);
                    $("#path_black").attr("d", "M" + redLeftInt + " " + redTopInt + " C" + redLeftInt + " " + redTopInt + " " + cl + " " + ct + " " + leftInt + " " + topInt);

                },

                stop() {
                    if (_this.svgRecoverStatus == 1) {
                        _this.multimeterblackRecover();
                        if((_this.redposition==='41' && _this.blackposition==='42') || (_this.redposition==='41' && _this.blackposition==='43') ||
                        (_this.redposition==='42' && _this.blackposition==='41') || (_this.redposition==='43' && _this.blackposition==='41')){
                            _this.dropsuccessNum = '1';
                        }else if((_this.redposition==='42' && _this.blackposition==='43') || (_this.redposition==='43' && _this.blackposition==='42')){
                            _this.dropsuccessNum = '2';
                        }else{
                            _this.dropsuccessNum = '0';
                            // console.log('leeblack');
                            if(_this.multimeterinsulated){
                                _this.multimeterScreenNum = "----";
                                _this.multimetershowDateUnit = '';
                                _this.multimeterScreenUnit = '---';
                            } 
                        }
                        _this.circleareaAnimate(false);
                        if(_this.multimetervisOrnot){
                            _this.multimeterScreenNum = "0.00";
                        }
                    } else {

                        _this.svgRecoverStatus = 1;
                    }


                    //判断是否测量了电阻(两个表针是否都测量了，并且是否打到欧姆档)
                    if ((_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == '1') && (_this.Radrepetition != '0') && (_this.Blackrepetition != '0')) {
                        //创建警告框
                        if ((parseInt(_this.Radrepetition) <= 1000)) {
                            //$rootScope.createResistanceWarn('此功能不能用');
                        }
                    }
                    if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                        if (_this.multimeter_black == 0 && _this.multimeter_red == 0) {
                            //                      $(".buttonflash").animate({'opacity':1},250,function(){$(".buttonflash").animate({'opacity':0},250)})
                            this.openbuttonflash();
                            this.continuebuttonflash(this.buttonflash);
                            $(".buttonflash").css("z-index", 3);
                            $(".clickcircle ").css("z-index", 1);
                            _this.multimeterScreenNum = '1.';
                            _this.multimeterScreenUnit = "";
                        } else {
                            _this.multimeterScreenNum = '1.';
                            _this.multimeterScreenUnit = "";
                            this.closebuttonflash();
                        }

                    }
                }
            });
            //整个万用表drag，通过万用表表身带动红表笔
            $("#mask-multimeter").draggable({
                containment: ".multimeter-contain",
                scroll: false,
                cursor: "move",
                //iframeFix: true,
                drag: function (event) {


                    //当红黑表笔都不在热区上时，万用表整体的拖动
                    if (_this.multimeter_body == 1 && _this.multimeter_red == 1 && _this.multimeter_black == 1) {

                        var topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
                            toppoint = topInt - 80,
                            leftpoint = leftInt - 290;
                        if (leftpoint > 355) {
                            //$(".multimeter-contain").css("z-index", "7");
                        } else {
                            // $(".multimeter-contain").css("z-index", "5");
                        }
                        $("#hhjmultimeterRed").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjmultimeterRed").css("left", "" + (leftpoint + 428) + "px");
                        $("#hhjmultimeterBlack").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjmultimeterBlack").css("left", "" + (leftpoint + 272) + "px");
                        $("#hhjmultimeterRed-hotspot").css("top", "" + (toppoint + 311) + "px");
                        $("#hhjmultimeterRed-hotspot").css("left", "" + (leftpoint + 431) + "px");
                        $("#hhjmultimeterBlack-hotspot").css("top", "" + (toppoint + 315) + "px");
                        $("#hhjmultimeterBlack-hotspot").css("left", "" + (leftpoint + 272) + "px");
                        _this.Param_redx = leftpoint + 440;
                        _this.Param_redy = toppoint + 100;
                        _this.Param_redcx = leftpoint + 420;
                        _this.Param_redcy = toppoint + 37;
                        _this.Param_redpx = leftpoint + 403;
                        _this.Param_redpy = toppoint + 325;

                        _this.Param_blackx = leftpoint + 282;
                        _this.Param_blacky = toppoint + 100;
                        _this.Param_blackcx = leftpoint + 302;
                        _this.Param_blackcy = toppoint + 37;
                        _this.Param_blackpx = leftpoint + 376;
                        _this.Param_blackpy = toppoint + 325;
                        $("#path_Red").attr("d", "M" + _this.Param_redx + " " + _this.Param_redy + " C" + _this.Param_redx + " " + _this.Param_redy + " " + _this.Param_redcx + " " + _this.Param_redcy + " " + _this.Param_redpx + " " + _this.Param_redpy);
                        $("#path_black").attr("d", "M" + _this.Param_blackx + " " + _this.Param_blacky + " C" + _this.Param_blackx + " " + _this.Param_blacky + " " + _this.Param_blackcx + " " + _this.Param_blackcy + " " + _this.Param_blackpx + " " + _this.Param_blackpy);

                        _this.multimeterredstartx = _this.Param_redx;
                        _this.multimeterredstarty = _this.Param_redy;
                        _this.multimeterredradianx = _this.Param_redcx;
                        _this.multimeterredradiany = _this.Param_redcy;
                        _this.multimeterredstopx = _this.Param_redpx;
                        _this.multimeterredstopy = _this.Param_redpy;

                        _this.multimeterblackstartx = _this.Param_blackx;
                        _this.multimeterblackstarty = _this.Param_blacky;
                        _this.multimeterblackradianx = _this.Param_blackcx;
                        _this.multimeterblackradiany = _this.Param_blackcy;
                        _this.multimeterblackstopx = _this.Param_blackpx;
                        _this.multimeterblackstopy = _this.Param_blackpy;

                    }
                    ;//当黑表笔都在热区上时，万用表整体的拖动
                    if (_this.multimeter_body == 1 && _this.multimeter_red == 1 && _this.multimeter_black == 0) {

                        var blackLeftInt = parseInt($("#hhjmultimeterBlack").css("left").replace("px", "")) + 10,
                            blackTopInt = parseInt($("#hhjmultimeterBlack").css("top").replace("px", "")) + 5,
                            topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),

                            cl = (blackLeftInt - 40),
                            ct = (blackTopInt - 80);


                        toppoint = topInt - 80;
                        leftpoint = leftInt - 290;
                        if (leftpoint > 355) {
                            //$(".multimeter-contain").css("z-index", "7");
                        } else {
                            // $(".multimeter-contain").css("z-index", "5");
                        }
                        $("#hhjmultimeterRed").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjmultimeterRed").css("left", "" + (leftpoint + 428) + "px");
                        $("#hhjmultimeterRed-hotspot").css("top", "" + (toppoint + 311) + "px");
                        $("#hhjmultimeterRed-hotspot").css("left", "" + (leftpoint + 431) + "px");
                        /* console.log(toppoint); */
                        _this.Param_blackx = blackLeftInt;
                        _this.Param_blacky = blackTopInt;
                        _this.Param_blackcx = cl;
                        _this.Param_blackcy = ct;
                        _this.Param_blackpx = leftInt + 90;
                        _this.Param_blackpy = topInt + 250;

                        _this.multimeterblackstartx = _this.Param_blackx;
                        _this.multimeterblackstarty = _this.Param_blacky;
                        _this.multimeterblackradianx = _this.Param_blackcx;
                        _this.multimeterblackradiany = _this.Param_blackcy;
                        _this.multimeterblackstopx = _this.Param_blackpx;
                        _this.multimeterblackstopy = _this.Param_blackpy;

                        _this.Param_redx = leftpoint + 440;
                        _this.Param_redy = toppoint + 100;
                        _this.Param_redcx = leftpoint + 420;
                        _this.Param_redcy = toppoint + 37;
                        _this.Param_redpx = leftpoint + 403;
                        _this.Param_redpy = toppoint + 325;

                        _this.multimeterredstartx = _this.Param_redx;
                        _this.multimeterredstarty = _this.Param_redy;
                        _this.multimeterredradianx = _this.Param_redcx;
                        _this.multimeterredradiany = _this.Param_redcy;
                        _this.multimeterredstopx = _this.Param_redpx;
                        _this.multimeterredstopy = _this.Param_redpy;
                        $("#path_Red").attr("d", "M" + _this.Param_redx + " " + _this.Param_redy + " C" + _this.Param_redx + " " + _this.Param_redy + " " + _this.Param_redcx + " " + _this.Param_redcy + " " + _this.Param_redpx + " " + _this.Param_redpy);
                        $("#path_black").attr("d", "M" + _this.Param_blackx + " " + _this.Param_blacky + " C" + _this.Param_blackx + " " + _this.Param_blacky + " " + _this.Param_blackcx + " " + _this.Param_blackcy + " " + _this.Param_blackpx + " " + _this.Param_blackpy);
                    }//当红表笔都在热区上时，万用表整体的拖动
                    if (_this.multimeter_body == 1 && _this.multimeter_red == 0 && _this.multimeter_black == 1) {
                        _this.Param_stasds = 1;
                        var redLeftInt = parseInt($("#hhjmultimeterRed").css("left").replace("px", "")) + 10,
                            redTopInt = parseInt($("#hhjmultimeterRed").css("top").replace("px", "")) - 104,
                            topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),

                            cl = (redLeftInt - 40),
                            ct = (redTopInt - 80);


                        toppoint = topInt - 80;
                        leftpoint = leftInt - 290;
                        if (leftpoint > 355) {
                            //$(".multimeter-contain").css("z-index", "7");
                        } else {
                            //$(".multimeter-contain").css("z-index", "5");
                        }
                        $("#hhjmultimeterBlack").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjmultimeterBlack").css("left", "" + (leftpoint + 272) + "px");
                        $("#hhjmultimeterBlack-hotspot").css("top", "" + (toppoint + 315) + "px");
                        $("#hhjmultimeterBlack-hotspot").css("left", "" + (leftpoint + 272) + "px");
                        _this.Param_redx = redLeftInt;
                        _this.Param_redy = redTopInt + 110;
                        _this.Param_redcx = cl;
                        _this.Param_redcy = ct;
                        _this.Param_redpx = leftInt + 114;
                        _this.Param_redpy = topInt + 260;

                        _this.multimeterredstartx = _this.Param_redx;
                        _this.multimeterredstarty = _this.Param_redy;
                        _this.multimeterredradianx = _this.Param_redcx;
                        _this.multimeterredradiany = _this.Param_redcy;
                        _this.multimeterredstopx = _this.Param_redpx;
                        _this.multimeterredstopy = _this.Param_redpy;
                        _this.Param_blackx = leftpoint + 282;
                        _this.Param_blacky = toppoint + 100;
                        _this.Param_blackcx = leftpoint + 302;
                        _this.Param_blackcy = toppoint + 37;
                        _this.Param_blackpx = leftpoint + 376;
                        _this.Param_blackpy = toppoint + 325;

                        _this.multimeterblackstartx = _this.Param_blackx;
                        _this.multimeterblackstarty = _this.Param_blacky;
                        _this.multimeterblackradianx = _this.Param_blackcx;
                        _this.multimeterblackradiany = _this.Param_blackcy;
                        _this.multimeterblackstopx = _this.Param_blackpx;
                        _this.multimeterblackstopy = _this.Param_blackpy;
                        $("#path_Red").attr("d", "M" + _this.Param_redx + " " + _this.Param_redy + " C" + _this.Param_redx + " " + _this.Param_redy + " " + _this.Param_redcx + " " + _this.Param_redcy + " " + _this.Param_redpx + " " + _this.Param_redpy);
                        $("#path_black").attr("d", "M" + _this.Param_blackx + " " + _this.Param_blacky + " C" + _this.Param_blackx + " " + _this.Param_blacky + " " + _this.Param_blackcx + " " + _this.Param_blackcy + " " + _this.Param_blackpx + " " + _this.Param_blackpy);
                    }//当红黑表笔都在热区上时，万用表整体的拖动
                    if (_this.multimeter_body == 1 && _this.multimeter_red == 0 && _this.multimeter_black == 0) {
                        var redLeftInt = parseInt($("#hhjmultimeterRed").css("left").replace("px", "")) + 10,
                            redTopInt = parseInt($("#hhjmultimeterRed").css("top").replace("px", "")) - 104,
                            blackLeftInt = parseInt($("#hhjmultimeterBlack").css("left").replace("px", "")) + 10,
                            blackTopInt = parseInt($("#hhjmultimeterBlack").css("top").replace("px", "")) + 10,
                            topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
                            redcl = (redLeftInt - 40),
                            redct = (redTopInt - 80),
                            blackcl = (blackLeftInt - 40),
                            blackct = (blackTopInt - 80);
                        if (leftInt > 670) {
                            // $(".multimeter-contain").css("z-index", "7");
                        } else {
                            // $(".multimeter-contain").css("z-index", "5");
                        }
                        _this.Param_redx = redLeftInt;
                        _this.Param_redy = redTopInt + 110;
                        _this.Param_redcx = redcl;
                        _this.Param_redcy = redct;
                        _this.Param_redpx = leftInt + 114;
                        _this.Param_redpy = topInt + 250;

                        _this.multimeterredstartx = _this.Param_redx;
                        _this.multimeterredstarty = _this.Param_redy;
                        _this.multimeterredradianx = _this.Param_redcx;
                        _this.multimeterredradiany = _this.Param_redcy;
                        _this.multimeterredstopx = _this.Param_redpx;
                        _this.multimeterredstopy = _this.Param_redpy;

                        _this.Param_blackx = blackLeftInt;
                        _this.Param_blacky = blackTopInt;
                        _this.Param_blackcx = blackcl;
                        _this.Param_blackcy = blackct;
                        _this.Param_blackpx = leftInt + 90;
                        _this.Param_blackpy = topInt + 250;

                        _this.multimeterblackstartx = _this.Param_blackx;
                        _this.multimeterblackstarty = _this.Param_blacky;
                        _this.multimeterblackradianx = _this.Param_blackcx;
                        _this.multimeterblackradiany = _this.Param_blackcy;
                        _this.multimeterblackstopx = _this.Param_blackpx;
                        _this.multimeterblackstopy = _this.Param_blackpy;

                        //测量点记录
                        //$rootScope.recordProgress();

                        $(document).find("#path_Red").attr("d", "M" + _this.Param_redx + " " + _this.Param_redy + " C" + _this.Param_redx + " " + _this.Param_redy + " " + _this.Param_redcx + " " + _this.Param_redcy + " " + _this.Param_redpx + " " + _this.Param_redpy);
                        $(document).find("#path_black").attr("d", "M" + _this.Param_blackx + " " + _this.Param_blacky + " C" + _this.Param_blackx + " " + _this.Param_blacky + " " + _this.Param_blackcx + " " + _this.Param_blackcy + " " + _this.Param_blackpx + " " + _this.Param_blackpy);
                    }
                }
            });
        },
        // skipSpeedy(href) {
        //     if (href != null) {
        //         $state.go(href);
        //         multimeterShortcutHtml(href);
        //     }
        // }
        multimeterShortcutHtml(href) {
            if (this.multimeterStatus) {
                if (this.w_multimeter_blackHtml == href || this.w_multimeter_blackHtml == null) {
                    this.SvgBlackStatus = true;
                } else {
                    this.SvgBlackStatus = false;
                }
                if (this.w_multimeter_redHtml == href || this.w_multimeter_redHtml == null) {

                    this.SvgRedStatus = true;
                } else {
                    this.SvgRedStatus = false;
                }
            }
        },
        multimeteroff() {
            //万用表OFF档位
            this.circleareaAnimate(false);
            this.Mint.In1NER_Multi_Off_x_x = "1";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            this.multimeterScreenStatus = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "";
            this.multimeterScreenNum = '';
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $(".multimeter-bottom").css("transform", "rotate(0deg)");
            //关闭热区板
            //$(".multimeterBlack").css("background-image", "url(./images/36704121.png)")
            //$(".multimeterRed").css("background-image", "url(./images/3670412.png)")
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});

        },
        multimetervv() {
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '0.00';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "V~";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "1";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(27deg)");
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});

        },
        multimeterv() {
            this.multimetervisOrnot = true;
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '0.00';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "V";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "1";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(56deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').hide();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
            //测量点记录
            //$rootScope.recordProgress();
            // console.log(this.dropsuccessNum)
            // console.log(this.multimetervisOrnot)
            if(this.dropsuccessNum == 2 && this.multimetervisOrnot){
                this.multimeterScreenNum = '332';
                // this.dropsuccessNum = '';
            }else if(this.dropsuccessNum == -2 && this.multimetervisOrnot){
                this.multimeterScreenNum = '-332';
                // this.dropsuccessNum = '';
            }else{
                this.multimeterScreenNum = '0.00';
            }
            this.communicationService.setAction({id:'v01',flag:'',sub:'',value:'V'});

        },
        multimetermv() {
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '0.00';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenUnit = "mV";
            this.multimetershowDateUnit ='';
            this.multimeterScreenrightUnit = "";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "1";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(87deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
        },

        multimeterres() {
            this.multimeterScreenNum = '----';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = true;
            this.multimetervisOrnot = false;
            this.multimeterScreenUnit = "---";//去除Ω
            this.multimeterScreenrightUnit = "500v";//去除Ω
            this.multimetershowDateUnit ='';
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "1";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            // $('.opacitybox').hide();
            // $('.opacitybox2').show();
            // console.log(this.dropsuccessNum)
            if(this.dropsuccessNum && this.dropsuccessNum!=0){
               this.circleareaAnimate(true);
            }
            if((this.dropsuccessNum ==2 || this.dropsuccessNum ==-2)  && this.multimeterinsulated){
                this.falseconnectStatus = true;
                this.circleareaAnimate(false);
                this.dropsuccessNum = '';
            }
            if((this.dropsuccessNum ==1 || this.dropsuccessNum ==3)  && this.multimeterinsulated){
                this.multimeterScreenUnit = "---";
                this.multimeterScreenNum = "----";
                this.multimetershowDateUnit = ''; 
            }   
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(200deg)");
            $('.multimeterBlack').addClass('multimeterjiaziBlack').removeClass('.multimeterBlack')
            $('.multimeterRed').addClass('multimeterjiaziRed').removeClass('.multimeterRed')
            $('.multimeter-Red').css({'transform':'rotate(-7deg)','right':'84px','bottom':'31px'});
                $('.multimeter-black').css({'right':'85px'});
            //this.multimeterredRecover();
            //this.multimeterblackRecover();
            this.communicationService.setAction({id:'v01',flag:'',sub:'',value:'Res'});

        },
        multimeternofine() {
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '1.';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "1";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(145deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
        },
        multimeterAA() {
            this.circleareaAnimate(false);
            // this.multimeterredRecover();
            // this.multimeterblackRecover();
            this.multimeterScreenNum = '0.00';
            this.multimeterScreenStatus = true;
            this.multimetershowDateUnit ='';
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenrightUnit = "";
            this.multimeterScreenUnit = "A~";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "1";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(150deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
        },
        multimeterk() {
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '1.';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "1";
            this.Mint.In1NER_Multi_mirAmp_x_x = "0";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(120deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
        },
        
        multimetermA() {
            this.circleareaAnimate(false);
            this.multimeterScreenNum = '0.00';
            this.multimeterScreenStatus = true;
            this.multimeterinsulated = false;
            this.multimetervisOrnot = false;
            this.multimeterScreenrightUnit = "";
            this.multimetershowDateUnit ='';
            this.multimeterScreenUnit = "mA";
            this.Mint.In1NER_Multi_Off_x_x = "0";
            this.Mint.In1NER_Multi_ACVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCVlt_x_x = "0";
            this.Mint.In1NER_Multi_DCmVlt_x_x = "0";
            this.Mint.In1NER_Multi_Pass2Ohm_x_x = "0";
            this.Mint.In1NER_Multi_hFE_x_x = "0";
            this.Mint.In1NER_Multi_Amp_x_x = "0";
            this.Mint.In1NER_Multi_mAmp_x_x = "0";
            this.Mint.In1NER_Multi_mirAmp_x_x = "1";
            $('.multimeter-top').css({'left':'25px','top':'15px'});
            $(".multimeter-bottom").css("transform", "rotate(175deg)");
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
            $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack')
            $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed')
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
        },
        multimeterCircle() {
            $(".clickcircle").hide();
            setTimeout(function () {
                $(".clickcircle").show();
            }, 300)
            this.circleareaAnimate(false);
            if(this.multimeterinsulated){
                if(this.dropsuccessNum === '1'){
                    this.multimeterScreenUnit = "527v";
                    this.multimeterScreenNum = "521";
                    this.multimetershowDateUnit = 'MΩ';
                }else if(this.dropsuccessNum === '2' || this.dropsuccessNum === '-2'){
                    // this.multimeterScreenUnit = "527v";
                    // this.multimeterScreenNum = "35";
                    // this.multimetershowDateUnit = 'KΩ';
                    
                }else if(this.dropsuccessNum === '3'){
                    this.multimeterScreenUnit = "527v";
                    this.multimeterScreenNum = "512";
                    this.multimetershowDateUnit = 'MΩ';
                }else{
                    this.multimeterScreenUnit = "---";
                    this.multimeterScreenNum = "----";
                    this.multimetershowDateUnit = ''; 
                }
                this.communicationService.setAction({id:'v04',flag:'',sub:'',value:'used'});
            }
            // else if(this.Mint.In1NER_Multi_mAmp_x_x=='1'){

            // }
            // else{
            //     this.multimeterScreenrightUnit = "";
            //     // this.multimeterScreenNum = '0.00';
            // }
        },
        closemultimeter() {
            $(".test1").css('opacity', 0);
            //$(".multimeterBlack").css("background-image", "url(framework/multimeter/images/36704121.png)");
           // $(".multimeterRed").css("background-image", "url(framework/multimeter/images/3670412.png)");
            //具体注释见js/angularJs/Service.js
            this.multimeteroff();
            this.circleareaAnimate(false);
            this.multimeterinsulated = false;
            this.dropsuccessNum = '';
            this.redposition = '';
            this.blackposition = '';
            this.multimeterStatus = false;
            this.multimeter_drag = '0';
            this.Mint.In1NER_Multi_Red_x_x = '0',
            this.Mint.In1NER_Multi_Black_x_x = '0';
            this.w_multimeter_redHtml = null;
            this.w_multimeter_blackHtml = null;
            this.SvgStatus = false;
            this.multimeter_red = '0';
            this.multimeter_black = '0';
            this.wanyongbiao = '0';
            this.svgRecoverStatus = '1';
            this.multimeterblackPosition = null;
            this.multimeterredPosition = null;
            this.Radrepetition = '0';
            this.Blackrepetition = '0';
            this.multimeter_red = '1';
            this.multimeter_black = '1';
            this.multimeterredstartx = this.Param_redx = '440';//红色表线起始x坐标
            this.multimeterredstarty = this.Param_redy = '100';//红色表线起始y坐标
            this.multimeterredradianx = this.Param_redcx = '420';//红色表线曲线拐x坐标
            this.multimeterredradiany = this.Param_redcy = '37';//红色表线曲线拐y坐标
            this.multimeterredstopx = this.Param_redpx = '403';//红色表线曲线结束x坐标
            this.multimeterredstopy = this.Param_redpy = '375';//红色表线曲线结束x坐标
            this.multimeterblackstartx = this.Param_blackx = '282';
            this.multimeterblackstarty = this.Param_blacky = '100';
            this.multimeterblackradianx = this.Param_blackcx = '302';
            this.multimeterblackradiany = this.Param_blackcy = '37';
            this.multimeterblackstopx = this.Param_blackpx = '376';
            this.multimeterblackstopy = this.Param_blackpy = '375';
            $("#mask-multimeter").css("top", "80px");
            $("#mask-multimeter").css("left", "290px");
            $("#hhjmultimeterRed").css("top", "97px");
            $("#hhjmultimeterRed").css("left", "428px");
            $("#hhjmultimeterBlack").css("top", "97px");
            $("#hhjmultimeterBlack").css("left", "272px");
            $("#hhjmultimeterRed-hotspot").css("top", "311px");
            $("#hhjmultimeterRed-hotspot").css("left", "431px");
            $("#hhjmultimeterBlack-hotspot").css("top", "315px");
            $("#hhjmultimeterBlack-hotspot").css("left", "272px");
            $('.multimeter-Red').css({'transform':'rotate(0deg)','right':'17px','bottom':'29px'});
            $('.multimeter-black').css({'right':'19px'});
            $("#path_Red").attr("d", "M" + this.multimeterredstartx + " " + this.multimeterredstarty + " C" + this.multimeterredstartx + " " + this.multimeterredstarty + " " + this.multimeterredradianx + " " + this.multimeterredradiany + " " + this.multimeterredstopx + " " + this.multimeterredstopy);
            $("#path_black").attr("d", "M" + this.multimeterblackstartx + " " + this.multimeterblackstarty + " C" + this.multimeterblackstartx + " " + this.multimeterblackstarty + " " + this.multimeterblackradianx + " " + this.multimeterblackradiany + " " + this.multimeterblackstopx + " " + this.multimeterblackstopy);
            //去除右侧工具栏的触发状态
            $(".right-multimeter").parent().removeClass("active");
            //隐藏热区
            hideAHot();
            //把状态码设为0；
            //**multimeterStay = 0;
        },

        //测量点记录
        recordProgress() {
            if (this.Mint.In1NER_Multi_DCVlt_x_x == 1) {
                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 22) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 3) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 22 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 3 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    ////xcjDataService.setProgress("C011");
                }
                //
                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 8) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 27) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 9) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 28) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 8 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 27 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 9 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 28 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    ////xcjDataService.setProgress("C012");
                }

                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 16) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 17) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 35) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 36) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 20) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 34) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 16 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 17 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 35 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 36 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 20 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 34 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    //xcjDataService.setProgress("C013");
                }

                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 43) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 45) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 30) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 32) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 43 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 45 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 30 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 32 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    //xcjDataService.setProgress("C014");
                }

                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 23) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 6) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 15) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 23) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 23 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 6 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 15 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 23 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    //xcjDataService.setProgress("C015");
                }
                if ((this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 10) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 11) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 40) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 2 && this.Mint.In1NER_Multi_Black_x_x == 41) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 10 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 11 && this.Mint.In1NER_Multi_Black_x_x == 2) ||
                    (this.Mint.In1NER_Multi_Red_x_x == 40 && this.Mint.In1NER_Multi_Black_x_x == 2) ||

                    (this.Mint.In1NER_Multi_Red_x_x == 41 && this.Mint.In1NER_Multi_Black_x_x == 2)
                ) {
                    //记录进度点
                    //xcjDataService.setProgress("C016");
                }
            }

        },
        judgeS: function (href) {
            if (this.multimeterStatus) {
                if (this.w_multimeter_blackHtml == href || this.w_multimeter_blackHtml == null) {
                    this.SvgBlackStatus = true;
                } else {
                    this.SvgBlackStatus = false;
                }
                if (this.w_multimeter_redHtml == href || this.w_multimeter_redHtml == null) {

                    this.SvgRedStatus = true;
                } else {
                    this.SvgRedStatus = false;
                }
            }

        },
        freshHontspot() {
            let _this: any = this;
            $("body").find('a').droppable({
                accept: "#hhjmultimeterBlack-hotspot,#hhjmultimeterRed-hotspot",
                tolerance: "pointer",
                greedy: true,

                //          over: function (event, ui) {
                //
                //              if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                //                  $("#path_black").css("stroke", "#f69c19");
                //              }
                //              if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                //                  $("#path_Red").css("stroke", "#f69c19");
                //              }
                //          },
                //			out: function (event, ui) {
                //              if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                //                  $("#path_Red").css("stroke", "#db3040");
                //                  return false;
                //              }
                //              if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                //                  $("#path_black").css("stroke", "#656261");
                //                  return false;
                //              }
                //          },




                over: function (event, ui) {

                    if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                        if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                            $("#path_black").css("stroke", "#f69c19");
                            $("#hhjmultimeterBlack").css("background", "url(framework/multimeter/images/num1.png)")
                        }
                        if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                            $("#path_Red").css("stroke", "#f69c19");
                            $("#hhjmultimeterRed").css("background", "url(framework/multimeter/images/num2.png)")
                        }
                    } else {
                        if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                            $("#path_black").css("stroke", "#f69c19");
                        }
                        if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                            $("#path_Red").css("stroke", "#f69c19");
                        }
                    }
                },

                out: function (event, ui) {
                    if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                        if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                            $("#path_black").css("stroke", "#656261");
                            $("#hhjmultimeterBlack").css("background", "url(framework/multimeter/images/clip_b.png)");

                        }
                        if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                            $("#path_Red").css("stroke", "#e43846");
                            $("#hhjmultimeterRed").css("background", "url(framework/multimeter/images/clip_r.png)")
                        }
                    } else {
                        if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                            $("#path_black").css("stroke", "#656261");
                            _this.blackposition = '';
                        }
                        if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                            $("#path_Red").css("stroke", "#e43846");
                            _this.redposition = '';
                        }
                    }
                    // if((_this.redposition==='41' && _this.blackposition==='42') || (_this.redposition==='41' && _this.blackposition==='43') ||
                    // (_this.redposition==='42' && _this.blackposition==='41') || (_this.redposition==='43' && _this.blackposition==='41')){
                    //     _this.dropsuccessNum = '1';
                    // }else if((_this.redposition==='42' && _this.blackposition==='43') || (_this.redposition==='43' && _this.blackposition==='42')){
                    //     _this.dropsuccessNum = '2';
                    // }else{
                    //     _this.dropsuccessNum = '0';
                    //     console.log('lee');
                    //     if(_this.multimeterinsulated){
                    //         _this.multimeterScreenNum = "----";
                    //         _this.multimetershowDateUnit = '';
                    //         _this.multimeterScreenUnit = '---';
                    //     } 
                    // }
                    // _this.circleareaAnimate(false);
                    // if(_this.multimetervisOrnot){
                    //      _this.multimeterScreenNum = "0.00";
                    // }
                },




                drop: function (event, ui) {
                    //红表笔位置的top值，用来判断表笔层级
                    var redPositionTop = 0;
                    //黑表笔位置的top值，用来判断表笔层级
                    var blackPositionTop = 0;
                    // 通过这两个属性进行表笔的定位
                    let hTop = $(event.target).attr("h-top"),
                    hLeft = $(event.target).attr("h-left");
                    if (ui.draggable[0].id == "hhjmultimeterRed-hotspot" && _this.multimeterblackPosition != $(event.target).attr("wybredPosition")) {
                        if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                            $("#path_Red").css("stroke", "#db3040");
                            $("#hhjmultimeterRed").css("background", "url(framework/multimeter/images/clip_r.png)");
                        } else {
                            $("#path_Red").css("stroke", "#db3040");
                        }
                        _this.redposition = $(event.target).attr("wybredPosition");
                        // $("#hhjmultimeterRed").css("top", "" + (parseInt($(event.target).css("top")) - 215) + "px");
                        // $("#hhjmultimeterRed").css("left", "" + (parseInt($(event.target).css("left")) + 3) + "px");
                        // $("#hhjmultimeterRed-hotspot").css("top", "" + (parseInt($(event.target).css("top")) + 3) + "px");
                        // $("#hhjmultimeterRed-hotspot").css("left", "" + (parseInt($(event.target).css("left")) + 3) + "px");
                        $("#hhjmultimeterRed-hotspot").css({
                            "top": "" + (parseInt(hTop) - 10) + "px",
                            "left": "" + (parseInt(hLeft) - 5 ) + "px"
                        });
                        $("#hhjmultimeterRed").css({
                            "top": "" + (parseInt($("#hhjmultimeterRed-hotspot").css("top"))- $("#hhjmultimeterRed").height()+20) + "px",
                            "left": "" + (parseInt($("#hhjmultimeterRed-hotspot").css("left"))) + "px"
                        });
                        $("#hhjmultimeterRed").addClass('multimeterRed-on');
                        var redLeftInt = parseInt(hLeft) - 4,
                            redTopInt = parseInt(hTop) + 45,
                            // topInt = parseInt(hTop) + 295,
                            // leftInt = parseInt(hLeft) + 113,
                            cl = (redLeftInt - 40),
                            ct = (redTopInt + 80);
                        $("#path-Red").attr("d", "M" + redLeftInt + " " + redTopInt + " C" + redLeftInt + " " + redTopInt + " " + cl + " " + ct + " 523 291");
                        _this.multimeter_red = 0;
                        _this.Mint.In1NER_Multi_Red_x_x = $(event.target).attr("rqPosition");
                        _this.Radrepetition = $(event.target).attr("rqPosition");//记忆已经有一只放在热区上
                        _this.multimeterredstartx = parseInt($("#hhjmultimeterRed").css("left")) + 10;
                        _this.multimeterredstarty = parseInt($("#hhjmultimeterRed").css("top")) + 5;
                        _this.multimeterredradianx = parseInt($("#hhjmultimeterRed").css("left")) - 90;
                        _this.multimeterredradiany = parseInt($("#hhjmultimeterRed").css("top")) - 90;
                        _this.multimeterredstopx = parseInt($("#mask-multimeter").css("left")) + 114;
                        _this.multimeterredstopy = parseInt($("#mask-multimeter").css("top")) + 258;
                        _this.svgRecoverStatus = 0;
                        _this.w_multimeter_redHtml = $(event.target).attr("h_href");
                        _this.multimeterredPosition = $(event.target).attr("wybredPosition");
                        //console.log("%c 红表笔的触发值----------" + _this.Mint.In1NER_Multi_Red_x_x, "color: #cc0000");
                        $("#path_Red").attr("d", "M" + _this.multimeterredstartx + " " + _this.multimeterredstarty + " C" + _this.multimeterredstartx + " " + _this.multimeterredstarty + " " + _this.multimeterredradianx + " " + _this.multimeterredradiany + " " + _this.multimeterredstopx + " " + _this.multimeterredstopy);

                        //测量点记录
                        //$rootScope.recordProgress();
                        _this.communicationService.setAction({id:'v02',flag:'',sub:'',value:'redUsed'});
                        //红黑表笔层级判断
                        redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
                        blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));
                    }
                    if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot" && _this.multimeterredPosition != $(event.target).attr("wybblackPosition")) {
                        if (_this.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
                            $("#path_black").css("stroke", "#656261");
                            $("#hhjmultimeterBlack").css("background", "url(framework/multimeter/images/clip_b.png)");
                        } else {
                            $("#path_black").css("stroke", "#656261");
                        }
                        _this.blackposition = $(event.target).attr("wybblackPosition");
                        // $("#hhjmultimeterBlack").css("top", "" + (parseInt($(event.target).css("top")) - 215) + "px");
                        // $("#hhjmultimeterBlack").css("left", "" + (parseInt($(event.target).css("left")) + 3) + "px");
                        // $("#hhjmultimeterBlack-hotspot").css("top", "" + (parseInt($(event.target).css("top")) + 3) + "px");
                        // $("#hhjmultimeterBlack-hotspot").css("left", "" + (parseInt($(event.target).css("left")) + 3) + "px");
                        $("#hhjmultimeterBlack-hotspot").css({
                            "top": "" + (hTop - 10) + "px",
                            "left": "" + (hLeft - 5) + "px"
                        });
                        $("#hhjmultimeterBlack").addClass('multimeterBlack-on');
                        $("#hhjmultimeterBlack").css({
                            'top': "" + (parseInt($("#hhjmultimeterBlack-hotspot").css("top"))- $("#hhjmultimeterRed").height()+20) + "px",
                            'left': "" + (parseInt($("#hhjmultimeterBlack-hotspot").css("left"))) + "px"
                        });
                        var blackLeftInt = parseInt(hLeft) - 5,
                            redTopInt = parseInt(hTop) + 40,
                            // topInt = parseInt(hTop) + 295,
                            // blackLeft = parseInt(hLeft) + 113,
                            blackCl = (blackLeftInt + 40),
                            blackCt = (redTopInt + 80);
                        $("#path-black").attr("d", "M" + blackLeftInt + " " + redTopInt + " C" + blackLeftInt + " " + redTopInt + " " + blackCl + " " + blackCt + " 501 291 ");
                        _this.multimeter_black = 0;
                        _this.Blackrepetition = $(event.target).attr("rqPosition");//记忆已经有一只放在热区上
                        _this.multimeterblackstartx = parseInt($("#hhjmultimeterBlack").css("left")) + 5;
                        _this.multimeterblackstarty = parseInt($("#hhjmultimeterBlack").css("top")) + 5;
                        _this.multimeterblackradianx = parseInt($("#hhjmultimeterBlack").css("left")) + 90;
                        _this.multimeterblackradiany = parseInt($("#hhjmultimeterBlack").css("top")) - 90;
                        _this.multimeterblackstopx = parseInt($("#mask-multimeter").css("left")) + 90;
                        _this.multimeterblackstopy = parseInt($("#mask-multimeter").css("top")) + 260;
                        _this.svgRecoverStatus = 0;
                        _this.Mint.In1NER_Multi_Black_x_x = $(event.target).attr("rqPosition");
                        _this.w_multimeter_blackHtml = $(event.target).attr("h_href");
                        _this.multimeterblackPosition = $(event.target).attr("wybblackPosition");
                        //console.info(" 黑表笔的触发值----------" + _this.Mint.In1NER_Multi_Black_x_x);
                        $("#path_black").attr("d", "M" + _this.multimeterblackstartx + " " + _this.multimeterblackstarty + " C" + _this.multimeterblackstartx + " " + _this.multimeterblackstarty + " " + _this.multimeterblackradianx + " " + _this.multimeterblackradiany + " " + _this.multimeterblackstopx + " " + _this.multimeterblackstopy);


                        //测量点记录
                        //$rootScope.recordProgress();
                        //红黑表笔层级判断
                        redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
                        blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));
                        _this.communicationService.setAction({id:'v03',flag:'',sub:'',value:'blackUsed'});
                    
                    };
                    if((_this.redposition==='41' && _this.blackposition==='42') || (_this.blackposition==='41' && _this.redposition==='42')){
                        _this.dropsuccessNum = '1';
                        if(_this.multimeterinsulated ){
                            _this.multimeterScreenUnit = "---";
                            _this.multimeterScreenNum = "----";
                            _this.multimetershowDateUnit = ''; 
                            _this.circleareaAnimate(true);
                        }else if(_this.multimetervisOrnot){
                             _this.circleareaAnimate(false);
                             _this.multimeterScreenNum = '0.00';
                            _this.multimeterScreenUnit = "V";
                        }
                    }else if((_this.redposition==='42' && _this.blackposition==='43') ){
                        _this.dropsuccessNum = '2';
                        if(_this.multimeterinsulated ){
                            _this.circleareaAnimate(false);
                            _this.falseconnectStatus = true;
                            _this.multimeterScreenNum = "----";
                            _this.multimeterScreenUnit = "---";
                            _this.multimetershowDateUnit = ''; 
                        }else if(_this.multimetervisOrnot){
                            _this.multimeterScreenNum = '332';
                            _this.multimeterScreenUnit = "V";
                             _this.circleareaAnimate(false);
                        } 
                        // $('.falseconnect').show();
                        
                    }else if((_this.redposition==='43' && _this.blackposition==='42')){
                        _this.dropsuccessNum = '-2';
                        if(_this.multimeterinsulated ){
                            _this.circleareaAnimate(false);
                            _this.falseconnectStatus = true;
                            _this.multimeterScreenNum = "----";
                            _this.multimeterScreenUnit = "---";
                            _this.multimetershowDateUnit = ''; 
                        }else if(_this.multimetervisOrnot){
                            _this.multimeterScreenNum = '-332';
                            _this.multimeterScreenUnit = "V";
                             _this.circleareaAnimate(false);
                        } 
                    }
                    
                    else if((_this.redposition==='41' && _this.blackposition==='43') || (_this.redposition==='43' && _this.blackposition==='41')){
                        _this.dropsuccessNum = '3';
                        if(_this.multimeterinsulated ){
                            _this.circleareaAnimate(true);
                            _this.multimeterScreenNum = "----";
                            _this.multimeterScreenUnit = "---";
                            _this.multimetershowDateUnit = ''; 
                        }else if(_this.multimetervisOrnot){
                             _this.circleareaAnimate(false);
                             _this.multimeterScreenNum = '0.00';
                             _this.multimeterScreenUnit = "V";
                        } 
                    }else{
                        _this.dropsuccessNum = '';
                        _this.circleareaAnimate(false);
                    };
                    // console.log(_this.blackposition)
                    // console.log(_this.redposition)




                    
                    




                    //万用表表笔层级判断
                    if ((blackPositionTop != 0) && (redPositionTop != 0)) {
                        if (blackPositionTop > redPositionTop) {
                            $("#hhjmultimeterRed").css("z-index", "10");
                            $("#hhjmultimeterBlack").css("z-index", "11");
                        } else {
                            $("#hhjmultimeterRed").css("z-index", "11");
                            $("#hhjmultimeterBlack").css("z-index", "10");
                        }
                    }
                }
            });

        },//刷新热区
        multimeterblackRecover() {
            this.w_multimeter_blackHtml = null;
            var topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
                toppoint = topInt - 80,
                leftpoint = leftInt - 290;
            $("#path_black").css("stroke", "#656261");
            $("#hhjmultimeterBlack").css("top", "" + (toppoint + 97) + "px");
            $("#hhjmultimeterBlack").css("left", "" + (leftpoint + 272) + "px");
            $("#hhjmultimeterBlack-hotspot").css("top", "" + (toppoint + 315) + "px");
            $("#hhjmultimeterBlack-hotspot").css("left", "" + (leftpoint + 272) + "px");

            this.Param_blackx = leftpoint + 282;
            this.Param_blacky = toppoint + 100;
            this.Param_blackcx = leftpoint + 302;
            this.Param_blackcy = toppoint + 37;
            this.Param_blackpx = leftpoint + 376;
            this.Param_blackpy = toppoint + 375;
            //      $("#path_Red").attr("d", "M" + this.Param_redx + " " + this.Param_redy + " C" + this.Param_redx + " " + this.Param_redy + " " + this.Param_redcx + " " + this.Param_redcy + " " + this.Param_redpx + " " + this.Param_redpy);
            this.multimeter_black = 1;
            this.multimeterblackstartx = this.Param_blackx;
            this.multimeterblackstarty = this.Param_blacky;
            this.multimeterblackradianx = this.Param_blackcx;
            this.multimeterblackradiany = this.Param_blackcy;
            this.multimeterblackstopx = this.Param_blackpx;
            this.multimeterblackstopy = this.Param_blackpy;
            this.Param_blackstas = 0;
            this.Param_stasds = 0;
            this.hlq_multimeterBlackLine = true;
            this.Mint.In1NER_Multi_Black_x_x = "0";

            //车上位置和车上模型编码都要置为0
            this.multimeterblackPosition = 0;
            this.Blackrepetition = 0;
            this.blackposition = 0;

            //      console.info("恢复的黑表笔的触发值----------" + this.Mint.In1NER_Multi_Black_x_x);
            $("#path_black").attr("d", "M" + this.Param_blackx + " " + this.Param_blacky + " C" + this.Param_blackx + " " + this.Param_blacky + " " + this.Param_blackcx + " " + this.Param_blackcy + " " + this.Param_blackpx + " " + this.Param_blackpy);

        },
        //进行点火开关档位的获取
        getlockOron(lockOron:string){
            this.multimetervlockOron = lockOron;
        },

        
        //黑表笔的恢复初位置
        multimeterredRecover() {
            this.w_multimeter_redHtml = null;
            var topInt = parseInt($("#mask-multimeter").css("top").replace("px", "")),
                leftInt = parseInt($("#mask-multimeter").css("left").replace("px", "")),
                toppoint = topInt - 80,
                leftpoint = leftInt - 290;
            $("#hhjmultimeterRed").css("top", "" + (toppoint + 97) + "px");
            $("#hhjmultimeterRed").css("left", "" + (leftpoint + 428) + "px");

            $("#hhjmultimeterRed-hotspot").css("top", "" + (toppoint + 311) + "px");
            $("#hhjmultimeterRed-hotspot").css("left", "" + (leftpoint + 431) + "px");

            this.Param_redx = leftpoint + 440;
            this.Param_redy = toppoint + 100;
            this.Param_redcx = leftpoint + 420;
            this.Param_redcy = toppoint + 37;
            this.Param_redpx = leftpoint + 403;
            this.Param_redpy = toppoint + 375;

            this.multimeter_red = 1;
            $("#path_Red").css("stroke", "#db3040");
            this.Mint.In1NER_Multi_Red_x_x = "0";

            //车上位置和车上模型编码都要置为0
            this.multimeterredPosition = 0;
            this.Radrepetition = 0;
            this.redposition = 0;
            // console.log('reset')

            this.multimeterredstartx = this.Param_redx;
            this.multimeterredstarty = this.Param_redy;
            this.multimeterredradianx = this.Param_redcx;
            this.multimeterredradiany = this.Param_redcy;
            this.multimeterredstopx = this.Param_redpx;
            this.multimeterredstopy = this.Param_redpy;
            this.hlq_multimeterBlackLine = true;
            /* console.log(Param_stasds);*/
            this.Param_redstas = 0;
            this.Param_stasds = 0;
            $("#path_Red").attr("d", "M" + this.Param_redx + " " + this.Param_redy + " C" + this.Param_redx + " " + this.Param_redy + " " + this.Param_redcx + " " + this.Param_redcy + " " + this.Param_redpx + " " + this.Param_redpy);
        },//红表笔的恢复初位置
        rtnMultimeterPosition: function (num) {
            if (this.multimeterredPosition == num) {
                this.multimeterredRecover();
            }
            if (this.multimeterblackPosition == num) {
                this.multimeterblackRecover();
            }
        },//判断红黑表笔是否在控件上，是否要回到热区上
        multimeterOpen() {

            this.multimeter();

        },
        //判断红黑表笔是否在控件上，是否要回到热区上
         multimeterRecover: function (redProbe,blackProbe,gear) {
            if (redProbe==="redProbe"&&this.multimeterredPosition !== null) {
                this.multimeterredRecover();
            }
            if (blackProbe==="blackProbe"&&this.multimeterblackPosition !== null) {
                this.multimeterblackRecover();
            }
            if (gear==="gear"&&this.Mint.In1NER_Multi_Off_x_x !== "1") {
                this.multimeteroff();
            }
        },
        circleareaAnimate(doOrfalse:boolean){
            if(doOrfalse){
                let hotarea = function(){
                    $('.circleinfobox').show().stop().animate({
                        'display':'block'
                    },300,function(){
                        $(this).hide().stop().animate({
                            'display':'block'
                        },300,function(){
                            $(this).hide();
                            hotarea();
                        }); 
                    })     
                }
                hotarea(); 
            }else{
                $('.circleinfobox').hide().stop()
            }    
        },
        Mint: {
            In1NER_Multi_Off_x_x: '1',
            In1NER_Multi_ACVlt_x_x: '0',//电压交流
            In1NER_Multi_DCVlt_x_x: '0',//电压直流
            In1NER_Multi_DCmVlt_x_x: '0',//电压没用
            In1NER_Multi_Pass2Ohm_x_x: '0',//当时电阻档时该值为1
            In1NER_Multi_hFE_x_x: '0',//
            In1NER_Multi_Amp_x_x: '0',
            In1NER_Multi_mAmp_x_x: '0',
            In1NER_Multi_mirAmp_x_x: '0',
            In1NER_Multi_Hold_x_x: '0',
            In1NER_Multi_VltRP_x_x: '1',
            In1NER_Multi_AmpMea_x_x: '0',
            In1NER_Multi_mirAmA_x_x: '0',
            In1NER_Multi_COM_x_x: '1',
            In1NER_Multi_Power_x_x: '1',
            In1NER_Multi_Red_x_x: '0',//红表笔输入
            In1NER_Multi_Black_x_x: '0',//黑表笔输入
            In1NER_Multi_Insulate_Ohm_x: '0',//万用表绝缘电阻档位
            In1NER_Multi_Insulate_Switch_x: '0',//万用表绝缘电阻开关
            In1MultiLogic_x_Pass2Ohm_x_x:'',
            In1MultiLogic_x_Black_x_x:'',
            In1MultiLogic_x_Red_x_x:'',
            In1MultiLogic_x_DCmVlt_x_x:''

        }
    };
    //万用表中向仿真模型传输的参数

    //万用表中从仿真模型获取的参数
    Mout = {
        Out1NER_Multi_ToScreen_x_x: '0',//万用表读数显示参数
        Out1MultiLogic_x_ToScreen_x_x:''
    }

}