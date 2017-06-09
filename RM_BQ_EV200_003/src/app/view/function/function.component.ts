import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel';
import { MultimeterService } from '../../components/multimeter';
import { structureResources} from '../../index/in_memory_data.service';
import { CommunicationService } from '../../components/communication';
declare var $: any,
    InitializePrinciple: any,
    InitializeCircuit: any,
    principleAnimate: any,
    circuitAnimate: any;
@Component({
    selector: 'function', 
    providers: [
    ],
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
    animateStatus = false;
    arrowTurnStatus = false;
    buttonshowStatus = false;
    pageTimerFunction = [];
    pagename : string = '';
    principledev= [false,false,false,false,,false];
    constructor(private dashboardService: DashboardService, private gearpanelService: GearPanelService,private multimeterService: MultimeterService,private communicationService: CommunicationService,){}
    
    onmouseover(event){
        
    }
    onmouseout(event){
        
    }
    openpage(name:string):void{
        this.pagename = name ; 
        for(let i of structureResources){
            if(i.index=== name ){
                let length = i.infoText.length;
                for(let j=0;j<length;j++){
                    setTimeout(()=>{
                        $('.describe-font'+(j+1)).html(i.infoText[j])
                    },0)
                }
            }
        }
        switch(name){
            case 'Different':this.communicationService.setAction({id:'ver004',flag:'',sub:'',value:undefined});break;
            case 'SingleEnded':this.communicationService.setAction({id:'ver005',flag:'',sub:'',value:undefined});break;
            case 'Lowtemperature':this.communicationService.setAction({id:'ver006',flag:'',sub:'',value:undefined});break;
            case 'Overcharge':this.communicationService.setAction({id:'ver007',flag:'',sub:'',value:undefined});break;
            case 'Shortcircuit':this.communicationService.setAction({id:'ver008',flag:'',sub:'',value:undefined});break;
        }
    }
    closepage(){
        this.pagename = '';
        $(".discharge").addClass("hide-important");
        $(".charge").addClass("hide-important");
        $('#mask-svg').css('z-index','');
        this.multimeterService.Mdata.xingnengStatus = false;
    }
    changeAlertData(index){
        $('#mask-svg').css('z-index',6);
        this.multimeterService.Mdata.xingnengStatus = true;
		$(".alert-wrap").removeClass("hide-important");
        if(index==3 || index==4){
            $(".discharge").removeClass("hide-important");
            $(".charge").removeClass("hide-important");
        }else{
            $(".discharge").addClass("hide-important");
            $(".charge").addClass("hide-important");
        }
        if(index==3){
            $(".discharge").attr('src',"assets/images/discharge_g.png")
            $(".charge").css('cursor',"default");
            $(".discharge").css('cursor',"pointer");
            $(".charge").attr('src',"assets/images/charge.png")
        }
        if(index==4){
            $(".discharge").attr('src',"assets/images/discharge.png")
            $(".discharge").css('cursor',"default")
            $(".charge").css('cursor',"pointer");
            $(".charge").attr('src',"assets/images/charge_g.png")
        }
        $(".alert-wrap").css("z-index","999");
        this.principledev[index]=true;				
	}
    


    //生命周期钩子函数
    ngOnInit() {
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })
        this.gearpanelService.setStopAnimate(()=>{return this.onGearFun()})
    }
    
    //locl档执行方法
    lockGearFun() {
        
    }
    //on档执行方法
    onGearFun() {
        
    }
}

