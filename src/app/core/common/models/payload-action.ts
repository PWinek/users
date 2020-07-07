import { Action } from '@ngrx/store';

export interface PayloadAction<T = any> extends Action {
  payload: T;
}
