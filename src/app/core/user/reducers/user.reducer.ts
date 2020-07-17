// import { combineReducers } from '@ngrx/store';
// import * as fromUserEntity from './user-entity.reducer';
// import * as fromUserList from './user-list.reducer';
//
// export const userFeatureKey = 'user';
// export interface UserState {
//   [fromUserList.userListFeatureKey]: fromUserList.ListUserState;
//   [fromUserEntity.userEntitiesFeatureKey]: fromUserEntity.UserEntitiesState;
// }
//
// export const userInitialState: UserState = {
//   [fromUserList.userListFeatureKey]: fromUserList.listUserInitialState,
//   [fromUserEntity.userEntitiesFeatureKey]: fromUserEntity.initialState,
// };
// export const userReducer = combineReducers<UserState>(
//   {
//     [fromUserList.userListFeatureKey]: fromUserList.reducer,
//     [fromUserEntity.userEntitiesFeatureKey]: fromUserEntity.reducer,
//   },
//   userInitialState
// );
