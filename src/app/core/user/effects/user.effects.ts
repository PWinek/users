import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import * as UserEntityActions from '../actions/user-entity.actions';
import { UserService } from '../service/user.service';
import { UserModel } from '../models/user-entity.model';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.service.getHeroes().pipe(
          map((data) => UserActions.loadUsersSuccess({ data })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    );
  });
  loadUsersSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsersSuccess),
      map((action) => action.data),
      map((data: UserModel[]) =>
        UserEntityActions.addUserEntities({ userEntities: data })
      )
    )
  );

  constructor(private actions$: Actions, private service: UserService) {}
}
