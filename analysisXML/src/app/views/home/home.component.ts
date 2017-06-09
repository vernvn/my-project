import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service';
import { Router } from '@angular/router';
@Component({
  selector: 'support-home',
  // styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public user = {
    username: '',
    type: '',
  };
  uploadFiles: any[];
  constructor(
    public route: ActivatedRoute,
    public httpService: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

}
