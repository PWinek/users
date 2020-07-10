import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducer/login.reducers';

export const selectLoginState = createFeatureSelector<fromLogin.LoginState>(
  fromLogin.loginFeatureKey
);
export const selectIsLogin = createSelector(selectLoginState, ( state) => state.isLogin);


export const selectAuth = createSelector(selectLoginState, ( state ) => state.isAuth);
