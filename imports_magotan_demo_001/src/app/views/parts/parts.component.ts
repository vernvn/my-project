import { Component, OnInit, } from '@angular/core';
import { AppService } from '../../index/app.service';



@Component({
  selector: 'magotan-parts',
  providers: [
  ],
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  componentArray;
  constructor(
    public appService: AppService,
  ) {
  }

  // 生命周期钩子函数
  ngOnInit() { }



}
