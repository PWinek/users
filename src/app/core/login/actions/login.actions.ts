import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string; }>()
);
export const loginSucces = createAction(
  '[Login Page] Login Succes',
  props<{ isLogin: boolean, isAuth: boolean; }>()
);
export const loginFail = createAction(
  '[Login Page] Login Fail',
  props<{ error: string }>()
);

export const loginLogout = createAction(
  '[Login Page] Logout',
);

