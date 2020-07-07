import { createAction, props } from '@ngrx/store';
import {UserModel} from "../models/user-entity.model";
import {ByIdPayload, SuccessByIdPayload} from "../../common/models/payload/by-id";
import {HttpErrorResponse} from "@angular/common/http";
import {PayloadAction} from "../../common/models/payload-action";
import {NormalizedList} from "../../common/models/normalized";

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ payload: ByIdPayload }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: SuccessByIdPayload<NormalizedList> }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: HttpErrorResponse }>()
);
