import { createAction, props } from '@ngrx/store';

export const GetUserInfo = createAction(
  '[Login Page] User info gathering',
  props<{ username: string }>()
);
export const GetUserInfoSucces = createAction(
  '[Login Page] User info gathering succes',
  props<{ id: number; username: string }>()
);
export const GetUserInfoFail = createAction(
  '[Login Page] User info gathering fail',
  props<{ error: string }>()
);
export const UserInfoClear = createAction(
  '[Login Page] User info clear',
  props<{}>()
);
