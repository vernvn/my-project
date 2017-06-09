import { Injectable }    from '@angular/core';
import {Resources}from './in_memory_data.service'
import 'rxjs/add/operator/toPromise';

import { Resource } from '../interface/resources';

@Injectable()
export class AppService {
  testpageStatus : boolean = false;
  structurepageStatus = false;
  mutimeterres :boolean = false;
  mutimeterv :boolean = false;
  tool_last : string;
  balanceOnStatus = false;
  getResources(): Promise<Resource[]> {
    return Promise.resolve(Resources);
  }

  getResource(index: string): Promise<Resource> {
    return this.getResources()
               .then(resources => resources.find(resource => resource.index === index));
  }

  setTextAnimate(status,fun){
    switch(status){
      case 'open': this. dotestAnimate = fun; break;
      case 'close': this.closetestAnimate = fun;break;
    }
  }
  
  dotestAnimate(){
  }
  closetestAnimate(){
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


