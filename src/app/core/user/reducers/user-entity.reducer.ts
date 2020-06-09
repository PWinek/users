import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserModel } from '../models/user-entity.model';
import * as UserEntityActions from '../actions/user-entity.actions';

export const userEntitiesFeatureKey = 'userEntities';

export interface UserEntitiesState extends EntityState<UserModel> {}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<
  UserModel
>();

export const initialState: UserEntitiesState = adapter.getInitialState({});

export const userEntitiesReducer = createReducer(
  initialState,
  on(UserEntityActions.addUserEntity, (state, action) =>
    adapter.addOne(action.userEntity, state)
  ),
  on(UserEntityActions.upsertUserEntity, (state, action) =>
    adapter.upsertOne(action.userEntity, state)
  ),
  on(UserEntityActions.addUserEntities, (state, action) =>
    adapter.addMany(action.userEntities, state)
  ),
  on(UserEntityActions.upsertuserEntities, (state, action) =>
    adapter.upsertMany(action.userEntities, state)
  ),
  on(UserEntityActions.updateUserEntity, (state, action) =>
    adapter.updateOne(action.userEntity, state)
  ),
  on(UserEntityActions.updateuserEntities, (state, action) =>
    adapter.updateMany(action.userEntities, state)
  ),
  on(UserEntityActions.deleteUserEntity, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(UserEntityActions.deleteuserEntities, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(UserEntityActions.loadUserEntities, (state, action) =>
    adapter.setAll(action.userEntities, state)
  ),
  on(UserEntityActions.clearuserEntities, (state) => adapter.removeAll(state))
);
export function reducer(state: UserEntitiesState | undefined, action: Action) {
  return userEntitiesReducer(state, action);
}
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
