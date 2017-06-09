import { Component ,Injectable} from '@angular/core';
import { MultimeterService } from './multimeter.service';
import { AppService} from '../../index/app.service'
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
    constructor(public multimeterService: MultimeterService,public appService: AppService) {

    }
    ngOnInit(): void {
        // setInterval(() => {
        //     this.multimeterServiceMdata = this.multimeterService.Mdata;//万用表service中的基本参数
        //     this.multimeterServiceMout = this.multimeterService.Mout;
        //     console.log(this.multimeterService.Mdata.multimeterStatus);
            
        // }, 1000);
    }
    checkoutopacity(){
        if(this.appService.page ==='test'){
            if(!this.multimeterServiceMdata.multimeterinsulated){
                this.multimeterServiceMdata.arrowAnimate1(true);
            }else{
                this.multimeterServiceMdata.arrowAnimate1(false);
            }
            
        }else{
            this.multimeterServiceMdata.arrowAnimate1(false);
        }
    }
    multimeter() {
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
        this.multimeterService.Mdata.multimeteroff();
        this.checkoutopacity();

    };
    multimetervv() {
        this.multimeterService.Mdata.multimetervv();
        this.checkoutopacity();

    };
    multimeterv() {
        this.multimeterService.Mdata.multimeterv();
        this.checkoutopacity();

    };
    multimetermv() {
        this.multimeterService.Mdata.multimetermv();
        this.checkoutopacity();

    };

    multimeterres() {
        this.multimeterService.Mdata.multimeterres();
        this.checkoutopacity();

    };
    multimeternofine() {
        this.multimeterService.Mdata.multimeternofine();
        this.checkoutopacity();

    };
    multimeterAA() {
        this.multimeterService.Mdata.multimeterAA();
        this.checkoutopacity();


    };
    multimeterk() {
        this.multimeterService.Mdata.multimeterk();
        this.checkoutopacity();

    };
    multimetermA() {
        this.multimeterService.Mdata.multimetermA();
        this.checkoutopacity();

    }
    closemultimeter() {
        this.multimeterService.Mdata.closemultimeter();
        this.checkoutopacity();

    };
    onMouseover(){
        //this.multimeterService.Mdata.circleareaAnimate(false);
        // $('.clickcircle').css('zIndex',3);
    }
    onMouseout(){
        //this.multimeterService.Mdata.circleareaAnimate(true);
        // $('.clickcircle').css('zIndex',0);
    }
    change2pointer(){
        $('.multimeter-hotarea').css('cursor','pointer');
    }
    change2default(){
        $('.multimeter-hotarea').css('cursor','default');
    }

    //测量点记录
    recordProgress = function () {
        this.multimeterService.Mdata.recordProgress();

    }
}