import { Component ,Injectable} from '@angular/core';
import { MultimeterService } from './multimeter.service';
import {AppService} from '../../index/app.service'
declare var $: any;
@Component({
    selector: 'multimeter',
    styleUrls: [ './multimeter.component.scss' ],
    templateUrl: './multimeter.component.html',
    providers: []
})
@Injectable()
export class MultimeterComponent {
    multimeterServiceMdata = this.multimeterService.Mdata;
    multimeterServiceMout = this.multimeterService.Mout;
    // modelOrself = 'model';
    constructor(public multimeterService: MultimeterService, public appService : AppService) {

    }
    ngOnInit(): void {
        // setInterval(() => {
        //     this.multimeterServiceMdata = this.multimeterService.Mdata;//万用表service中的基本参数
        //     this.multimeterServiceMout = this.multimeterService.Mout;
        //     console.log(this.multimeterService.Mdata.multimeterStatus);
            
        // }, 1000);
    }
    multimeter() {
        // this.checkopacity();
        this.multimeterService.Mdata.multimeter();

    };
    dragStart() {
        this.multimeterService.Mdata.dragStart();

    }
    multimeterCircle(){
       this.multimeterService.Mdata.multimeterCircle();
       
    }
    multimeterShortcutHtml(href) {
        this.multimeterService.Mdata.multimeterShortcutHtml(href);

    }
    multimeteroff() {
        this.multimeterService.Mdata.modelOrself = 'self';
        // $('.alert-part').hide();
        // $('.closeAlertPart').hide();
        // $('.hot').hide();
        this.checkopacity();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimeteroff();

    };
    multimetervv() {
        this.multimeterService.Mdata.modelOrself = 'self';
        this.checkopacity();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimetervv();

    };
    multimeterv() {
        if(!this.multimeterService.Mdata.multimetervisOrnot){
            if(this.appService.structurepageStatus){
                this.multimeterService.Mdata.modelOrself = 'model';
            }else{
                this.multimeterService.Mdata.modelOrself = 'self';
            }
            this.multimeterService.Mdata.multimeterv();
        }else{
            return;
        }
        
        // $('.alert-part').show();
        // $('.closeAlertPart').show();
        // $('.hot').show();
        if(this.appService.structurepageStatus){
            //  $('.opacitybox').hide();
             this.multimeterServiceMdata.arrowAnimate1(false);
        }else if(this.appService.testpageStatus){
            // $('.opacitybox').show();
            this.multimeterServiceMdata.arrowAnimate1(true);
        }
        // $('.opacitybox2').hide();
        this.multimeterServiceMdata.arrowAnimate2(false);
        this.appService.mutimeterv = true;
        this.appService.mutimeterres = false;
        

    };
    multimetermv() {
        this.multimeterService.Mdata.modelOrself = 'self';
        this.checkopacity();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimetermv();

    };

    multimeterres() {
        if(!this.multimeterService.Mdata.multimeterinsulated){
            this.multimeterService.Mdata.multimeterres();
        }else{
            return;
        }
        this.multimeterService.Mdata.modelOrself = 'self';
        
        if(this.appService.testpageStatus){
            // $('.opacitybox2').show();
            this.multimeterServiceMdata.arrowAnimate2(true);
        }else if(this.appService.structurepageStatus){
            // $('.opacitybox2').show();
            this.multimeterServiceMdata.arrowAnimate2(true);
        }else{
        //    $('.opacitybox2').hide(); 
           this.multimeterServiceMdata.arrowAnimate2(false);
        }
        // $('.opacitybox').hide();
        this.multimeterServiceMdata.arrowAnimate1(false);
        this.appService.mutimeterres = true;
        this.appService.mutimeterv = false;
        

    };
    multimeternofine() {
        this.multimeterService.Mdata.modelOrself = 'self';
        this.checkopacity();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimeternofine();

    };
    multimeterAA() {
        this.multimeterService.Mdata.modelOrself = 'self';
        this.checkopacity();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimeterAA();



    };
    multimeterk() {
        
        this.checkopacity();
        this.multimeterService.Mdata.modelOrself = 'self';
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.multimeterService.Mdata.multimeterk();

    };
    multimetermA() {
        this.multimeterService.Mdata.modelOrself = 'self';
        this.multimeterService.Mdata.multimetermA();
        this.appService.mutimeterv = false;
        this.appService.mutimeterres = false;
        this.checkopacity();
    }
    closemultimeter() {
        this.multimeterService.Mdata.closemultimeter();
        $('.circlestructure').hide();
        $('.redarea').hide();
        this.appService.mutimeterres = false;
        this.appService.mutimeterv = false;
        $('.alert-part').hide();
        $('.hot').hide();

    };
    onMouseover(){
        //this.multimeterService.Mdata.circleareaAnimate(false);
        // $('.clickcircle').css('zIndex',3);
    }
    onMouseout(){
        //this.multimeterService.Mdata.circleareaAnimate(true);
        // $('.clickcircle').css('zIndex',0);
    }
    checkopacity(){
        if(this.appService.structurepageStatus){
            // $('.opacitybox').hide();
            // $('.opacitybox2').show();
            this.multimeterServiceMdata.arrowAnimate1(false);
            this.multimeterServiceMdata.arrowAnimate2(true);
        }else if(this.appService.testpageStatus){
            // $('.opacitybox').show();
            // $('.opacitybox2').show();
             this.multimeterServiceMdata.arrowAnimate1(true);
            this.multimeterServiceMdata.arrowAnimate2(true);
        }
    }
    change2pointer(){
        $('.multimeter-hotarea').css('cursor','pointer');
    }
    change2default(){
        $('.multimeter-hotarea').css('cursor','default');
    }

    removefalseConnect(){
        this.multimeterService.Mdata.multimeterredRecover();
        this.multimeterService.Mdata.multimeterblackRecover();
        this.multimeterService.Mdata.redposition = '';
        this.multimeterService.Mdata.blackposition = '';
        this.multimeterService.Mdata.multimeterblackRecover();
        this.multimeterService.Mdata.falseconnectStatus = false;
        this.multimeterService.Mdata.dropsuccessNum = '';
    }


    //测量点记录
    recordProgress = function () {
        this.multimeterService.Mdata.recordProgress();

    }
}