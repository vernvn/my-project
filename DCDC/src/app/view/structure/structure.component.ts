import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { MultimeterService } from '../../components/multimeter';
declare var $: any;
@Component({
   
    selector: 'structure',  
    providers: [
    ],
    styleUrls:['./structure.component.scss'],
    templateUrl: './structure.component.html'
})
export class StructureComponent implements OnInit {
    pageTimerstructure : any = [];
    animateStatus = false;
    constructor(private dashboardService: DashboardService, private multimeterService :　MultimeterService){}
    
    //点火开关闭合打开
    switchclose(openOrClose:boolean){
        if(openOrClose){
            $('.switch-structureClose').addClass('switch-structure').removeClass('switch-structureClose');
        }else{
            $('.switch-structure').addClass('switch-structureClose').removeClass('switch-structure');
        }
    }
    /**
     *有红色电流从从点火开关流入整车控制器V37#和仪表31#
     * @memberOf FunctionComponent
     */
    redflow2v37and31(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let structureline1 = function(){
                $('.line2v37-red').show().stop().css({'left':'251px','height':'2px'}).animate({
                    left:'0'
                },animateTime*(251/291),"linear",function(){
                    $(this).css({'left':'0',"height":"2px"}).stop().animate({
                        height:'42px'
                    },animateTime*(40/291),"linear")
                })
            }
            let structureline2 = function(){
                $('.line31-red').show().stop().css({'top':'-324px'}).animate({
                    top:'-162px'
                },animateTime*(162/162)-800,"linear")
            }
            
            structureline1();
            if(this.pageTimerstructure['timer1']){
                clearTimeout(this.pageTimerstructure['timer1'])
            }
            this.pageTimerstructure['timer1'] = setTimeout(()=>{
                structureline2();
                $('.circle1').addClass('circle1-red').removeClass('circle1');
            },800)
            
       }else{
           $('.line2v37-red').hide().stop().css({'left':'251px','top':'-42px',"height":"2px"});
           $('.line31-red').hide().stop().css({'top':'0'});
           $('.circle1-red').addClass('circle1').removeClass('circle1-red');
       }
    }
    /**
     *电流流入整车控制器后，有红色电流从动力电池正极流入DC-DC转换器
     * @memberOf FunctionComponent
     */
    redflow2DCDC(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 1500;
            let structureline3 = function(){
                $('.powerline-plus-red').show().stop().css({'top':'0','width':'6px'}).animate({
                    top:'-238px'
                },animateTime*(238/269),"linear",function(){
                    $(this).css({'top':'-238px',"width":"6px"}).stop().animate({
                        width:'37px'
                    },animateTime*(31/269),"linear")
                })
            }
            let structureline4 = function(){
                $('.powerline-minus-red').show().stop().css({'left':'-95px','height':'6px'}).animate({
                    left:'0'
                },animateTime*(95/237),"linear",function(){
                    $(this).css({'left':'0',"height":"6px"}).stop().animate({
                        height:'148px'
                    },animateTime*(142/237),"linear")
                })
            }
            structureline3();
            if(this.pageTimerstructure['timer2']){
                clearTimeout(this.pageTimerstructure['timer2'])
            }
            
            this.pageTimerstructure['timer2'] = setTimeout(()=>{
                $('.switch-structure2').addClass('switch-structure2Close').removeClass('switch-structure2');
                structureline4();
            },animateTime)
            
       }else{
           $('.powerline-plus-red').hide().stop().css({'top':'251px',"width":"6px"});
           $('.powerline-minus-red').hide().stop().css({'left':'-95px','height':'6px'});
           $('.switch-structure2Close').addClass('switch-structure2').removeClass('switch-structure2Close');
       }
    }
    /**
     *紫色电流从整车控制器V62#流入DC-DC转换器A1#；
     * @memberOf FunctionComponent
     */
    redflowv622DCDC(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let structureline5 = function(){
                $('.lineA1twoV62-purple').show().stop().css({'top':'-152px'}).animate({
                    top:'-76px'
                },animateTime*(76/76),"linear")
            }
            structureline5(); 
       }else{
           $('.lineA1twoV62-purple').hide().stop().css({'top':'-152px'});
       }
    }

    /**
     *有蓝色电流从DC-DC转换器A2#流入整车控制器V23#和仪表12#
     * @memberOf FunctionComponent
     */
    redflow2v23and12(doOrfalse:boolean):void{
        if(doOrfalse){
            let animateTime = 3000;
            let structureline6 = function(){
                $('.linev23-blue').show().stop().css({'top':'0'}).animate({
                    top:'-202px'
                },animateTime*(202/202),"linear")
            }
            let structureline7 = function(){
                $('.lineA2two12-blue1').show().stop().css({'top':'-128px','width':'2px'}).animate({
                    top:'-64px'
                },animateTime*(64/264),"linear",function(){
                    $(this).css({'top':'-64px',"width":"2px"}).stop().animate({
                        width:'202px'
                    },animateTime*(200/264),"linear")
                })
            }
            let structureline8 = function(){
                $('.lineA2two12-blue2').show().stop().css({'top':'0'}).animate({
                    top:'-78px'
                },animateTime/2*(78/78),"linear")
            }
            structureline7();
            
            if(this.pageTimerstructure['timer6']){
                clearTimeout(this.pageTimerstructure['timer6'])
            }
            this.pageTimerstructure['timer6'] = setTimeout(()=>{
                structureline6();
                // structureline8();
                $('.circle2').addClass('circle2-blue').removeClass('circle2');
            },1200)
            if(this.pageTimerstructure['timer7']){
                clearTimeout(this.pageTimerstructure['timer7'])
            }
            this.pageTimerstructure['timer7'] = setTimeout(()=>{
                // structureline6();
                structureline8();
                // $('.circle2').addClass('circle2-blue').removeClass('circle2');
            },3000)
              
       }else{
           $('.linev23-blue').hide().stop().css({'top':'0'});
           $('.lineA2two12-blue1').hide().stop().css({'top':'-128px','width':'2px'});
           $('.lineA2two12-blue2').hide().stop().css({'top':'0'});
           $('.circle2-blue').addClass('circle2').removeClass('circle2-blue');
           
       }
    }

    //关闭
    lockGearFun(){
        this.multimeterService.Mdata.getlockOron('lock');
        this.multimeterService.Mdata.mutimeterceliang();
        for(let each in this.pageTimerstructure){
            clearTimeout(this.pageTimerstructure[each]);   //清除全局定时器
            clearInterval(this.pageTimerstructure[each])
        }
        this.redflow2v37and31(false);
        this.redflowv622DCDC(false);
        this.switchclose(true);
        this.redflow2DCDC(false);
        this.redflow2v23and12(false);
        $('.switch-structure3-red').addClass('switch-structure3').removeClass('switch-structure3-red');
    }
    //打开
    onGearFun(){
        this.multimeterService.Mdata.getlockOron('on');
        this.multimeterService.Mdata.mutimeterceliang();
        this.redflow2v37and31(true);
        if(this.pageTimerstructure['timer3']){
            clearTimeout(this.pageTimerstructure['time3'])
        }
        this.pageTimerstructure['timer3'] = setTimeout(()=>{
            this.redflow2DCDC(true);
            this.redflowv622DCDC(true);
            
        },3500)
        if(this.pageTimerstructure['timer4']){
            clearTimeout(this.pageTimerstructure['time4'])
        }
        this.pageTimerstructure['timer4'] = setTimeout(()=>{
            this.redflow2v23and12(true);
        },6500)
        this.switchclose(false); 
        $('.switch-structure3').addClass('switch-structure3-red').removeClass('switch-structure3');
        
        // setInterval(()=>{
        //     for(let each in this.pageTimerstructure){
        //         clearTimeout(this.pageTimerstructure[each]);   //清除全局定时器
        //     }
        // },500)
    }
     //生命周期钩子函数
    ngOnInit() {
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() });
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() });
    }
}
