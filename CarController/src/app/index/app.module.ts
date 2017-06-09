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
import { PrincipleComponent } from '../view/principle';
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
import { MultimeterComponent,MultimeterService} from '../components/multimeter';
import { CommunicationService} from '../components/communication';
import { CloseWindowComponent,CloseWindowService} from '../components/close_window';
import { ChangeSwitchComponent, ChargeSwitchService } from '../components/charge_switch';


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
  ObdscanService,
  DashboardService,
  CommunicationService,
  HandleErrorService,
  CloseWindowService,
  ChargeSwitchService

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
    PrincipleComponent,
    StructureComponent,
    PopupComponent,
    AudioComponent,
    ControlCenterComponent,
    SideBarToolComponent,
    HandleErrorComponent,
    GearPanelComponent,
    DashboardComponent,
    ObdscanComponent,
    MultimeterComponent,
    CloseWindowComponent,
    ChangeSwitchComponent
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

