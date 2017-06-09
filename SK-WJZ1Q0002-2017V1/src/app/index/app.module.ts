import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
// 视图模版组件
import { SingleComponent } from '../view/single';

import { ProfileComponent } from '../view/profile';


import { TargetComponent } from '../view/target';
import { BeaconComponent } from '../view/beacon';
import { FjzInfoComponent } from '../view/fjz_info';
import { FjzICLcRiComponent } from '../view/fjz-img-content-3';
import { LgyLcRiComponent } from '../view/lgy-img-f3';
import { FjzICHcMisComponent } from '../view/fjz-img-content-2';

import { ENV_PROVIDERS } from '../environment';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService } from './app.service';
import { CatalogComponent, CatalogService } from '../components/catalog';
// import { HandleErrorComponent, HandleErrorService } from '../components/handle_error';
import { PaginationComponent, PaginationService } from '../components/pagination';
import { CatelogChapterComponent, CatelogChapterService } from '../components/catelogChapter';
import { CloseWindowComponent, CloseWindowService } from '../components/close_window';



// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppService,
    // MultipleService,
    CatalogService,
    CatelogChapterService,
    PaginationService,
    // HandleErrorService,
    CloseWindowService,
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
        ProfileComponent,
        AppComponent,

        BeaconComponent,
        TargetComponent,
        FjzInfoComponent,
        FjzICLcRiComponent,
        LgyLcRiComponent,
        FjzICHcMisComponent,



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

