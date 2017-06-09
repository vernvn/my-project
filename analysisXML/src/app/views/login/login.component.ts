import { Http, Headers, Jsonp } from '@angular/http';
import {
  Component,
  OnInit
} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpService } from '../../service';
import { Router } from '@angular/router';

@Component({
  selector: 'support-login',
  providers: [
  ],
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // 设置user默认值
  public user = { username: '1', password: '1' };

  // TypeScript public modifiers
  constructor(public http: Http, public httpService: HttpService,
    private router: Router,

  ) { }

  public ngOnInit() {

    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(user) {
    console.log(user);
    this.httpService.Login(user)
      .then(
      res => {
        console.log(res);
        if (!res.code) {

          this.router.navigate(['home']);
        }

      }
      ).catch(
      (err) => console.log(err)
      );
  }

}
