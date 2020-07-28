import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  users = [
    { id: 1, login: 'Adam', pass: 'qwerty', surname: 'Taki' },
    { id: 2, login: 'Adam1', pass: 'qwerty1', surname: 'Taki' },
    { id: 3, login: 'Adam2', pass: 'qwerty2', surname: 'Taki' },
    { id: 4, login: 'Adam3', pass: 'qwerty3', surname: 'Taki' },
    { id: 5, login: 'Adam4', pass: 'qwerty4', surname: 'Taki' },
    { id: 6, login: 'Adam5', pass: 'qwerty5', surname: 'Taki' },
  ];

  login(userName: string, password: string): Observable<any> {
    const login = !!_.find(this.users, (user) => {
      return user.login === userName && user.pass === password;
    });
    return login ? of(login) : throwError('błędne dane logowania');
  }
  userInfo(username: string): Observable<any> {
    const userId = _.find(this.users, (user) => {
      return user.login === username;
    });
    return userId
      ? of(userId.id)
      : throwError('Nie można pobrać danych użytkownika');
  }

  logout() {
    return of(true);
  }
}
