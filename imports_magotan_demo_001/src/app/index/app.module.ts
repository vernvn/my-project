import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

/*
 * 平台和环境引入
 */
import { ENV_PROVIDERS } from '../environment';
import { ROUTES } from './app.routes';
// 最外层的组件
import { AppComponent } from './app.component';
import { DataResolverService } from './app.resolver';
import { AppService, InternalStateType } from './app.service';
// 视图模版组件
import { SingleComponent } from '../views/single';
import {
  InstructionComponent, 
  InstructionDetailComponent,
} from '../views/instruction';
import { HomeComponent } from '../views/home';
import { QuestionComponent, QuestionService } from '../views/questions';
import { NoticeComponent } from '../views/notice';
import { ToolsComponent } from '../views/tools';
import { OdisComponent } from '../views/ODIS';
import { SparesComponent } from '../views/spares';
import { PartsComponent } from '../views/parts';
import { TestedComponent, TestedService } from '../views/tested';
import { PrincipleComponent } from '../views/principle';
import { SceneComponent } from '../views/scene';
import { ElsaWinComponent, ElsaWinService } from '../views/elsaWin';

/**
 * 内部小组件
 */
// import { PaginationComponent, PaginationService } from '../components/pagination';
// import { CatelogChapterComponent, CatelogChapterService } from '../components/catelogChapter';
import { CloseWindowComponent, CloseWindowService } from '../components/close_window';
import { ImageComponent } from '../components/image';
import { ButtonComponent } from '../components/button';
import { ButtonLeeComponent } from '../components/buttonLee';
import { ButtonTipComponent } from '../components/buttonTip';
import { TextComponent } from '../components/text';
import { LineComponent } from '../components/line';
import { OverlayComponent } from '../components/overlay';
import { ArrowComponent } from '../components/arrow';
import { PrompComponent } from '../components/promp';
/**
 * 指令
 */
import { XLargeDirective } from '../directives/x-large';
import { HaloDirective } from '../directives/halo';
import { FocusDirective } from '../directives/focus';
import { Ficker1Directive, Ficker2Directive } from '../directives/ficker';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';
// import { SwiperDirective } from '../directives/swiper';





import { PljDiagnosticComponent, PljDiagnosticService } from '../views/plj_diagnostic';
/**
 * 内部小组件
 */
// import { PaginationComponent, PaginationService } from '../components/pagination';
// import { CatelogChapterComponent, CatelogChapterService } from '../components/catelogChapter';
// import { CloseWindowComponent, CloseWindowService } from '../components/close_window';
import { InputComponent } from '../components/input';
import { JumpComponent } from '../components/jump';
// import { OverlayComponent } from '../components/overlay';



// 应用的一些功能提供商
const APP_PROVIDERS = [
  DataResolverService,
  AppService,
  // InstructionService,
  CloseWindowService,
  // PaginationService,
  // CloseWindowService,
  // PaginationService,
  PljDiagnosticService,
  TestedService,
  QuestionService,
  ElsaWinService,

];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};
/**
 * `AppModule 主入口
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SingleComponent,
    HomeComponent,
    QuestionComponent,
    NoticeComponent,
    ToolsComponent,
    OdisComponent,
    SparesComponent,
    PartsComponent,
    TestedComponent,
    InstructionComponent,
    InstructionDetailComponent,
    SceneComponent,
    ElsaWinComponent,
    // HomeComponent,

    ImageComponent,
    ButtonComponent,
    ButtonLeeComponent,
    ButtonTipComponent,
    TextComponent,
    LineComponent,
    OverlayComponent,
    // PaginationComponent,
    CloseWindowComponent,
    InputComponent,
    JumpComponent,

    PljDiagnosticComponent,
    InstructionComponent,

    // PaginationComponent,
    // CloseWindowComponent,

    XLargeDirective,
    PerfectScrollbarDirective,
    // SwiperDirective,
    HaloDirective,
    PrincipleComponent,
    ArrowComponent,
    PrompComponent,
    FocusDirective,
    Ficker1Directive,
    Ficker2Directive
  ],
  imports: [ // 引入angular模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {


}
