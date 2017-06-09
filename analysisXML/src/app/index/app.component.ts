/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { HttpService } from '../service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public appService: AppService,
    public httpService: HttpService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.httpService.getLoginState().then(
      res => {
        if (!res.code) {

          this.router.navigate(['home']);
        }
        console.log(res);
      }
    ).catch(
      (err) => console.log(err)
      );
  }


}


