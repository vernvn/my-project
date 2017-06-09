import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { InternalStringAnyType } from '../type';

@Injectable()
export class ApiService {
    domain = 'http://localhost';
    port = '5000';
    api: InternalStringAnyType[] = [
        { name: 'login', link: `${this.domain}:${this.port}/account/login`, },
        { name: 'logout', link: `${this.domain}:${this.port}/account/logout`, },
    ];
    getApis(): Promise<InternalStringAnyType[]> {
        return Promise.resolve(this.api);
    }

	/**
	 * 根据code获取某一个本地储存的常规错误信息
	 *
	 * @param {string} apiName
	 * @returns {Promise<InternalStringAnyType>}
	 *
	 * @memberOf ApiService
	 */
    getApi(apiName: string): Promise<InternalStringAnyType> {
        return this.getApis()
            .then(apis => apis.find(api => api.name === apiName))
            .catch(error => console.log(error));

    }
    getLink(apiName: string): Promise<InternalStringAnyType> {
        return this.getApi(apiName)
            .then(api => { return api.link; });
    }

}
