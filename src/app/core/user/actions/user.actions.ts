import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ id: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ id: number; data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ id: number; error: HttpErrorResponse }>()
);
