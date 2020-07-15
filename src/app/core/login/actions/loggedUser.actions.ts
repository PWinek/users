import { createAction, props } from '@ngrx/store';

export const UserInfoGathering = createAction(
  '[Login Page] User info gathering',
  props<{ username: string }>()
);
export const UserInfoGatheringSucces = createAction(
  '[Login Page] User info gathering succes',
  props<{ id: number; username: string }>()
);
export const UserInfoGatheringFail = createAction(
  '[Login Page] User info gathering fail',
  props<{ error: string }>()
);
export const UserInfoClear = createAction(
  '[Login Page] User info clear',
  props<{}>()
);
