import { Component } from '@angular/core';
import { ChargeSwitchService } from './charge_switch.service';
import { DashboardService } from '../dashboard';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from '../gear_panel/gear_panel.service';
declare let $:any;
@Component({
    selector: 'change-switch',
    styleUrls: ['./charge_switch.component.scss'],
    templateUrl: './charge_switch.component.html'
})
export class ChangeSwitchComponent {
    constructor(private chargeSwitchService: ChargeSwitchService,private dashboardService: DashboardService,
    private handleErrorService: HandleErrorService,private gearPanelService: GearPanelService
    ) {
// this.chargeSwitchService.setchargeFun('on',()=> {return this.demo()});
    }

    ngOnInit(){
        this.dragDiv();
    }
    /**
     * 关闭充电开关
     * 
     * 
     * @memberOf ChangeSwitchComponent
     */
    closeChargeSwitch() {
        this.chargeSwitchService.chargeSwitchHidden = true;

    }
    /**
     * 给充电开关加拖拽事件
     * 
     * 
     * @memberOf ChangeSwitchComponent
     */
    dragDiv() {
        $(".charge-switch").draggable({
            containment: ".container",
            cursor: "move"
        })
    }
    /**
     * 充电开关，开启和关闭
     * 
     * 
     * @memberOf ChangeSwitchComponent
     */
    chargeSwitch() {
        if (this.chargeSwitchService.charge) {
            if (this.chargeSwitchService.onChargeFun()) {
                this.chargeSwitchService.onChargeFun()
            }
            if(this.chargeSwitchService.chargeOnContinue){
                this.chargeSwitchService.charge = false;
            }
            this.chargeSwitchService.stopbrakeanimate();
            this.chargeSwitchService.stopchargeanimate();
        } else {
            if(this.dashboardService.stalls == 1){
                this.handleErrorService.handleError({ message: "请关闭钥匙开关，然后进行充电。" });
                return;
            }
            if (this.chargeSwitchService.offChargeFun()) {
                this.chargeSwitchService.offChargeFun()
            }
            if(this.chargeSwitchService.chargeOnContinue){
                this.chargeSwitchService.charge = true;
            }
            if(this.gearPanelService.isBrake){
                if(this.gearPanelService.brakeanimate()){
                    this.chargeSwitchService.brakeanimate();
                }
            }
            this.chargeSwitchService.chargeanimate();
        }
    }
}