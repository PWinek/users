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
        this.service.isLogin(action.username, action.password).pipe(
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
      ofType(UserInfoActions.UserInfoGathering),
      concatMap((action) =>
        this.service.UserInfo(action.username).pipe(
          map((res) =>
            UserInfoActions.UserInfoGatheringSucces({
              id: res,
              username: action.username,
            })
          ),
          catchError((error) =>
            of(
              UserInfoActions.UserInfoGatheringFail({
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
        this.service.isLogout().pipe(
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
    private router: Router
  ) {}
}
