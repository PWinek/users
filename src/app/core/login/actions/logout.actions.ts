import { createAction, props } from '@ngrx/store';

export const logout = createAction('[logout Page] logout', props<{}>());
export const logoutSucces = createAction(
  '[logout Page] logout succes',
  props<{}>()
);
export const logoutFail = createAction(
  '[logout Page] logout failed',
  props<{ error: string }>()
);
export const logoutInfoClear = createAction(
  '[logout Page] Logout info clear',
  props<{}>()
);
