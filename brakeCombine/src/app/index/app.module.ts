import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
/**
 * 指令
 */
import { XLargeDirective } from '../directives/x-large';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';
import { SwiperDirective } from '../directives/swiper';
/*
 * Platform and Environment providers/directives/pipes
 */
// 视图模版组件
import { SingleComponent } from '../view/single';
import { ChartComponent } from '../view/chart';
import { SwiperComponent } from '../view/swiper';
import { MultipleComponent, MultipleService } from '../view/multiple';
import { MultipleContentComponent } from '../view/multiple-content';
import { ProfileComponent } from '../view/profile';
import { InfoComponent } from '../view/info';
import { VideoComponent } from '../view/video';
import { TargetComponent } from '../view/target';
import { DialogComponent, DialogService } from '../view/dialog';
import { TipComponent, TipService } from '../view/tip';
import { DragComponent } from '../view/draggable';
import { ButtonComponent } from '../view/button';


// 自定义模板
import { FjzInfoComponent } from '../view/fjz_info';
import { FjzICHcMisBcComponent } from '../view/fjz-img-content';
import { LeeICHcMisBcComponent } from '../view/fjz-img-content0';
import { FjzICHcMiComponent } from '../view/fjz-img-content-1';
import { LeeICHcMiComponent } from '../view/fjz-img-content-11';
import { LeeICHcMisComponent } from '../view/fjz-img-content-22';
import { FjzICHcMisComponent } from '../view/fjz-img-content-2';
import { FjzICLcRiComponent } from '../view/fjz-img-content-3';
import { LeeICLcRiComponent } from '../view/fjz-img-content-33';
import { LeeICHcMisBscComponent } from '../view/fjz-img-content-44';
import { FjzICHcMisBscComponent } from '../view/fjz-img-content-4';
import { ItemizeComponent } from '../view/itemize';
import { SortComponent } from '../view/sort';
import { DragAndDropComponent } from '../view/drag-and-drop';
import { SwitchImgComponent } from '../view/switch-img';
import {TransmissionComponent } from '../view/transmission';
import { SwitchTwoImgComponent } from '../view/switch-two-img';
import { TargetMoreComponent } from '../view/target-more';
// 管道
import { KeysPipe } from '../view/fjz-img-content/keys.pipe';

import { ENV_PROVIDERS } from '../environment';
// App is our top level component
import { AppComponent } from './app.component';
import { DataResolver } from './app.resolver';
import { AppService } from './app.service';
import { CatalogComponent, CatalogService } from '../components/catalog';
// import { HandleErrorComponent, HandleErrorService } from '../components/handle_error';
import { PaginationComponent, PaginationService } from '../components/pagination';
import { CatelogChapterComponent, CatelogChapterService } from '../components/catelogChapter';
import { CloseWindowComponent, CloseWindowService } from '../components/close_window';


// Application wide providers
const APP_PROVIDERS = [
    DataResolver,
    AppService,
    MultipleService,
    CatalogService,
    CatelogChapterService,
    PaginationService,
    // HandleErrorService,
    CloseWindowService,
    DialogService,
    TipService,

];

type StoreType = {
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        SingleComponent,
        ChartComponent,
        MultipleComponent,
        MultipleContentComponent,
        SwiperComponent,
        ProfileComponent,
        InfoComponent,
        VideoComponent,
        TargetComponent,
        DialogComponent,
        TipComponent,
        AppComponent,
        FjzInfoComponent,
        FjzICHcMisBcComponent,
        LeeICHcMisBcComponent,
        FjzICHcMiComponent,
        LeeICHcMiComponent,
        LeeICHcMisComponent,
        FjzICHcMisComponent,
        FjzICLcRiComponent,
        LeeICLcRiComponent,
        FjzICHcMisBscComponent,
        LeeICHcMisBscComponent,
        KeysPipe,
        SortComponent,
        ItemizeComponent,
        SwitchImgComponent,
        TransmissionComponent,
        ButtonComponent,
        SwitchTwoImgComponent,
        TargetMoreComponent,
        DragAndDropComponent,
        DragComponent,

        XLargeDirective,
        PerfectScrollbarDirective,
        SwiperDirective,
        CatalogComponent,
        // HandleErrorComponent,
        CatelogChapterComponent,
        PaginationComponent,
        CloseWindowComponent,
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }


}

