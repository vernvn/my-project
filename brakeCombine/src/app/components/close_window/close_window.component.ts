import { Component } from '@angular/core';
import { CloseWindowService } from './close_window.service';
declare const $;

@Component({
    selector: 'close-window',
    styleUrls: ['./close_window.component.scss'],

    templateUrl: './close_window.component.html'
})
export class CloseWindowComponent {
    modal;
    constructor(private closeWindowService: CloseWindowService, ) {
        this.modal = false;
    }
    exitStudy() {
        this.modal = true;
    }
    closeWindow() {

        // 平台退出
        $.xcj.scorm.api.doQuit();

        this.closeWindowService.closeWindow();
    }
    reStudy() {
        this.modal = false;
    }
}
