import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ApiService } from './api.service';


@Injectable()
export class HttpService implements OnInit {
    public headers = new Headers({
        Authorization: localStorage.getItem('Authorization')
    });
    public options = {
        withCredentials: true,
        headers: this.headers

    };
    constructor(
        public jsonp: Jsonp,
        public http: Http,
        public apiService: ApiService) {

    }
    public ngOnInit() {

        // console.log('Initial App State', this.appState.state);
    }

    // 获取 登录信息
    async getLoginState(): Promise<any> {
        return this.httpGet(await this.apiService.getLink('login'));
    }
    async Login(user): Promise<any> {
        return this.httpPost(await this.apiService.getLink('login'), user);
    }
    async logout(): Promise<any> {

        return this.httpGet(await this.apiService.getLink('logout'))
            .then(err => localStorage.removeItem('Authorization'));
    }
    /*
     *   url: 服务器api接口地址
     *   params: 传递参数对象
     */
    // get方法
    httpGet(url) {
        return this.http.get(url, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                console.log(resJson);

                this.handleToken(resJson);
                return resJson;

            });
    }
    // post方法
    httpPost(url, params) {
        return this.http.post(url, params, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                this.handleToken(resJson);
                return resJson;

            });
    }
    // 跨域get
    jsonpGet(url, params) {
        return this.jsonp.get(url, this.options).map(res => {

            const resJson = res.json();
            this.handleToken(resJson);
            return resJson;

        });
    }
    // 跨域post
    jsonpPost(url, params) {
        return this.jsonp.post(url, this.options).map(res => {
            const resJson = res.json();
            this.handleToken(resJson);
            return resJson;

        });
    }
    // 处理token
    getToken(data) {
        if (data.token) {
            return data.token;
        } else {
            return false;
        }
    }
    setToken(value) {
        this.headers.set('Authorization', value);
        localStorage.setItem('Authorization', value);

    }
    handleToken(data) {
        if (this.getToken(data)) {
            this.setToken(this.getToken(data));
        }
    }
}
