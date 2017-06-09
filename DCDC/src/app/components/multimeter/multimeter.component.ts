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
    modelOrself = 'model';
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
        this.checkopacity();
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
        this.checkopacity();
        this.multimeterService.Mdata.multimeteroff();

    };
    multimetervv() {
        this.modelOrself = 'self';
        this.checkopacity();
        this.multimeterService.Mdata.multimetervv();

    };
    multimeterv() {
        this.modelOrself = 'model';
        this.checkopacityonV();
        this.multimeterService.Mdata.multimeterv();

    };
    multimetermv() {
        this.modelOrself = 'self';
        this.checkopacity();
        this.multimeterService.Mdata.multimetermv();

    };

    multimeterres() {
        this.modelOrself = 'self';
        this.checkopacityonRes();
        this.multimeterService.Mdata.multimeterres();

    };
    multimeternofine() {
        this.modelOrself = 'self';
        this.checkopacity();
        this.multimeterService.Mdata.multimeternofine();

    };
    multimeterAA() {
        this.modelOrself = 'self';
        this.checkopacity();
        this.multimeterService.Mdata.multimeterAA();


    };
    multimeterk() {
        this.modelOrself = 'self';
        this.checkopacity();
        this.multimeterService.Mdata.multimeterk();

    };
    multimetermA() {
        this.modelOrself = 'self';
        this.multimeterService.Mdata.multimetermA();
        this.checkopacity();
    }
    closemultimeter() {
        this.multimeterService.Mdata.closemultimeter();
        $('.circlestructure').hide();

    };
    onMouseover(){
    }
    onMouseout(){
    }
    change2pointer(){
        $('.multimeter-hotarea').css('cursor','pointer');
    }
    change2default(){
        $('.multimeter-hotarea').css('cursor','default');
    }

    checkopacity(){
        if(this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(true);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }else if(!this.appService.mutimeterres && this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(true);
            },0)
        }else if(!this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }
    }
    checkopacityonV(){
        if(this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(true);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }else if(!this.appService.mutimeterres && this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }else if(!this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }
    }
    checkopacityonRes(){
        if(this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }else if(!this.appService.mutimeterres && this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(true);
            },0)
        }else if(!this.appService.mutimeterres && !this.appService.mutimeterv){
            setTimeout(()=>{
                this.multimeterServiceMdata.arrowAnimate1(false);
                this.multimeterServiceMdata.arrowAnimate2(false);
            },0)
        }
    }

    //测量点记录
    recordProgress = function () {
        this.multimeterService.Mdata.recordProgress();

    }
}