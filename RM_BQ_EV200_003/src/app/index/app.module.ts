import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';


/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from '../environment';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService } from './app.service';
// import { PrincipleComponent } from '../view/principle';
import { FunctionComponent } from '../view/function'; 
import { TestComponent } from '../view/test'; 
import { StructureComponent } from '../view/structure';
import { PopupComponent ,PopupService} from '../components/popup';
import { AudioComponent,AudioService} from '../components/audio';
import { ControlCenterComponent,ControlCenterService} from '../components/control_center';
import { SideBarToolComponent} from '../components/sidebar_tool';
import { HandleErrorComponent,HandleErrorService} from '../components/handle_error';
import { DashboardComponent,DashboardService} from '../components/dashboard';
import { GearPanelComponent,GearPanelService} from '../components/gear_panel';
import { SimulationService} from '../components/simulation';
import { ObdscanComponent,ObdscanService} from '../components/obdscan';
import { BalanceComponent,BalanceService} from '../components/balance';
import { MultimeterComponent,MultimeterService} from '../components/multimeter';
import { TemperatureComponent,TemperatureService} from '../components/temperature';
import { CommunicationService} from '../components/communication';
import { CloseWindowComponent,CloseWindowService} from '../components/close_window';
import { DifferentComponent} from '../view/function/button1';
import { SingleEndedComponent} from '../view/function/button2';
import { LowtemperatureComponent} from '../view/function/button3';
import { OverchargeComponent } from '../view/function/button4';
import { Overcharge2Component } from '../view/function/button4-2';
import { ShortcircuitComponent} from '../view/function/button5';
// import { DirectCurrentComponent} from '../view/function/button1';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppService,
  AudioService,
  PopupService,
  ControlCenterService,
  SimulationService,
  GearPanelService,
  MultimeterService,
  TemperatureService,
  ObdscanService,
  DashboardService,
  BalanceService,
  CommunicationService,
  HandleErrorService,
  CloseWindowService

];

type StoreType = {
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    // PrincipleComponent,
    FunctionComponent,
    TestComponent,
    StructureComponent,
    PopupComponent,
    AudioComponent,
    ControlCenterComponent,
    SideBarToolComponent,
    HandleErrorComponent,
    GearPanelComponent,
    DashboardComponent,
    ObdscanComponent,
    BalanceComponent,
    MultimeterComponent,
    TemperatureComponent,
    CloseWindowComponent,
    SingleEndedComponent,
    DifferentComponent,
    LowtemperatureComponent,
    OverchargeComponent,
    Overcharge2Component,
    ShortcircuitComponent

    // DirectCurrentComponent
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
  constructor(public appRef: ApplicationRef) {}


}

