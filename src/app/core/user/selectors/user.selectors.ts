import {createSelector} from "@ngrx/store";
import {selectUserState} from "../reducers/user.reducer";
import {profilEnum} from "../../login/models/profil.enum";

export const selectLoadUsers = createSelector(
  selectUserState,
  (state)=>state && state.userList
);
export const selectUserEnum = createSelector(
  selectLoadUsers,
  (state)=> state[profilEnum.admin]);

export const selectSuccesStatus = createSelector(
  selectUserEnum,
  (state)=> state && state.success);


export const selectUserData = createSelector(
  selectUserEnum,
  (state)=> state && state.data);

export const selectParams = createSelector(
  selectUserEnum,
  (state)=> state && state.params);


