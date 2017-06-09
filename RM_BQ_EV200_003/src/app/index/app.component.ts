import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { HandleErrorService } from '../components/handle_error';
import { AppService } from './app.service';
import { AudioService } from '../components/audio';
import { SimulationService } from '../components/simulation';
import { CommunicationService } from '../components/communication';
import { CloseWindowService } from '../components/close_window';
import { PopupService } from '../components/popup';
import { Resource } from '../interface/resources';
import { MultimeterService } from '../components/multimeter';
import { BalanceService } from '../components/balance';
import { TemperatureService } from '../components/temperature';
declare var $: any;

/*
 * App Component
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
    showOrHide = true;
    showpage = '';
    popups: Resource;
    constructor(
        private appService: AppService,
        private audioService: AudioService,
        private handleErrorService: HandleErrorService,
        private simulationService: SimulationService,
        private communicationService: CommunicationService,
        private closeWindowService: CloseWindowService,
        private popupService: PopupService,
        private multimeterService : MultimeterService,
        private temperatureService : TemperatureService,
        private balanceService : BalanceService
    ) {

    }
    /**
     * 改变路由方法
     * 
     * @param {string} index
     * 
     * @memberOf AppComponent
     */
    changeRouter(index: string): void {
        //根据参数：index，跳转路由
        if(this.showpage === index){
               return false;
        }
        this.showpage = index;
        this.multimeterService.Mdata.multimeterRecover("redProbe","blackProbe","no");
        //去in_memory_data.service.ts中取出一些固定数据(比如讲解文字和音频路径),赋值给音频component
        this.appService.getResource(index)
            .then(resource => {
                this.audioService.audioPlayLoop(resource);
                this.popupService.popupsData = resource.infoText;
                //console.log(this.popupService.popupsData.infoText);
            })
            .catch(error => this.handleErrorService.handleError(error))
        
        if(index === 'test'){
            
            $('.displayboxbalance').hide();
            this.appService.dotestAnimate();
            this.appService.testpageStatus = true;
            this.appService.structurepageStatus = false;
            this.multimeterService.Mdata.modelOrself = 'self';
            this.balanceService.Mdata.dragStatus = true;
            if(this.multimeterService.Mdata.Mint.In1NER_Multi_mAmp_x_x=='1'){
                this.multimeterService.Mdata.multimeterScreenNum = '1.';
            }else if(this.appService.mutimeterres){
                this.multimeterService.Mdata.multimeterScreenNum = '----';
            }
            else{
                this.multimeterService.Mdata.multimeterScreenNum = '0.00';
            }
            if(this.appService.mutimeterres){
                // $('.opacitybox').hide();
                // $('.opacitybox2').show();
                this.multimeterService.Mdata.arrowAnimate1(false);
                this.multimeterService.Mdata.arrowAnimate2(true);
                // $('.alert-part').show();
                // $('.hot').show();
            }else if(this.appService.mutimeterv){
                // $('.opacitybox').show();
                // $('.opacitybox2').hide();
                this.multimeterService.Mdata.arrowAnimate1(true);
                this.multimeterService.Mdata.arrowAnimate2(false);
                // $('.alert-part').show();
                // $('.hot').show();
            }else{
                $('.opacitybox').show();
                $('.opacitybox2').show();
                this.multimeterService.Mdata.arrowAnimate1(true);
                 this.multimeterService.Mdata.arrowAnimate2(true);
                // $('.alert-part').hide();
            }
            if(this.multimeterService.Mdata.multimeterStatus){
                $('.alert-part').show();
                $('.hot').show();
            }
            //  $('.CT').stop().animate({
            //     left:'466px'
            // },500,'linear');
            // if(this.appService.tool_last==='multimeter'){
            //     this.temperatureService.Mdata.closetemperature()
            // }else if(this.appService.tool_last==='temperature'){
            //     this.multimeterService.Mdata.closemultimeter();
            // }
            this.communicationService.setAction({id:'ver003',flag:'',sub:'',value:undefined});
            this.communicationService.setAction({id:'v10',flag:'',sub:'',value:'test'});
            
        }else if(index === 'structure'){
            // $('.displayboxbalance').show();
            this.appService.testpageStatus = false;
            this.appService.structurepageStatus = true;
            this.balanceService.Mdata.dragStatus = false;
            if(this.appService.mutimeterv){
                // $('.opacitybox').hide();
                // $('.opacitybox2').hide();
                this.multimeterService.Mdata.arrowAnimate1(false);
                this.multimeterService.Mdata.arrowAnimate2(false);
                this.multimeterService.Mdata.modelOrself = 'model';
                this.multimeterService.Mdata.multimeterScreenNum = '0.00';
                this.multimeterService.Mdata.multimeterScreenUnit = "V";//去除Ω
                this.multimeterService.Mdata.multimeterScreenrightUnit = "";//去除Ω
                this.multimeterService.Mdata.multimetershowDateUnit = '';
                this.multimeterService.Mdata.dropsuccessNum= '';
                this.multimeterService.Mdata.redposition= '';
                this.multimeterService.Mdata.blackposition='';
            }else if(this.appService.mutimeterres){
                // $('.opacitybox').hide();
                // $('.opacitybox2').show();
                this.multimeterService.Mdata.arrowAnimate1(false);
                this.multimeterService.Mdata.arrowAnimate2(true);
                this.multimeterService.Mdata.circleareaAnimate(false);
                this.multimeterService.Mdata.modelOrself = 'self';
                this.multimeterService.Mdata.multimeterScreenNum = '----';
                this.multimeterService.Mdata.multimeterScreenUnit = "---";//去除Ω
                this.multimeterService.Mdata.multimeterScreenrightUnit = "500v";//去除Ω
                this.multimeterService.Mdata.multimetershowDateUnit = '';
                this.multimeterService.Mdata.dropsuccessNum= '';
                this.multimeterService.Mdata.redposition= '';
                this.multimeterService.Mdata.blackposition='';
            }else if(this.multimeterService.Mdata.Mint.In1NER_Multi_mAmp_x_x=='1'){
                this.multimeterService.Mdata.multimeterScreenNum = '1.';
                this.multimeterService.Mdata.modelOrself = 'self';
                // $('.opacitybox').hide();
                // $('.opacitybox2').show();
                this.multimeterService.Mdata.arrowAnimate1(false);
                this.multimeterService.Mdata.arrowAnimate2(true);
            }
            else{
                this.multimeterService.Mdata.modelOrself = 'self';
                this.multimeterService.Mdata.multimeterScreenNum = '0.00';
                // this.multimeterService.Mdata.multimeterScreenUnit = "";//去除Ω
                this.multimeterService.Mdata.multimeterScreenrightUnit = "";//去除Ω
                this.multimeterService.Mdata.multimetershowDateUnit = '';
                this.multimeterService.Mdata.dropsuccessNum= '';
                this.multimeterService.Mdata.redposition= '';
                this.multimeterService.Mdata.blackposition='';
                // $('.opacitybox').hide();
                // $('.opacitybox2').show();
                this.multimeterService.Mdata.arrowAnimate1(false);
                this.multimeterService.Mdata.arrowAnimate2(true);
            }
            if(this.multimeterService.Mdata.multimeterStatus){
                $('.circlestructure').show()
                $('.redarea').show()
            }else{
                $('.circlestructure').hide()
                $('.redarea').hide()
            }
            setTimeout(()=>{
                $('.balance-contain').stop().animate({
                    left:'573px',top:'384px'
                },500,'linear');
            },0) 
            if(this.balanceService.Mdata.balanceStatus && !this.appService.balanceOnStatus){
                setTimeout(()=>{
                    $('.CT').stop().animate({
                        left:'481px'
                    },500,'linear');
                },500) 
                this.appService.balanceOnStatus = true;
            }
            this.communicationService.setAction({id:'v10',flag:'',sub:'',value:'structure'});
        }
        else{
           $('.displayboxbalance').hide();
           this.balanceService.Mdata.dragStatus = true;
           this.appService.closetestAnimate(); 
           this.appService.testpageStatus = false;
           this.appService.structurepageStatus = false;
           this.multimeterService.Mdata.modelOrself = 'self';
        //    $('.opacitybox').hide();
        //    $('.opacitybox2').hide();
           this.multimeterService.Mdata.arrowAnimate1(false);
            this.multimeterService.Mdata.arrowAnimate2(false);
           if(this.appService.mutimeterres){
                this.multimeterService.Mdata.circleareaAnimate(false);
                this.multimeterService.Mdata.multimeterScreenNum = '----';
                this.multimeterService.Mdata.multimeterScreenUnit = "---";//去除Ω
                this.multimeterService.Mdata.multimeterScreenrightUnit = "500v";//去除Ω
                this.multimeterService.Mdata.multimetershowDateUnit = '';
                this.multimeterService.Mdata.dropsuccessNum= '';
                this.multimeterService.Mdata.redposition= '';
                this.multimeterService.Mdata.blackposition='';
           }else if(this.multimeterService.Mdata.Mint.In1NER_Multi_mAmp_x_x=='1'){
               this.multimeterService.Mdata.multimeterScreenNum = '1.';
           }
           else{
                this.multimeterService.Mdata.multimeterScreenNum = '0.00';
                // this.multimeterService.Mdata.multimeterScreenUnit = "";//去除Ω
                this.multimeterService.Mdata.multimeterScreenrightUnit = "";//去除Ω
                this.multimeterService.Mdata.multimetershowDateUnit = '';
                this.multimeterService.Mdata.dropsuccessNum= '';
                this.multimeterService.Mdata.redposition= '';
                this.multimeterService.Mdata.blackposition='';
           }
           this.communicationService.setAction({id:'ver002',flag:'',sub:'',value:undefined});
        //    $('.CT').stop().animate({
        //         left:'466px'
        //     },500,'linear');
        }
        switch(index){
            case 'function': $('.functionNext').removeClass('hide-important').siblings().addClass('hide-important');$('.functionLast').removeClass('hide-important');break;
            case 'structure':$('.structureNext').removeClass('hide-important').siblings().addClass('hide-important');break;
            case 'test':$('.testLast').removeClass('hide-important').siblings().addClass('hide-important');break;
        }
        this.balanceService.Mdata.dragStart();
    }
    ngOnInit(): void {
        if (this.simulationService.init()) {
            this.simulationService.init();
        }
        if( this.communicationService.init()){
            this.communicationService.init();
        }


    }
    /**
     * 进入课程方法
     * 
     * 
     * @memberOf AppComponent
     */
    enterCourseware() {
        //欢迎页是否隐藏
        this.showOrHide = false;
        //跳转到“principle”路由
        this.changeRouter("structure");
        this.communicationService.setAction({id:'ver001',flag:'',sub:'',value:undefined});
    }
}

