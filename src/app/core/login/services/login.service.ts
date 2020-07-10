import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NormalizedList } from '../../common/models/normalized';
import { normalize, schema } from 'normalizr';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  users = [
    { id: 1, login: 'Adam', pass: 'qwerty' },
    { id: 2, login: 'Adam1', pass: 'qwerty1' },
    { id: 3, login: 'Adam2', pass: 'qwerty2' },
    { id: 4, login: 'Adam3', pass: 'qwerty3' },
    { id: 5, login: 'Adam4', pass: 'qwerty4' },
    { id: 6, login: 'Adam5', pass: 'qwerty5' },
  ];

  isLogin(userName: string, password: string): Observable<any> {
    const isAuth = !!_.find(this.users, (user) => {
      return user.login === userName && user.pass === password;
    });
    return of({ isLogin: true, isAuth });
  }
  isLogout(id): Observable<any> {
    return of({ isLogin: false, isAuth: null });
  }
}
