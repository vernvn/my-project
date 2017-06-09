import { Injectable } from '@angular/core';
import { InternalStringAnyType } from '../type';


@Injectable()
export class AppService {

  public _user: InternalStringAnyType = {};

  // already return a clone of the current user
  public get user() {
    return this._user = this._clone(this._user);
  }
  // never allow mutation
  public set user(value) {
    throw new Error('do not mutate the `.user` directly');
  }

  public get(prop?: any) {
    // use our user getter for the clone
    const user = this.user;
    return user.hasOwnProperty(prop) ? user[prop] : user;
  }

  public set(prop: string, value: any) {
    // internally mutate our user
    return this._user[prop] = value;
  }

  private _clone(object: InternalStringAnyType) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
