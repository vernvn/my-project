import { Component, OnInit} from '@angular/core';
import { AppService } from '../../index/app.service';
import { MultimeterService } from '../../components/multimeter';
declare var $: any;
@Component({
    selector: 'test', 
    providers: [
    ],
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
    hotareaStatus : boolean = true;
    constructor(private appService: AppService, private multimeterService:MultimeterService){}
    hotareaAnimate(doOrfalse:boolean){
        if(doOrfalse){
            let hotarea = function (){
                $('.hotareatest').show().stop().animate({
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
            $('.hotareatest').hide().stop();
        }
    }
    doAnimate(){
       this.hotareaAnimate(true);
       $('.alert-part').hide();
       $('.hot').hide();
    }
    closeAnimate(){
       this.hotareaAnimate(false);
       this.hotareaStatus = true;
       
    }
    ngOnInit(){
        this.appService.setTextAnimate('open',() => { return this.doAnimate()})
        this.appService.setTextAnimate('close',() => { return this.closeAnimate()})
    }
    hotareaMouseover(){
        // this.hotareaStatus = true;
        // this.hotareaAnimate(false);
        // $('.hotareatest').show();
        // $('.hotareareal').css('zIndex',6);
    }
    hotareaMouseout(){
        // if(this.hotareaStatus){
        //     this.hotareaAnimate(true);
        //     $('.hotareatest').show();
        // }
    }
    alertPartShow(){
        this.hotareaAnimate(false);
        $('.hotareatest').hide();
        this.hotareaStatus = false;
        $('.alert-part').show();
        $('.hot').show();
    }
    alertPartHide(){
        this.hotareaAnimate(true);
        $('.hotareatest').show();
        this.hotareaStatus = true
        $('.alert-part').hide();
        $('.hot').hide();
        if(this.multimeterService.Mdata.multimeterStatus){
            this.multimeterService.Mdata.multimeterredRecover();
            this.multimeterService.Mdata.multimeterblackRecover();
        }
        if(this.multimeterService.Mdata.multimeterinsulated){
            this.multimeterService.Mdata.circleareaAnimate(false);
            this.multimeterService.Mdata.multimeterScreenNum = '----';
            this.multimeterService.Mdata.multimetershowDateUnit= '';
            this.multimeterService.Mdata.multimeterScreenUnit = '---';
            this.multimeterService.Mdata.dropsuccessNum = '';
            this.multimeterService.Mdata.redposition = '';
            this.multimeterService.Mdata.blackposition = '';
        }
    }
}

