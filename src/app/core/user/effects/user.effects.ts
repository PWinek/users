import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, withLatestFrom} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {UserService} from '../service/user.service';
import {selectParams} from "../selectors/user.selectors";
import {select, Store} from "@ngrx/store";
import {selectLogoutSucces} from "../../login/selectors/logout.selector";
import {State} from "../../index";

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      map(actions => (actions.id)),
      withLatestFrom(this.store.pipe(select(selectParams))),
      concatMap(([actionId, params]) =>
        this.service.getUsers(params).pipe(
          map((res) => {
            return UserActions.loadUsersSuccess({
              id: actionId,
              data: res,
            });
          }),
          catchError((error) => {
            return of(UserActions.loadUsersFailure({
              id: actionId,
              error}));
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: UserService, private store:Store<State>) {
  }
}
