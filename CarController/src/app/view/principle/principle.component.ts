import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { ChargeSwitchService } from '../../components/charge_switch';
declare var $: any,
    InitializePrinciple: any,
    InitializeCircuit: any,
    principleAnimate: any,
    circuitAnimate: any;
@Component({
    selector: 'principle', 
    providers: [
    ],
    templateUrl: './principle.component.html',
    styleUrls: ['./principle.component.scss']
})
export class PrincipleComponent implements OnInit {
    animateStatus = false;
    arrowTurnStatus = false;
    animateStatus5 = false;
    pageTimerprinciple = [];
    switchStatus = false;
    switchonStatuspublic = false;
    chargeStatus = false;
    constructor(private dashboardService: DashboardService, private gearpanelService: GearPanelService,private chargeSwitchService: ChargeSwitchService){}
     /**
     * 把要执行的循环动画都绑定到一个数组中，统一循环
     */
    loopB = [];
     /**
     * 执行的循环动画在数组中的下标
     */
    loopBIndex: number = 0;
     /**
     * 是否执行动画循环
     */
    setTimeoutGO: boolean = true;
    setTimeoutGO2: boolean = true;
    duration;
    /**
     * 执行所有的循环动画
     */
    loopBFun() {
        for (let i in this.loopB) {
            this.loopB[i]();
        }
    }
    loop(obj, start, max, duration, direction){
        let self = this;
        if(!obj) return false;
        start = start || 0;
        max = max || 48;
        this.duration = duration || 20;
        let timer = [];
       this.loopB[this.loopBIndex] = () => {
            $(obj).show();
            // 条件判断，以跳出循环动画
            if(obj.id === 'arrow-turn2' || obj.id === 'arrow-turn3'){
                if(!self.arrowTurnStatus){
                    this.setTimeoutGO2 = false;
                    $(obj).hide();
                    return;
                }
            }else if(obj.id === 'redpointbox5'){
                if(!self.animateStatus5){
                    // this.setTimeoutGO2 = false;
                    $(obj).hide();
                    return;
                }
            }
            else{
                if(!self.animateStatus){
                    this.setTimeoutGO = false;
                    $(obj).hide();
                    return;
                }
            }
            if(start > max) start = 0;
            // 下面是每隔一段时间执行动画的业务逻辑部分，可以修改
            if(direction){
                switch(obj.id){
                    case 'redpointbox4' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox3' : obj.style.marginTop = start + 'px';break;
                    case 'redpointbox' :  obj.style.marginTop = -start + 'px';break;
                    case 'redpointbox2' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox5' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox6' : obj.style.marginTop = -start + 'px';break;
                    case 'redpointbox7' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox8' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox9' : obj.style.marginLeft = -start + 'px';break;
                }
            }else{
                switch(obj.id){
                    case 'arrow-turn2' : obj.style.marginLeft = start + 'px';break;
                    case 'arrow-turn3' : obj.style.marginLeft = start + 'px';break;
                    case 'redpointbox4' : obj.style.marginLeft = start + 'px';break;
                    case 'redpointbox3' : obj.style.marginTop = -start + 'px';break;
                    case 'redpointbox' :  obj.style.marginTop = start + 'px';break;
                    case 'redpointbox2' : obj.style.marginLeft = start + 'px';break;
                    case 'redpointbox5' : obj.style.marginLeft = start + 'px';break;
                    case 'redpointbox6' : obj.style.marginTop = start + 'px';break;
                    case 'redpointbox7' : obj.style.marginLeft = start + 'px';break;
                    case 'redpointbox8' : obj.style.marginLeft = -start + 'px';break;
                    case 'redpointbox9' : obj.style.marginLeft = -start + 'px';break;
                }
            }
            // 该帧动画执行完毕后，width + 1，然后进行下一帧动画
            start++;
            // timer = setTimeout(run, duration);
        };
        this.loopBIndex += 1;
    }
    requestBnimation(boolean) {
        if (boolean) {
            this.setTimeoutGO = true;
            this.animateStatus = true;
        }
        if (this.loopBIndex > 0) {
            this.loopBFun();
        }
        if (this.setTimeoutGO) {
            setTimeout(() => this.requestBnimation(false), this.duration);

        }else if(this.setTimeoutGO2){
            setTimeout(() => this.requestBnimation(false), this.duration);
        }
        else {
            this.loopB = [];
            this.loopBIndex = 0;
        }
    }
    /**
     * On档双绞线脉冲闪烁
     * @memberOf FunctionComponent
     */
    twistedPairSparkle(doOrfalse:boolean):void{
        let main = document.getElementById('arrow-turn2');
        let self = this;
        self.arrowTurnStatus = doOrfalse ; 
        this.loop(main,0,48,20,'')
    }

    /**
     * 另一条档双绞线脉冲闪烁
     * @memberOf FunctionComponent
     */
    anothertwistedPairSparkle(doOrfalse:boolean):void{
        let main = document.getElementById('arrow-turn3');
        let self = this;
        self.arrowTurnStatus = doOrfalse ; 
        this.loop(main,0,48,20,'')
    }

    /**
     * On档页面动画
     * @memberOf FunctionComponent
     */
    OnAnimate(doOrfalse:boolean):void{
        if(doOrfalse){
            let _this = this;
            let animateTime = 3000;
            let structureline1 = function(){
                $('.switch2vcu').show().stop().css({'height':'3px','left':'-264px'}).animate({
                    left:'0'
                },animateTime*(264/286),"linear",function(){
                    $(this).show().stop().css({'height':'3px','left':'0'}).animate({
                        height:'25px'
                    },animateTime*(22/286),'linear',function(){
                        _this.switchonStatuspublic = true;
                        _this.publicAnimate(true);
                        structureline2();
                        structureline4();
                        structureline5();
                        structureline7();
                        _this.twistedPairSparkle(true);
                        _this.redpointFlow(true,true);
                    })
                })
            }
            structureline1();
            
            let structureline2 = function(){
                $('.arrow1').show().stop().css({'left':'400px'}).animate({
                    left:'347px'
                },animateTime*(53/53),"linear",function(){
                    $(this).hide();
                    structureline2();
                })
            }
            let structureline4 = function(){
                $('.arrow6').show().stop().css({'left':'543px','top':'211px','transform':'rotate(-90deg)'}).animate({
                    left:'524px'
                },animateTime*(19/60),"linear",function(){
                    $(this).show().stop().css({'left':'520px','top':'207px','transform':'rotate(0deg)'}).animate({
                        top:'166px'
                    },animateTime*(41/60),'linear',function(){
                        $(this).hide();
                        structureline4();
                    }) 
                })
            }
            let structureline5 = function(){
                $('.arrow5').show().stop().css({'top':'213px'}).animate({
                    top:'173px'
                },animateTime*(40/40),"linear",function(){
                    $(this).hide();
                    structureline5();
                })
            }
            let structureline7 = function(){
                $('.arrow7').show().stop().css({'left':'193px'}).animate({
                    left:'258px'
                },animateTime*(65/65),"linear",function(){
                    $(this).hide();
                    structureline7();
                })
            }
            
        }else{
             $('.switch2vcu').hide().stop().css({'height':'2px','left':'-264px'});
             $('.arrow1').hide().stop().css({'left':'400px'});
             $('.arrow5').hide().stop().css({'top':'213px'});
             $('.arrow7').hide().stop().css({'left':'193px'});
             $('.arrow6').hide().stop().css({'left':'543px','top':'211px','transform':'rotate(180deg)'});
             this.switchonStatuspublic = false;
             this.publicAnimate(false);
             this.twistedPairSparkle(false);
             this.redpointFlow(true,false);
        }
    }

    //   on档且踩下刹车的动画
    brakeAnimate(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let structureline3 = function(){
                $('.arrow4').show().stop().css({'left':'488px','top':'281px','transform':'rotate(-90deg)'}).animate({
                    left:'483px'
                },animateTime*(5/103),"linear",function(){
                    $(this).show().stop().css({'left':'481px','top':'278px','transform':'rotate(0deg)'}).animate({
                        top:'180px'
                    },animateTime*(98/103),'linear',function(){
                        $(this).hide();
                        structureline3();
                    })
                    
                })
            }
            structureline3();
        }else{
            $('.arrow4').hide().stop().css({'left':'488px','top':'281px','transform':'rotate(180deg)'});
        }
    }

    /**
     *整车到电池管理模块，整车到DCDC公共箭头页面交互；
     * @memberOf FunctionComponent
     */
    publicAnimate(doOrfalse:boolean):void{
        let _this = this;
        if(doOrfalse){
            let animateTime = 3000;
            let structureline2 = function(){
                $('.arrow2').show().stop().css({'left':'546px','top':'138px','transform':'rotate(90deg)'}).animate({
                    left:'674px'
                },animateTime*(128/149),"linear",function(){
                    $(this).show().stop().css({'left':'678px','top':'142px','transform':'rotate(180deg)'}).animate({
                        top:'163px'
                    },animateTime*(21/149),'linear',function(){
                        $(this).hide();
                        structureline2()
                    })
                })
            }
            structureline2();

            let structureline3 = function(){
                $('.arrow3').show().stop().css({'left':'425px','top':'190px','transform':'rotate(180deg)'}).animate({
                    top:'314px'
                },animateTime*(124/258),"linear",function(){
                    $(this).show().stop().css({'left':'422px','top':'317px','transform':'rotate(270deg)'}).animate({
                        left:'288px'
                    },animateTime*(134/258),'linear',function(){
                        $(this).hide();
                        structureline3();
                    })
                })
            }
            structureline3();
        }else{
            $('.arrow2').hide().stop().css({'left':'546px','top':'138px','transform':'rotate(90deg)'});
            $('.arrow3').hide().stop().css({'left':'425px','top':'190px','transform':'rotate(180deg)'});
        }
        
    }

    /**
     * On档从动力电池到高压控制盒、高压控制盒到电机控制器的高压直流线内部有红色小圆点流动方向通过布尔控制，true正向，false反向
     * @memberOf FunctionComponent
     */
    redpointFlow(direction:boolean,doOrfalse:boolean):void{
        let main = document.getElementById('redpointbox');
        let main2 = document.getElementById('redpointbox2');
        let main3 = document.getElementById('redpointbox3');
        let main4 = document.getElementById('redpointbox4');
        let main6 = document.getElementById('redpointbox6');
        let main7 = document.getElementById('redpointbox7');
        let self = this;
        self.animateStatus = doOrfalse ; 
        this.loop(main,0,10,20,direction);
        this.loop(main2,0,10,20,direction);
        this.loop(main3,0,10,20,true);
        this.loop(main4,0,10,20,true);
        this.loop(main6,0,15,20,true);
        this.loop(main7,0,15,20,true);
    }
    /**
     * On档有小圆球在三相动力线上流动方向通过布尔控制，true正向，false反向
     * @memberOf FunctionComponent
     */
    circleOnhreepower(direction:boolean,doOrfalse:boolean){
        let main5 = document.getElementById('redpointbox5');
        let self = this;
        self.animateStatus5 = doOrfalse ; 
        this.loop(main5,0,10,20,direction);
    }
    //生命周期钩子函数
    ngOnInit() {
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })
        this.dashboardService.setSpeedIsFixedFun(0, () => { return this.setSpeedIsFixedFun() })
        this.gearpanelService.setBrakesFun('press', () => { return this.pressBrakeFun() });
        this.gearpanelService.setBrakesFun('loosen', () => { return this.loosenBrakeFun() })
        this.gearpanelService.setAcceleratorsFun('add', () => { return this.addAcceleratorFun() })
        this.gearpanelService.setAcceleratorsFun('minus', () => { return this.minusAcceleratorFun() })
        this.gearpanelService.setAcceleratorsFun('loosen', () => { return this.loosenAcceleratorFun() })
        // this.gearpanelService.setAcceleratorsFun('rack', () => { return this.rackAcceleratorFun() })
        this.dashboardService.setspeedIsStatusFun('rack', () => { return this.setspeedIsStatusFun() })
        this.gearpanelService.setStopAnimate(()=>{return this.onGearFun()})
        this.gearpanelService.setBrakeAnimate(()=>{return this.brakeAnimate(true)});
        this.gearpanelService.setStopBrakeAnimate(()=>{return this.brakeAnimate(false)});
        // this.dashboardService.setBrakeAnimate(()=>{return this.brakeAnimate(true)});
        // this.dashboardService.setStopBrakeAnimate(()=>{return this.brakeAnimate(false)});
        // this.chargeSwitchService.setBrakeAnimate(()=>{return this.brakeAnimate(true)});
        // this.chargeSwitchService.setStopBrakeAnimate(()=>{return this.brakeAnimate(false)});

        this.chargeSwitchService.setChargeAnimate(()=>{return this.chargeAnimate()});
        this.chargeSwitchService.setStopChargeAnimate(()=>{return this.stopchargeAnimate()});

        this.gearpanelService.setbrakesignalAnimate(()=>{return this.brakeAnimate(true)});
        this.gearpanelService.setstopbrakesignalAnimate(()=>{return this.brakeAnimate(false)});
    }
    //充电页面箭头动画
    chargearrowAnimate(doOrfalse:boolean):void{
        let _this = this;
        if(doOrfalse){
            let animateTime = 3000;
            let structureline8 = function(){
                $('.arrow8').show().stop().css({'left':'666px'}).animate({
                    left:'506px'
                },animateTime*(160/160),"linear",function(){
                    $(this).hide();
                    structureline8()
                })
            }
            structureline8();

            let structureline9 = function(){
                $('.arrow9').show().stop().css({'top':'290px'}).animate({
                    top:'184px'
                },animateTime*(106/106),"linear",function(){
                    $(this).hide();
                    structureline9();
                })
            }
            structureline9();
        }else{
            $('.arrow8').hide().stop().css({'left':'666px'});
            $('.arrow9').hide().stop().css({'top':'290px'});
        }
    }
    //充电时高压直流小圆球交互
    chargehighRedpoint(direction:boolean,doOrfalse:boolean){
        let main2 = document.getElementById('redpointbox2');
        let main3 = document.getElementById('redpointbox3');
        let main4 = document.getElementById('redpointbox4');
        let main6 = document.getElementById('redpointbox6');
        let main7 = document.getElementById('redpointbox7');
        let main8 = document.getElementById('redpointbox8');
        let main9 = document.getElementById('redpointbox9');
        let self = this;
        self.animateStatus = doOrfalse ; 
        this.loop(main2,0,10,20,false);
        this.loop(main3,0,10,20,false);
        this.loop(main4,0,10,20,true);
        this.loop(main6,0,15,20,true);
        this.loop(main7,0,15,20,true);
        this.loop(main8,0,10,20,direction);
        this.loop(main9,0,10,20,direction);
    }
    //充电页面交互
    chargeAnimate(){
        setTimeout(()=>{
            $('.chargegun').animate({
                left:'689px',
                top:'330px'
            },1000,'linear')
        },0);
        if(this.pageTimerprinciple['timer12']){
            clearTimeout(this.pageTimerprinciple['timer12'])
        }
        this.pageTimerprinciple['timer12'] = setTimeout(()=>{
            this.Initializeprinciple();
            this.switchonStatuspublic = true;
            this.publicAnimate(true);
            this.twistedPairSparkle(true);
            this.anothertwistedPairSparkle(true);
            this.chargeStatus = true;
            this.chargearrowAnimate(true);
            this.chargehighRedpoint(true,true);
            this.requestBnimation(true);
        },1000)
    }
    //停止充电页面交互
    stopchargeAnimate(){
        this.Initializeprinciple();
        this.switchonStatuspublic = false;
        this.publicAnimate(false);
        this.twistedPairSparkle(false);
        this.anothertwistedPairSparkle(false);
        this.chargeStatus = false;
        this.chargearrowAnimate(false);
        this.chargehighRedpoint(true,false);
    }
    // 初始化功能页面
    Initializeprinciple(){
        for(let each in this.pageTimerprinciple){
            clearTimeout(this.pageTimerprinciple[each]);   //清除全局定时器
        }
        this.animateStatus = false;
    }
    //locl档执行方法
    lockGearFun() {
        this.Initializeprinciple();
        this.switchStatus = false;
        this.OnAnimate(false);
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        this.animateStatus5 = false;
    }
    //on档执行方法
    onGearFun() {
        this.Initializeprinciple();
        this.switchStatus = true;
        this.OnAnimate(true); 
        this.requestBnimation(true);
    }
    // 刹车执行的方法
    pressBrakeFun(){
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        if(this.gearpanelService.isBrake && this.dashboardService.stalls){
            if(this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1){
                // this.Initializeprinciple();
                this.pageTimerprinciple['timer2'] = setTimeout(()=>{
                    if($('.datashow').html() == 0){
                        this.redpointFlow(false,true);
                    }else{
                        this.redpointFlow(false,true);
                        this.circleOnhreepower(false,true);
                    }
                },100);
            }   
        }
    }
    //松开刹车执行的方法
    loosenBrakeFun(){
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        if(this.dashboardService.dackspeed <=13){
            if(this.gearpanelService.controlStalls === 1){
                    // this.Initializeprinciple();
                    this.pageTimerprinciple['timer3'] = setTimeout(()=>{
                        this.circleOnhreepower(true,true);
                        this.redpointFlow(true,true);
                    },100);
            }else if(this.gearpanelService.controlStalls === 3){
                    // this.Initializeprinciple();
                    this.pageTimerprinciple['timer4'] = setTimeout(()=>{
                        this.circleOnhreepower(true,true);
                        this.redpointFlow(true,true);
                    },100); 
            }else if(this.gearpanelService.controlStalls === 2){
                // this.Initializeprinciple();
                this.pageTimerprinciple['timer9'] = setTimeout(()=>{
                    this.redpointFlow(true,true);
                },100); 
            }
        }
        
    }
    //加油门执行的方法
    addAcceleratorFun(){
        if(this.dashboardService.stalls){
            if(this.gearpanelService.controlStalls === 1 || this.gearpanelService.controlStalls===3){
                console.log('add');
                this.gearpanelService.addspeedIndex +=1;
                if(this.gearpanelService.addspeedIndex==1){
                    // this.Initializeprinciple();
                    this.pageTimerprinciple['timer10'] = setTimeout(()=>{
                        this.circleOnhreepower(true,true);
                        this.redpointFlow(true,true);
                    },100); 
                }
            }
        }
    }
    //减油门执行的方法
    minusAcceleratorFun(){
        if(!this.gearpanelService.isBrake){
            if(this.dashboardService.stalls){
                this.gearpanelService.minusspeedIndex +=1;
                if(this.gearpanelService.minusspeedIndex==1){
                    // this.Initializeprinciple();
                    console.log('minus')
                    this.pageTimerprinciple['timer5'] =  setTimeout(()=>{
                        this.redpointFlow(false,true);
                        this.circleOnhreepower(false,true);
                    },100);
                }
            }
        }
    }
    //松油门执行的方法
    loosenAcceleratorFun(){
        // console.log('loose')
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        if(this.gearpanelService.controlStalls === 2){
            
        }else{
            if(this.dashboardService.stalls && !this.gearpanelService.isBrake){
                // this.Initializeprinciple();
                this.pageTimerprinciple['timer6'] =  setTimeout(()=>{
                    this.redpointFlow(false,true);
                    this.circleOnhreepower(false,true);
                },100);
            }
        }   
    };
    //油门不在降低执行的方法
    setspeedIsStatusFun(){
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        if($('.datashow').html()!=0){
            // console.log('dark'); 
            // this.Initializeprinciple();
            if(this.dashboardService.stalls){  
                this.pageTimerprinciple['timer7'] = setTimeout(()=>{
                    this.redpointFlow(true,true);
                    this.circleOnhreepower(true,true);
                },100);
            }
        } 
    }  
    //所有车速为0执行的方法
    setSpeedIsFixedFun(){
        this.gearpanelService.addspeedIndex = 0;
        this.gearpanelService.minusspeedIndex = 0;
        if(this.dashboardService.stalls){
            // if(this.gearpanelService.controlStalls === 1 || this.gearpanelService.controlStalls === 3){
                if(this.gearpanelService.isBrake && $('.datashow').html()!=0){
                    // this.Initializeprinciple();
                    this.pageTimerprinciple['timer8'] = setTimeout(()=>{
                        this.circleOnhreepower(true,false);
                        this.redpointFlow(true,true);
                        $('.redbox3').hide();
                        $('.redbox4').hide();
                    },100);
                }
            // }
        }
    }  
}

