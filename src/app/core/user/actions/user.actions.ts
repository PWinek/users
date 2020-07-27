import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import {UserParams} from "../models/user.params";

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ id: number}>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ id: number, data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Fail',
  props<{ id: number, error: HttpErrorResponse }>()
);
export const userChangeParams = createAction(
  '[User] User change param',
  props<{id: number, params: UserParams}>()

);
export const userClearParams = createAction(
  '[User] User params clear',
  props<{id: number}>()
);
export const userClearData = createAction(
  '[User] User data clear',
  props<{id: number}>()
);

