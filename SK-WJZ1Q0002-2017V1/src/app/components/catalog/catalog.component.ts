import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
declare var $: any;
@Component({
    selector: 'cata-log',
    providers: [
    ],
    styleUrls: ['./catalog.component.scss'],
    templateUrl: './catalog.component.html'
})
export class CatalogComponent {
    isShowChapter;
    constructor(
        public catalogService: CatalogService,
    ) {
    }
    Oninit() {
        // this.openSwitchPanel();
    }

    openSwitchPanel() {
        this.catalogService.openSwitchPanel();

        this.catalogService.openChapter();
    }




}
