import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {UserParams} from "../models/user.params";
import * as _ from 'lodash';
import {QueryParamsUtil} from "../../util/query-params.util";

@Injectable({ providedIn: 'root' })
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUsers (params?: UserParams): Observable<any> {
    let url = '';
    if(!!params) {
      console.log(params);
      url = `https://jsonplaceholder.typicode.com/users?${QueryParamsUtil.toParamsString(params)}`;
    } else {
      url = `https://jsonplaceholder.typicode.com/users`;
    }
    return this.http.get(url);
  }
  getUser(params:string)
  {
    console.log('jestem paramsem z serwisu',params);
    return of(params);
  }
}
