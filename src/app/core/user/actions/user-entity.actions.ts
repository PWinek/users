import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { UserModel } from '../models/user-entity.model';

export const loadUserEntities = createAction(
  '[UserEntity/API] Load UserEntitys',
  props<{ userEntities: UserModel[] }>()
);

export const addUserEntity = createAction(
  '[UserEntity/API] Add UserEntity',
  props<{ userEntity: UserModel }>()
);

export const upsertUserEntity = createAction(
  '[UserEntity/API] Upsert UserEntity',
  props<{ userEntity: UserModel }>()
);

export const addUserEntities = createAction(
  '[UserEntity/API] Add UserEntities',
  props<{ userEntities: any }>()
);

export const upsertuserEntities = createAction(
  '[UserEntity/API] Upsert userEntities',
  props<{ userEntities: UserModel[] }>()
);

export const updateUserEntity = createAction(
  '[UserEntity/API] Update UserEntity',
  props<{ userEntity: Update<UserModel> }>()
);

export const updateuserEntities = createAction(
  '[UserEntity/API] Update userEntities',
  props<{ userEntities: Update<UserModel>[] }>()
);

export const deleteUserEntity = createAction(
  '[UserEntity/API] Delete UserEntity',
  props<{ id: string }>()
);

export const deleteuserEntities = createAction(
  '[UserEntity/API] Delete userEntities',
  props<{ ids: string[] }>()
);

export const clearuserEntities = createAction(
  '[UserEntity/API] Clear userEntities'
);
