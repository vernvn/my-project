import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { HandleErrorService } from '../components/handle_error';
import { AppService } from './app.service';
import { AudioService } from '../components/audio';
import { SimulationService } from '../components/simulation';
import { CommunicationService } from '../components/communication';
import { CloseWindowService } from '../components/close_window';
import { PopupService } from '../components/popup';
import { Resource } from '../interface/resources';
import { MultimeterService } from '../components/multimeter';
import { ObdscanService } from '../components/obdscan';
declare var $: any;

/*
 * App Component
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
    showOrHide = true;
    showpage = 'function';
    popups: Resource;
    constructor(
        private appService: AppService,
        private audioService: AudioService,
        private handleErrorService: HandleErrorService,
        private simulationService: SimulationService,
        private communicationService: CommunicationService,
        private closeWindowService: CloseWindowService,
        private popupService: PopupService,
        private multimeterService : MultimeterService,
        private obdscanService : ObdscanService
    ) {

    }
    /**
     * 改变路由方法
     * 
     * @param {string} index
     * 
     * @memberOf AppComponent
     */
    changeRouter(index: string): void {
        //根据参数：index，跳转路由
        if(this.showpage === index){
               return false;
        }
        this.showpage = index;
        this.appService.page = index;
        this.multimeterService.Mdata.multimeterRecover("redProbe","blackProbe","no");
        //去in_memory_data.service.ts中取出一些固定数据(比如讲解文字和音频路径),赋值给音频component
        if(index==='structure'){
            this.communicationService.setAction({id:'ver002',flag:'',sub:'',value:undefined});
        }
        this.appService.getResource(index)
            .then(resource => {
                this.audioService.audioPlayLoop(resource);
                this.popupService.popupsData = resource.infoText;
                //console.log(this.popupService.popupsData.infoText);
            })
            .catch(error => this.handleErrorService.handleError(error))
        switch(index){
            // case 'function': $('.functionNext').removeClass('hide-important').siblings().addClass('hide-important');break;
            case 'structure':$('.structureLast').removeClass('hide-important').siblings().addClass('hide-important');break;
            case 'principle':$('.principleNext').removeClass('hide-important').siblings().addClass('hide-important');break;
            // case 'test':$('.testLast').removeClass('hide-important').siblings().addClass('hide-important');break;
        }
    }
    ngOnInit(): void {
        // this.communicationService.test();
        if (this.simulationService.init()) {
            this.simulationService.init();
        }
        if( this.communicationService.init()){
            this.communicationService.init();
        }
        

        // this.handleErrorService.handleError(20);


        //console.log($(this.el.nativeElement))
        //console.log('Initial App State', this.appState.state);
        //console.log(jQuery(this.el.nativeElement));

    }
    /**
     * 进入课程方法
     * 
     * 
     * @memberOf AppComponent
     */
    enterCourseware() {
        //欢迎页是否隐藏
        this.showOrHide = false;
        //跳转到“principle”路由
        this.changeRouter("principle");
        this.communicationService.setAction({id:'ver001',flag:'',sub:'',value:undefined});

    }
}

