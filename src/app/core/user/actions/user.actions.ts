import { createAction, props } from '@ngrx/store';
import {UserModel} from "../models/user-entity.model";

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: UserModel[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
