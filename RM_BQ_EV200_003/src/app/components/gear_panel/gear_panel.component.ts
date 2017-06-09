import { Component } from '@angular/core';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from './gear_panel.service';
import { DashboardService } from '../dashboard';
import { BalanceService } from '../balance/balance.service';
import { CommunicationService } from '../communication';


declare let $: any,
    stallsRAnimate: any,
    stallsDAnimate: any;

@Component({
    selector: 'gear-panel',
    styleUrls: ['./gear_panel.component.scss'],
    templateUrl: './gear_panel.component.html',
    providers: []
})
/**
 * 处理错误的组件
 */
export class GearPanelComponent {
    
    constructor(
        private gearPanelService: GearPanelService,
        private dashboardService: DashboardService,
        private handleErrorService: HandleErrorService,
        private  balanceService:  BalanceService,
        private communicationService: CommunicationService,
    ) {

    }

    ngOnInit() {
        this.dragDiv();

    }

    /*
     *
     * 面板拖拽
     *
     * */
    dragDiv() {
        //给新面板加上拖拽事件
        $(".dragSource").draggable({
            containment: ".container",
            cursor: "move"
        })
    }

    /*
     *
     * 点开面板
     *
     * */

    openSwitchPanel(val: boolean): void {
        let zIndex = 14;
        //打开门控开关
        if (val) {
            $(".gear-wrap").removeClass("hide-important").css("z-index", "16");
            
        }else{
            $(".gear-wrap-charge").removeClass("hide-important").css("z-index", "16");
        }
    }


    /*
     *
     * 关闭面板
     *
     * */

    closeSwitchPanel(val:boolean) {
        //关闭门控开关
        if (val) {
            $(".gear-wrap-charge").addClass("hide-important");
            
        }else{
            $(".gear-wrap").addClass("hide-important");
        }
        $(".door-switch").parent().removeClass("active");
    }

    switchOpenOrClose(event){
        if(!this.gearPanelService.switchStatus){
            
            if(this.dashboardService.stalls == 1){
                this.handleErrorService.handleError({ message: "请关闭钥匙开关，然后进行充电。" });
                return;
            }
            else if(this.balanceService.Mdata.balanceStart){
                this.handleErrorService.handleError({ message: "电池处于均衡状态不能进行充放电。" });
                return;
            }
            else{
                $(event.parentNode).addClass('gear-wrap-charge').removeClass('gear-wrap');
                if(!this.gearPanelService.chargeComplete){
                    this.gearPanelService.chargeanimate();
                }else{
                    this.gearPanelService.stopchargeanimate();
                    this.handleErrorService.handleError({ message: "动力电池已充满。" });
                }
                
            }
            this.gearPanelService.Mint.In1NER_PowBat_Charge_x_x = '1';
            this.communicationService.setAction({id:'ver010',flag:'',sub:'',value:undefined});
            
        }else{
                $(event.parentNode).addClass('gear-wrap').removeClass('gear-wrap-charge');
                this.gearPanelService.stopchargeanimate();
                this.gearPanelService.Mint.In1NER_PowBat_Charge_x_x = '0';
        }
        this.gearPanelService.switchStatus = !this.gearPanelService.switchStatus;
    }
}
