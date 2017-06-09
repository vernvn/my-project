import { Component} from '@angular/core';
import { MultimeterService} from '../multimeter';
import { ObdscanService} from '../obdscan';
import { TemperatureService} from '../temperature';
import { BalanceService} from '../balance';
import { AppService } from '../../index/app.service';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from '../gear_panel';
import { DashboardService } from '../dashboard';

declare var $:any;
@Component({

    selector: 'sidebar-tool',
    providers: [
    ],
    styleUrls: [ './sidebar_tool.component.scss' ],
    templateUrl: './sidebar_tool.component.html'
})
export class SideBarToolComponent {
    tool_btn_bg_out:boolean=true;
    obdscanHidden:boolean=true;
    tool_last : string;
    constructor(public multimeterService: MultimeterService,public obdscanService:ObdscanService, public appService : AppService, public temperatureService: TemperatureService,public balanceService: BalanceService,public handleErrorService: HandleErrorService,public gearPanelService: GearPanelService,public dashboardService: DashboardService){}
     sideToolToggle(obj:any){
        if(obj.name==0){
            this.tool_btn_bg_out=false;
            $(".sideBar-tool").animate({
                right:'0px'
            },200);
            obj.name=1;
        }else{
             this.tool_btn_bg_out=true;
            $(".sideBar-tool").animate({
                right:'-137px'
            },200);
            obj.name=0;
        }
    };
    obdscan():void{
         this.obdscanService.Zdata.obdscan();
    };

    multimeter():void{
        
        // console.log($('#mask-svg'))
        // 
        if(this.multimeterService.Mdata.xingnengStatus){
            setTimeout(()=>{
                $('#mask-svg').css('z-index',6);
            },0);
        }else{
            setTimeout(()=>{
                $('#mask-svg').css('z-index','');
            },0);
        }
        if(this.appService.testpageStatus){
            // this.temperatureService.Mdata.closetemperature();
            $('.alert-part').show();
            $('.hot').show();
        }
        if(!this.multimeterService.Mdata.multimeterStatus){
            this.multimeterService.Mdata.multimeter();
            if(this.appService.structurepageStatus){
                $('.circlestructure').show()
                $('.redarea').show()
            }else{
                $('.circlestructure').hide()
                $('.redarea').hide()
            }
        }
        
        if(this.appService.structurepageStatus){
            if(this.appService.mutimeterv){
                setTimeout(()=>{
                    //  $('.opacitybox').hide();
                    //  $('.opacitybox2').hide()
                      this.multimeterService.Mdata.arrowAnimate1(false);
                     this.multimeterService.Mdata.arrowAnimate2(false);
                },0)
            }else{
                setTimeout(()=>{
                    // $('.opacitybox').hide();
                    // $('.opacitybox2').show();
                     this.multimeterService.Mdata.arrowAnimate1(false);
                     this.multimeterService.Mdata.arrowAnimate2(true);
                },0);
                
            }
        }else if(this.appService.testpageStatus){
            
                setTimeout(()=>{
                    // $('.opacitybox').show();
                    // $('.opacitybox2').show();
                    this.multimeterService.Mdata.arrowAnimate1(true);
                     this.multimeterService.Mdata.arrowAnimate2(true);
                },0); 
        };
    };

    temperature(): void{
        if(this.appService.testpageStatus){
            // this.multimeterService.Mdata.closemultimeter();
            this.appService.mutimeterres = false;
            this.appService.mutimeterv = false;
        }
        this.temperatureService.Mdata.temperature();
         
        //  $('.alert-part').hide();
        //  $('.hot').hide();
        //  $('.hotareatest').hide()
        //  $('.closeAlertPart').hide();
         $('.hottemplate').show();
         this.appService.tool_last = 'temperature';
    };


    balance():void{
        if(this.gearPanelService.switchStatus || this.dashboardService.stalls==1){
            this.handleErrorService.handleError({ message: "电池在充、放电状态不能进行均衡。" });
            return;
        };
        if(this.appService.structurepageStatus){
            setTimeout(()=>{
                $('.CT').stop().animate({
                    left:'481px'
                },500,'linear');
            },0) 
            // $('.displayboxbalance').show();
        }else{
            // $('.displayboxbalance').hide();
        }
        this.balanceService.Mdata.balance();
        setTimeout(()=>{
            this.balanceService.Mdata.dragStart();
        },100);
    }
}
