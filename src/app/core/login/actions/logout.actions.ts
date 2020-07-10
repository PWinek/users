import { createAction, props } from '@ngrx/store';

export const logout = createAction(
  '[Logout Page] Logout',
  props<{ id: number }>()
);
export const logoutSucces = createAction(
  '[Logout Page] Logout Succes',
  props<{ isLogin: boolean, isAuth: boolean }>()
);
export const logoutFail = createAction(
  '[Logout Page] Logout Fail',
  props<{ error: string }>()
);
