import { Component} from '@angular/core';
import { MultimeterService} from '../multimeter';
import { ObdscanService} from '../obdscan';
import { AppService } from '../../index/app.service';
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
   constructor(public multimeterService:MultimeterService,public obdscanService:ObdscanService,public appService : AppService){}
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
    // obdscan():void{
    //      this.obdscanService.Zdata.obdscan();
    // }
    // multimeter():void{
    //     if(!this.multimeterService.Mdata.multimeterStatus){
    //         this.multimeterService.Mdata.multimeter();
    //         if(this.appService.page =='test'){
    //             setTimeout(()=>{
    //                 console.log(this.multimeterService.Mdata)
    //                 this.multimeterService.Mdata.arrowAnimate1(true);
    //             },0) 
    //         }else{
    //             this.multimeterService.Mdata.arrowAnimate1(false);
    //         }
    //     }
         
    // }

}
