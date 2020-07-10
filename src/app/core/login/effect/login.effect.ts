import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as LogoutActions from '../actions/logout.actions';
import * as LoginActions from '../actions/login.actions';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.login),
      concatMap((action) =>
        this.service.isLogin(action.username, action.password).pipe(
          map((res) =>
            LoginActions.loginSucces({
              isLogin: res.isLogin,
              isAuth: res.isAuth,
            })
          ),
          catchError((error) => of(LoginActions.loginFail({ error })))
        )
      )
    );
  });
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LogoutActions.logout),
      concatMap((action) =>
        this.service.isLogout(action.id).pipe(
          map((res) =>
            LogoutActions.logoutSucces({
              isLogin: res.isLogin,
              isAuth: res.isAuth,
            })
          ),
          catchError((error) => of(LogoutActions.logoutFail({ error })))
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private service: LoginService,
    private router: Router
  ) {}
}
