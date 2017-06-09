import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import {
  Router,
} from '@angular/router';


@Component({
  selector: 'magotan-odis',
  providers: [
  ],
  templateUrl: './odis.component.html',
  styleUrls: ['./odis.component.scss']
})
export class OdisComponent implements OnInit {

  componentArray;
  constructor(
    public appService: AppService,
    private router: Router,

  ) {
  }

  // 生命周期钩子函数
  ngOnInit() { }

  go2router(a) {
    this.router.navigate([a]);

  }

}
