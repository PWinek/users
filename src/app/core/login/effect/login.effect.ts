import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as LogoutActions from '../actions/logout.actions';
import * as LoginActions from '../actions/login.actions';
import * as UserInfoActions from '../actions/loggedUser.actions';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.login),
      concatMap((action) =>
        this.service.login(action.username, action.password).pipe(
          map((res) =>
            LoginActions.loginSucces({})
          ),
          catchError((error) =>
            of(
              LoginActions.loginFailed({
                error:error,
              })
            )
          )
        )
      )
    );
  });

  userData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserInfoActions.GetUserInfo),
      concatMap((action) =>
        this.service.userInfo(action.username).pipe(
          map((res) =>
            UserInfoActions.GetUserInfoSucces({
              id: res,
              username: action.username,
            })
          ),
          catchError((error) =>
            of(
              UserInfoActions.GetUserInfoFail({
                error: error,
              })
            )
          )
        )
      )
    );
  });
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LogoutActions.logout),
      concatMap((action) =>
        this.service.logout().pipe(
          map((res) => LogoutActions.logoutSucces({})),
          catchError((error) =>
            of(
              LogoutActions.logoutFail({
                error: error,
              })
            )
          )
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private service: LoginService,
  ) {}
}
