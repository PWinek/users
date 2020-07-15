import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);
export const loginSucces = createAction(
  '[Login Page] Login succes',
  props<{ success: boolean }>()
);
export const loginFailed = createAction(
  '[Login Page] Login failed',
  props<{ error: string }>()
);
export const loginInfoClear = createAction(
  '[Login Page] Login info clear',
  props<{}>()
);
