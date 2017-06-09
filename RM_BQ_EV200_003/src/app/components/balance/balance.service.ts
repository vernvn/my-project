import { Injectable } from '@angular/core';
//import { hideAHot } from '../main';
declare let $: any,hideAHot:any;
@Injectable()
export class BalanceService{
    //温度表中自己的参数
    Mdata = {
        balanceStatus: false,//均衡仪的表身显示和隐藏
        powerStatus: false,//均衡仪的显示屏显示和隐藏
        selectStatus : false, // 均衡仪指定页面是否能进入
        dragStatus: true, //能否拖动均衡仪
        balanceStart:false, //能否处于均衡状态
        upStatus:1,   //上箭头状态
        downStatus : 1,  //下箭头状态
        index:0,  //箭头点击自增自减索引
        balanceComplete:false, //均衡是否完成
        balance(){
            $(".right-balance").parent().addClass("active");
            this.balanceStatus = true;
        },
        closebalance(){
            this.balanceStatus= false;
            this.powerStatus= false;
            this.selectStatus = false;
            this.balanceStart = false;
            $(".right-balance").parent().removeClass("active");
            $('.displayboxbalance').hide();
            this.Mint.In1NER_PowBat_BalStart_x_x = '0';
            $('.CT').stop().animate({
                left:'466px'
            },500,'linear');
            this.upStatus = 1;
            this.downStatus = 1;
            this.index = 0;
            this.stopchargeanimate();
            this.dashboardstopchargeanimate();
        },
        power(){
            this.powerStatus = !this.powerStatus;
            if(!this.powerStatus){
                this.powerStatus= false;
                this.selectStatus = false;
                this.balanceStart = false;
                this.Mint.In1NER_PowBat_BalStart_x_x = '0';
                this.upStatus = 1;
                this.downStatus = 1;
                this.index = 0;
                this.stopchargeanimate();
                this.dashboardstopchargeanimate();
                
            }else{
                this.upStatus = 0;
                this.downStatus = 1;
                this.index = 0;
            }
            
        },
        down(){
            if(this.powerStatus && !this.selectStatus){
                if(this.index<2){
                    this.index +=1;
                }
                $('.activebalance').next().addClass('activebalance').siblings().removeClass('activebalance');
                
                if(this.index ==1){
                    this.upStatus = 1;
                    this.downStatus = 2;
                    setTimeout(()=>{
                    this.downStatus = 1;
                    },100)
                }else if(this.index==2){
                    this.downStatus = 0
                }
            }     
        },
        up(){
            if(this.powerStatus && !this.selectStatus){
                if(this.index>0){
                    this.index -=1;
                }
                $('.activebalance').prev().addClass('activebalance').siblings().removeClass('activebalance');
                if(this.index==0){
                    this.upStatus = 0;
                    this.downStatus = 1;
                }else if(this.index==1){
                    this.upStatus = 2;
                    this.downStatus = 1;
                    setTimeout(()=>{
                        this.upStatus = 1;
                    },100)
                }
            }    
        },
        select(){
            if($('.activebalance').html()==='充电设置'){
                this.selectStatus = true;
            }
        },
        start(){
            if(!this.balanceStart){
                
                this.balanceStart = true;
                this.Mint.In1NER_PowBat_BalStart_x_x = '1';
                this.dashboardchargeanimate();
                $(".dashborad-screen").show();
                // this.chargeanimate();
            }
            
        },
        // return(){
        //     this.selectStatus = false;
        // },
        dragStart(){
            this.drag();
            setTimeout(()=>{
                if(this.dragStatus){
                    $(".dragSourceBalance").draggable("enable");
                }else{
                    $(".dragSourceBalance").draggable("destroy");
                }
            },100)
        },
        drag(){
            $(".dragSourceBalance").draggable({
                containment: ".main-content",
                cursor: "move"
            }) 
        },
        //充电进行动画
        chargeanimateArr : [],
        chargeanimateIndex : 0,
        setChargeAnimate(fun){
            this.chargeanimateArr[this.chargeanimateIndex] = fun;
            this.chargeanimateIndex+=1;
        },
        chargeanimate(){
            for (let i in this.chargeanimateArr) {
                this.chargeanimateArr[i]();
            }
        },
        //停止充电进行动画
        stopchargeanimateArr : [],
        stopchargeanimateIndex : 0,
        setStopChargeAnimate(fun){
            this.stopchargeanimateArr[this.stopchargeanimateIndex] = fun;
            this.stopchargeanimateIndex+=1;
        },
        stopchargeanimate(){
            for (let i in this.stopchargeanimateArr) {
                this.stopchargeanimateArr[i]();
            }
        },
        Mint : {
            In1NER_PowBat_BalStart_x_x:'0'  //均衡信号
        },
        //仪表充电进行动画
        dashboardchargeanimateArr : [],
        dashboardchargeanimateIndex : 0,
        dashboardsetChargeAnimate(fun){
            this.dashboardchargeanimateArr[this.dashboardchargeanimateIndex] = fun;
            this.dashboardchargeanimateIndex+=1;
        },
        dashboardchargeanimate(){
            for (let i in this.dashboardchargeanimateArr) {
                this.dashboardchargeanimateArr[i]();
            }
        },
        //仪表停止充电进行动画
        dashboardstopchargeanimateArr : [],
        dashboardstopchargeanimateIndex : 0,
        dashboardsetStopChargeAnimate(fun){
            this.dashboardstopchargeanimateArr[this.dashboardstopchargeanimateIndex] = fun;
            this.dashboardstopchargeanimateIndex+=1;
        },
        dashboardstopchargeanimate(){
            for (let i in this.dashboardstopchargeanimateArr) {
                this.dashboardstopchargeanimateArr[i]();
            }
        }
    }

    
    
    Mout = {
        Out1PowBat_111112_EPO  :'0',
        Out1PowBat_112113_EPO  :'0',
        Out1PowBat_113114_EPO  :'0',
        Out1PowBat_114115_EPO  :'0',
        Out1PowBat_115116_EPO  :'0',
    }

    
}