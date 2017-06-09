import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication';
//import { hideAHot } from '../main';
declare let $: any,hideAHot:any;
@Injectable()
export class TemperatureService{
    constructor(public communicationService:CommunicationService){}
    //温度表中自己的参数
    Mdata = {
        temperatureStay : '',
        temperatureStatus: false,//温度表的表身显示和隐藏
        temperatureScreenStatus: false,//温度表的显示屏显示和隐藏
        temperatureScreenNum: "",//温度表的显示屏数值
        // SvgStatus: false,//温度表红表线和红表笔显示和隐藏
        SvgRedStatus: true,//温度表红表线和红表笔显示和隐藏
        temperature_drag:0,//温度表是否拖动了
        temperature_body: '1',//温度表表身是否能拖动，1代表能，0代表不能
        temperature_red: '1',//温度表红外射线是否能拖动，1代表能，0代表不能
        // svgRecoverStatus: '1',//温度表的表针时候需要恢复回原处，1代表用，0为不用
        temperatureredPosition: null,//存储温度表红色表笔放在那个控件上
        Radrepetition: '0',//存储温度表红外射线放在那个热区上
        w_temperature_redHtml: null,//温度表红外射线的那个页面
        communicationService:this.communicationService,
        temperature(){
            $(".right-template").parent().addClass("active");
            this.temperatureStay=1;
            //加上触发样式
            $(".temperatureRed").addClass("hide-important");
            $(".right-temperature").parent().addClass("active");
            $(".test2").css('opacity',0.5);
            $(".test1").css("z-index",13)
            $(".test2").css("z-index",1)
            $(".temperature-contain").removeClass("hide-important")
            $(".temperaturehotwrap").removeClass("hide-important");
            if($(".test1").css("opacity")== 0.5){
                $(".multimeter-contain").addClass("hide-important");
                $(".test1").css("opacity",0);
                $(".hotareawrap").addClass("hide-important");
                $("#mask-svg").addClass("hide-important");
            }
              this.temperatureStatus = true;//温度表身显示
              this.SvgRedStatus = true;//温度表红外线显示
            setTimeout(()=>{
                // this.SvgStatus = true;
              
                // this.freshHontspot();//刷新页面的热区，为测量接触做准备	
                this.dragStart();
            },  0)
        },
        dragStart(){
            let _this = this;
            $("#mask-temperature").draggable({
                containment: ".temperature-contain",
                scroll: false,
                cursor: "move",
                iframeFix: true,
                start:function(event){
                    if (_this.temperature_body == 1 && _this.temperature_red == 1) {
                        let topInt = parseInt($("#mask-temperature").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-temperature").css("left").replace("px", "")),
                            toppoint = topInt - 80,
                            leftpoint = leftInt - 290;
                        $("#hhjtemperatureRed").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjtemperatureRed").css("left", "" + (leftpoint + 210) + "px");
                        $("#hhjtemperatureRed-hotspot").css("top", "" + (toppoint + 90) + "px");
                        $("#hhjtemperatureRed-hotspot").css("left", "" + (leftpoint + 318) + "px");  
                    };
                },
                drag: function (event) {
                    //红外线跟随温度表整体的拖动
                    if (_this.temperature_body == 1 && _this.temperature_red == 1) {
                        let topInt = parseInt($("#mask-temperature").css("top").replace("px", "")),
                            leftInt = parseInt($("#mask-temperature").css("left").replace("px", "")),
                            toppoint = topInt - 80,
                            leftpoint = leftInt - 290;
                        $("#hhjtemperatureRed").css("top", "" + (toppoint + 97) + "px");
                        $("#hhjtemperatureRed").css("left", "" + (leftpoint + 210) + "px");
                        $("#hhjtemperatureRed-hotspot").css("top", "" + (toppoint + 90) + "px");
                        $("#hhjtemperatureRed-hotspot").css("left", "" + (leftpoint + 318) + "px");  
                        // if(leftpoint>379){
                        //     $(".temperature-contain").css("z-index","13");
                        // }else{
                        //     $(".temperature-contain").css("z-index","9");
                        // }
                        _this.communicationService.setAction({id:'v05',flag:'',sub:'',value:'draged'});
                        
                    }; 
                },
                stop:function(event){
                    $("#hhjtemperatureRed").addClass("hide-important");
                    _this.temperatureScreenNum='';
                }
            });
        },
        closetemperature(){
            $(".test2").css('opacity',0);
            //具体注释见js/angularJs/Service.js
            //关闭热区板
            $(".temperaturehotwrap").addClass("hide-important");
            // this.temperatureredRecover();
            this.temperatureScreenNum='';
            //万用表OFF档位
            this.temperatureScreenStatus = false,
            this.temperatureStatus = false;
            this.temperature_drag = '0';
            this.w_temperature_redHtml = null;
            // this.SvgStatus = false;
            this.temperature_red = '0';
            this.wanyongbiao = '0';
            this.svgRecoverStatus = '1';
            this.temperatureredPosition = null;
            this.Radrepetition = '0';
            this.temperature_red = '1';
            $("#mask-temperature").css("top", "80px");
            $("#mask-temperature").css("left", "290px");
            $("#hhjtemperatureRed").css("top", "97px");
            $("#hhjtemperatureRed").css("left", "230px");
    //      $("#hhjtemperatureRed").addClass("hide-important");
            $("#hhjtemperatureRed-hotspot").css("top", "90px");
            $("#hhjtemperatureRed-hotspot").css("left", "310px");
            this.temperatureStay=0;
            //去除右侧工具栏的触发状态
            $(".right-template").parent().removeClass("active");
        },
        freshHontspot(){
            let _this = this;
            $("body").find('a').droppable({
                accept: "#hhjtemperatureRed-hotspot",
                tolerance: "pointer",
                greedy: true,
                over: function (event, ui) {
                    if (ui.draggable[0].id == "hhjtemperatureRed-hotspot" != $(event.target).attr("wybredPosition")) {
                        _this.temperatureredPosition = $(event.target).attr("tmpredPosition");              
                    }
                },
                out: function (event, ui) {
                    if (ui.draggable[0].id == "hhjtemperatureRed-hotspot") {
                        _this.temperatureredPosition = $(event.target).attr("tmpredPosition");
                    }
                }   
            });
        },
        temperatureredRecover(){
            let topInt = parseInt($("#mask-temperature").css("top").replace("px", "")),
            leftInt = parseInt($("#mask-temperature").css("left").replace("px", "")),
            toppoint = topInt - 80,
            leftpoint = leftInt - 290;
            $("#hhjtemperatureRed").css("top", "" + (toppoint + 97) + "px");
            $("#hhjtemperatureRed").css("left", "" + (leftpoint + 328) + "px");
            $("#hhjtemperatureRed-hotspot").css("top", "" + (toppoint + 311) + "px");
            $("#hhjtemperatureRed-hotspot").css("left", "" + (leftpoint + 431) + "px");
            this.temperature_red = 1;       
            this.temperatureredPosition = 0;
            this.Radrepetition = 0;
        },
        rtntemperaturePosition(num){
            if (this.temperatureredPosition == num) {
                this.temperatureredRecover();
            }
        }
    }
}