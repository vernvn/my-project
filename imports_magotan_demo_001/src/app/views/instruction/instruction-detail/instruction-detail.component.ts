import { Component, Input } from '@angular/core';
import { DataResolverService } from '../../../index/app.resolver';
@Component({
  selector: 'sk-instruction-detail',
  providers: [
  ],
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.scss']
})
export class InstructionDetailComponent {

  @Input('data') dataObj: any;
  constructor(
    private dataResolverService: DataResolverService,
  ) {
  }
}
