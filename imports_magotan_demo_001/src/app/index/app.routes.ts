import { Routes } from '@angular/router';
// import { DataResolver } from './app.resolver';
import { SingleComponent } from '../views/single';
import { HomeComponent } from '../views/home';
import { QuestionComponent } from '../views/questions/question.component';
import { NoticeComponent } from '../views/notice';
import { InstructionComponent } from '../views/instruction';
import { ToolsComponent } from '../views/tools';
import { OdisComponent } from '../views/ODIS';
import { SparesComponent } from '../views/spares';
import { PartsComponent } from '../views/parts';
import { TestedComponent } from '../views/tested';
import { PrincipleComponent } from '../views/principle';
import { PljDiagnosticComponent } from '../views/plj_diagnostic';
import { SceneComponent } from '../views/scene';
import { ElsaWinComponent } from '../views/elsaWin';

export const ROUTES: Routes = [
  // { path: '',      component: LoginComponent },
  { path: 'instruction', component: InstructionComponent },
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'question', component: QuestionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'odis', component: OdisComponent },
  { path: 'spares', component: SparesComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'tested', component: TestedComponent },
  { path: 'principle', component: PrincipleComponent },
  { path: 'plj_diagnostic', component: PljDiagnosticComponent },
  { path: 'scene', component: SceneComponent },
  { path: 'elsaWin', component: ElsaWinComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // { path: '**', component: PageNotFoundComponent }
];
