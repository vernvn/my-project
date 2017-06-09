import { Injectable } from '@angular/core';
declare let $: any;
/**
 * 基类
 *
 * @class ControlCenter
 */
class Catalog {
    gearPanelHidden: boolean = true;
    openSwitchPanel() {
        // $('.gear-wrap').removeClass('hide-important');
        // $('.door-switch').parent().addClass('active');
    }
}
/**
 *
 *
 * @export
 * @class ControlCenterService
 * @extends {ControlCenter}
 */
@Injectable()
export class CatalogService extends Catalog {

    isShowChapter = false;
    openSwitchPanel() {
        super.openSwitchPanel();
    }



    openChapter() {
        this.isShowChapter = !this.isShowChapter;
    }
    closeChapter() {
        this.isShowChapter = false;
    }
}
