import { Component ,Injectable} from '@angular/core';
import { BalanceService } from './balance.service';
import { AppService } from '../../index/app.service';
import { MultimeterService} from '../multimeter';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from '../gear_panel';
import { DashboardService } from '../dashboard';
import { CommunicationService } from '../communication';
declare var $: any;
@Component({
    selector: 'balance',
    styleUrls: [ './balance.component.scss' ],
    templateUrl: './balance.component.html',
    providers: []
})
@Injectable()
export class BalanceComponent {
    balanceServiceMdata = this.balanceService.Mdata;
    multimeterServiceMout = this.multimeterService.Mout;
    constructor(public balanceService: BalanceService, public appService : AppService,public multimeterService:MultimeterService,public handleErrorService: HandleErrorService ,public dashboardService: DashboardService,public gearPanelService: GearPanelService, public communicationService: CommunicationService,) {

    }
    ngOnInit(): void {}
    power(){
        this.balanceServiceMdata.power();
        this.communicationService.setAction({id:'v07',flag:'',sub:'',value:'openPower'});
    }
    closebalance(){
        this.balanceServiceMdata.closebalance();
        this.appService.balanceOnStatus = false;
    }
    down(){
        this.balanceServiceMdata.down();
    }
    up(){
        this.balanceServiceMdata.up();
    }
    start(){
        // if( this.balanceServiceMdata.selectStatus  && (this.gearPanelService.switchStatus || this.dashboardService.stalls==1){
        //     this.handleErrorService.handleError({ message: "电池在充、放电状态不能进行均衡。" });
        //     return;
        // };
        if(this.balanceServiceMdata.selectStatus && !this.balanceService.Mdata.balanceStart){
            this.balanceServiceMdata.start();
            this.communicationService.setAction({id:'v09',flag:'',sub:'',value:'startBalance'});
            if(!this.gearPanelService.chargeComplete){
                this.balanceServiceMdata.chargeanimate();
                // this.gearPanelService.chargeComplete = true;
            }
        }
        // let fixbattery1top = $('.fixbattery1').css('top').replace('px','');
        // if(fixbattery1top==4){
        //     $('.fixbattery1').addClass('battery1-full').removeClass('battery1').css('top', 0);
        //     $('.fixbattery5').addClass('battery5-full').removeClass('battery5').css('top', 0);
        // }
    }

    ngDoCheck(){
        if(this.balanceServiceMdata.balanceStart){
            let fixbattery1top = $('.fixbattery1').css('top').replace('px','');
            if(fixbattery1top==4){
                $('.fixbattery1').addClass('battery1-full').removeClass('battery1').css('top', 0);
                $('.fixbattery5').addClass('battery5-full').removeClass('battery5').css('top', 0);
            }
        }
    }

    select(){
        this.balanceServiceMdata.select();
        if(this.balanceService.Mdata.powerStatus && this.balanceService.Mdata.selectStatus){
            this.communicationService.setAction({id:'v08',flag:'',sub:'',value:'intoPage'});
        }
        
        // if(this.gearPanelService.chargeComplete){
        //     this.balanceService.Mdata.balanceStart = true;
        // }else{
        //     this.balanceService.Mdata.balanceStart = false;
        // }
    }
}