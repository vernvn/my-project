import { Component } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { CommunicationService } from '../../components/communication';
declare var $: any;
@Component({
   
    selector: 'structure',  
    providers: [
    ],
    styleUrls:['./structure.component.scss'],
    templateUrl: './structure.component.html'
})
export class StructureComponent {
    waterindex = 1;
    emptyindex = 1;
    waterrotate = 0;
    fanrotate = 0;
    pressurefanrotate = 0;
    pageTimer = [];
    downStatus = true;
    upStatus = true;
    templatevalue = -1;
    pressureStatus = false;  //表盘内的压力大于-0.05Mpa时的状态
    


    constructor(private dashboardService: DashboardService,private gearPanelService: GearPanelService,private communicationService: CommunicationService){

    }
    cleartimeoutdown(e){
        clearTimeout(this.pageTimer['timer4']);
        this.downStatus = true;
        if(this.templatevalue<=57 && this.templatevalue!=-1 && this.dashboardService.stalls==1){
            console.log('2----')
            this.templatedown(true);
        }
    }
    cleartimeoutup(){
        clearTimeout(this.pageTimer['timer3']); 
        this.upStatus = true;
        if(this.templatevalue<=57 && this.templatevalue!=-1 && this.dashboardService.stalls==1){
            console.log('1----')
            this.templatedown(true);
        }
    }
    downmousedown(){
        let timer;
        let _this = this;
        let templatetop = $('.thermometer').css('top').replace('px', '');
        let continueplus = function(){
            let templatetop = $('.thermometer').css('top').replace('px', '');
            _this.downStatus = false;
            _this.templatechange(Number(templatetop)+1);
            if(templatetop<=71){
                _this.dashboardService.fanisOK = true;
            }
            if(_this.pageTimer['timer4']){
                clearTimeout(_this.pageTimer['timer4'])
            }
            _this.pageTimer['timer4'] = setTimeout(()=>{
                if(templatetop<101){
                  continueplus();
                }
            },50)
            _this.communicationService.setAction({id:'ver003',flag:'',sub:'',value:undefined});
        }
        if(templatetop<101){
            continueplus();
        }
    }
    downmouseup(){
        this.downStatus = true;
        clearTimeout(this.pageTimer['timer4']); 
        if(this.templatevalue <= 56  && this.dashboardService.stalls ==1){
            this.templatedown(true);
        }
    }
    upmousedown(){
        let timer;
        let _this = this;
        let templatetop = $('.thermometer').css('top').replace('px', '');
        let continueadd = function(){
            let templatetop = $('.thermometer').css('top').replace('px', '');
            _this.upStatus = false;
            _this.templatechange(Number(templatetop)-1);
            if(_this.pageTimer['timer3']){
                clearTimeout(_this.pageTimer['timer3'])
            }
            _this.pageTimer['timer3'] =  setTimeout(()=>{
                if(templatetop>12){
                    continueadd();
                }
            },50)
            _this.communicationService.setAction({id:'ver003',flag:'',sub:'',value:undefined});
        }
        if(templatetop>12){
            continueadd();
        }
    }
    upmouseup(){
        clearTimeout(this.pageTimer['timer3']);   
        this.upStatus = true;
        if(this.templatevalue <= 56 &&  this.dashboardService.stalls ==1){
            this.templatedown(true);
        }
    }
    
    // 温度计数值变化
    templatechange(value:number):void{
        this.templatevalue = value;
        let intvalue = Math.floor(value);
        // console.log(intvalue)
        if(intvalue<=56){
            this.dashboardService.fanisOK = true;
        }else{
            this.dashboardService.fanisOK = false;
        }
        $('.thermometer').show().stop().css({ 'top': value+ 'px' });
        if(intvalue==56 && this.dashboardService.stalls ==1){
            this.fanFlow(true);
        }else if((intvalue==71) && this.dashboardService.stalls ==1){
            this.fanFlow(false);
        }
    }
    // 温度计自动下降
    templatedown(doOrfalse:boolean):void{
        if(doOrfalse){
            let _this = this;
            let animateTime = 15000;
            let templatetop = $('.thermometer').css('top').replace('px', '');
            // console.log(templatetop);
            if(templatetop<=56){
                let structureline5 = function () {
                    $('.thermometer').show().stop().css({ 'top': templatetop + 'px' }).animate({
                        top: '71px'
                    }, animateTime * ((71-templatetop) / (71 - 11)), "linear",function(){
                        _this.dashboardService.fanisOK = false;
                        _this.fanFlow(false);
                    })
                }
                structureline5();
            }
            
        }else{
             $('.thermometer').show().stop();
        } 
    }
    //水泵转动
    waterpumpFlow(doOrfalse:boolean):void{
        if(doOrfalse){
            let flowTime = 300;
            let _this = this;
            let flow1 = function(){
                $('.waterflow'+_this.waterindex).show().stop().animate({
                    'display':'block'
                },flowTime,function(){
                    $(this).parent().find('div').hide();
                    _this.waterindex +=1; 
                    if(_this.waterindex == 5){
                        _this.waterindex = 1;
                    }
                    flow1();
                }) 
            }
            flow1();
            let flow2 = function(){
                $('.waterpumpAsix').css({
                    'transform':'rotate('+ _this.waterrotate +'deg)'
                }) 
                _this.waterrotate +=3;
            }
            if(this.pageTimer['timer1']){
                clearInterval(this.pageTimer['timer1'])
            }
            this.pageTimer['timer1'] = setInterval(()=>{
                flow2(); 
            },10)
            
        }else{
            this.Initializestructure();
            $('.waterflow' + this.waterindex).stop().show().siblings().hide();
            $('.waterpumpAsix').stop().show().css('transform','rotate('+ this.waterrotate +'deg)');
        }
    }
    //风扇转动
    fanFlow(doOrfalse:boolean):void{
        if(doOrfalse){
            let flowTime = 300;
            let animateTime = 3000;
            let _this = this;
            let flow2 = function(){
                $('.fan').css({
                    'transform':'rotate('+ _this.fanrotate +'deg)'
                }) 
                _this.fanrotate +=3;
            }
            if(this.pageTimer['timer2']){
                clearTimeout(this.pageTimer['timer2'])
            }
            this.pageTimer['timer2'] = setInterval(()=>{
                flow2(); 
            },10);
            let structureline1 = function(){
                $('.arrowstructure4').show().stop().css({'left':'438px','top':'235px','transform':'rotate(180deg)'}).animate({
                    top:'359px'
                },animateTime*(124/212),"linear",function(){
                    $(this).show().stop().css({'left':'441px','top':'363px','transform':'rotate(90deg)'}).animate({
                        left:'529px'
                    },animateTime*(88/212),'linear',function(){
                        $(this).hide();
                        structureline1();
                    })
                })
            }
            structureline1();
        }else{
            clearTimeout(this.pageTimer['timer2']);
            $('.fan').stop().show().css('transform','rotate('+ this.fanrotate +'deg)');
            $('.arrowstructure4').hide().stop().css({'left':'438px','top':'235px','transform':'rotate(180deg)'});
        }
    }
    //真空泵交互
    pressureAnimate(doOrfalse:boolean):void{
        if(doOrfalse){
            this.pressureStatus = true;
            let animateTime = 3000;
            let _this = this;
            let flowTime = 300;
            let flow1 = function(){
                $('.emptyflow'+_this.emptyindex).show().stop().animate({
                    'display':'block'
                },flowTime,function(){
                    $(this).parent().find('div').hide();
                    _this.emptyindex +=1; 
                    if(_this.emptyindex == 5){
                        _this.emptyindex = 1;
                    }
                    flow1();
                }) 
            }
            flow1();
            let structureline1 = function(){
                $('.arrowstructure5').show().stop().css({'left':'458px'}).animate({
                    left:'509px'
                },animateTime*(51/51),"linear",function(){
                    $(this).hide();
                    structureline1();
                })
            }
            structureline1();
            let flow = function(){
                $('.pressurefan').css({
                    'transform':'rotate('+ _this.pressurefanrotate +'deg)'
                }) 
                _this.pressurefanrotate +=2;
            }
            if(this.pageTimer['timer5']){
                clearTimeout(this.pageTimer['timer5'])
            }
            this.pageTimer['timer5'] = setInterval(()=>{
                flow(); 
            },10);
            this.pressuredown(true);
        }else{
            this.pressureStatus = false;
            $('.arrowstructure5').hide().stop().css({'left':'458px'});
            clearTimeout(this.pageTimer['timer5']);
            $('.emptyflow' + this.emptyindex).stop().show().siblings().hide();
            $('.pressurefan').stop().show().css('transform','rotate('+ this.pressurefanrotate +'deg)');
            this.pressuredown(false);
        }
    }
    //获取表盘内的压力值
    getpressureValue(){
        // let pressValue = document.getElementById('watchhand').style.transform.replace(/[^0-9]/ig,""); 
        // console.log(this.gearPanelService.pressureValuerotate)
        setTimeout(()=>{
            if(this.gearPanelService.pressureValuerotate > -130 && this.dashboardService.stalls == 1){
                // console.log('ok')
                this.pressureAnimate(true)
            }else{
                this.pressureAnimate(false)
            }
        },0)
   
    }
    // 表盘内压力值自动下降
    pressuredown(doOrfalse:boolean):void{
        if(doOrfalse){
            let _this = this;
            let animateTime = 50000;
            let structureline5 = function () {
                $('.watchhand').show().stop().css({ 'transform': 'rotate('+ _this.gearPanelService.pressureValuerotate + 'deg)'}).animate({
                    rotatevalue: _this.gearPanelService.pressureValuerotate},{
                        duration : animateTime,
                        queue:false,
                        step: function(now,fx){
                            fx.start = _this.gearPanelService.pressureValuerotate;
                            fx.end = -235;
                            $(this).css({ 'transform': 'rotate('+ now + 'deg)'});
                            if(Math.floor(now) == -235 ){
                                _this.pressureAnimate(false);
                            }
                            _this.gearPanelService.pressureValuerotate = now;
                        }
                    })
                
            }
            // this.gearPanelService.pressisOk = false;
            structureline5();
        }else{
             $('.watchhand').show().stop();
        } 
    }
    //表盘内压力值随刹车踏板变化
    pressurechange(doOrfalse:boolean):void{
        if(doOrfalse){
            let _this = this;
            let animateTime = 2000;
            let structureline5 = function () {
                $('.watchhand').show().stop().css({ 'transform': 'rotate('+ _this.gearPanelService.pressureValuerotate + 'deg)'}).animate({
                    rotatevalue: _this.gearPanelService.pressureValuerotate},{
                        duration : animateTime,
                        queue:false,
                        step: function(now,fx){
                            fx.start = _this.gearPanelService.pressureValuerotate - _this.gearPanelService.space;
                            fx.end = _this.gearPanelService.pressureValuerotate ;
                            $(this).css({ 'transform': 'rotate('+ now + 'deg)'});
                        },
                        complete:function(){
                            // console.log('+0.02');
                            _this.gearPanelService.pressisOk = true;
                        }
                    })
            }
            structureline5();
        }else{
            $('.watchhand').show().stop();
        }
    }


    brakesignalAnimate(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let _this = this;
            let structureline1 = function(){
                $('.arrowstructure6').show().stop().css({'left':'250px','top':'363px','transform':'rotate(90deg)'}).animate({
                    left:'345px'
                },animateTime*(95/203),"linear",function(){
                    $(this).show().stop().css({'left':'348px','top':'360px','transform':'rotate(0deg)'}).animate({
                        top:'252px'
                    },animateTime*(108/203),'linear',function(){
                        $(this).hide();
                        structureline1();
                    })
                })
            }
            structureline1();
        }else{
             $('.arrowstructure6').hide().stop().css({'left':'250px','top':'363px','transform':'rotate(90deg)'});
        }
    }






    //on档页面动画交互
    OnswitchAnimate(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let structureline1 = function(){
                $('.arrowstructure1').show().stop().css({'left':'423px','top':'167px','transform':'rotate(0deg)'}).animate({
                    top:'82px'
                },animateTime*(85/171),"linear",function(){
                    $(this).show().stop().css({'left':'426px','top':'79px','transform':'rotate(90deg)'}).animate({
                        left:'512px'
                    },animateTime*(86/171),'linear',function(){
                        $(this).hide();
                        structureline1();
                    })
                })
            }
            structureline1();
            let structureline2 = function(){
                $('.arrowstructure2').show().stop().css({'left':'278px','top':'79px','transform':'rotate(90deg)'}).animate({
                    left:'355px'
                },animateTime*(77/169),"linear",function(){
                    $(this).show().stop().css({'left':'358px','top':'82px','transform':'rotate(180deg)'}).animate({
                        top:'174px'
                    },animateTime*(92/169),'linear',function(){
                        $(this).hide();
                        structureline2();
                    })
                })
            }
            structureline2();
            let structureline3 = function(){
                $('.arrowstructure3').show().stop().css({'left':'264px'}).animate({
                    left:'332px'
                },animateTime*(68/68),"linear",function(){
                    $(this).hide();
                    structureline3();
                })
            }
            structureline3();
        }else{
            $('.arrowstructure1').hide().stop().css({'left':'423px','top':'167px','transform':'rotate(0deg)'});
            $('.arrowstructure2').hide().stop().css({'left':'278px','top':'79px','transform':'rotate(90deg)'});
            $('.arrowstructure3').hide().stop().css({'left':'264px'});
        }   
    }

    // 初始页面
    Initializestructure(){
        for(let each in this.pageTimer){
            clearTimeout(this.pageTimer[each]);   //清除全局定时器
            clearInterval(this.pageTimer[each]);   //清除全局定时器
        }
    }
    //locl档执行方法
    lockGearFun() {
        this.waterpumpFlow(false);
        this.OnswitchAnimate(false);

        this.pressureAnimate(false);
    }
    //on档执行方法
    onGearFun() {
        this.OnswitchAnimate(true);
        this.waterpumpFlow(true);

        this.getpressureValue()

    }
    ngOnInit(){
         this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })
         this.dashboardService.setGearsFun('on', () => { return this.onGearFun() }) 
         this.dashboardService.setFanAnimate(()=>{return this.fanFlow(true)});
         this.dashboardService.setFanAnimate(()=>{return this.templatedown(true)});
         this.dashboardService.setStopFanAnimate(()=>{return this.fanFlow(false)});
         this.dashboardService.setStopFanAnimate(()=>{return this.templatedown(false)});
        
         this.gearPanelService.setpressBrakeAnimate(()=>{return this.pressurechange(true)});
         this.gearPanelService.setStoppressBrakeAnimate(()=>{return this.pressurechange(false)});

         this.gearPanelService.setbrakesignalAnimate(()=>{return this.brakesignalAnimate(true)});
         this.gearPanelService.setstopbrakesignalAnimate(()=>{return this.brakesignalAnimate(false)});

        //this.gearPanelService.setpressDownAnimate(()=>{return this.pressuredown(true)});
         this.gearPanelService.setpressDownAnimate(()=>{return this.getpressureValue()});
    }
}
