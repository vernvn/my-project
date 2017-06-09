import { Component, OnInit, } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
  selector: 'magotan-spares',
  providers: [
  ],
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.scss']
})
export class SparesComponent implements OnInit {

  componentArray;
  constructor(
    public appService: AppService,
  ) {
  }

  // 生命周期钩子函数
  ngOnInit() { }



}
