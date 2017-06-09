import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login';
import { HomeComponent } from '../views/home';
// import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  // { path: '**',    component: NoContentComponent },
];
