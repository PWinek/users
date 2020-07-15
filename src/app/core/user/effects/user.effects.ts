import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { UserService } from '../service/user.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.service.getHeroes().pipe(
          map((res) => {
            console.log(res);
            return UserActions.loadUsersSuccess({
              id: 1,
              data: res.Items,
            });
          }),
          catchError((error) =>
            of(UserActions.loadUsersFailure({ id: 1, error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: UserService) {}
}
