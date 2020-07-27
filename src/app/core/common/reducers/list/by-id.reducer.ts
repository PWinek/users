import { PayloadAction } from '../../models/payload-action';
import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { ListMeta } from '../../models/list-meta';
import { listReducerUtil } from './common.reducer';
import { ByIdState } from '../../models/state/by-id-state';
import { ListState } from '../../models/state/list-state';
import {M, P} from "@angular/cdk/keycodes";

const defaultMapActionToKey = (action?: any): any => {
 return  _.get(action, 'id', 0) || 0;
}

export const listByIdReducerUtil = {
  getById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    return <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.get(state[listKey]),
    };
  },
  getSuccessById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    const res = <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.getSuccess(state[listKey], action),
    };
    return res;
  },
  getFailureById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    return <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.getFailure(state[listKey], action),
    };
  },
  changeParamsById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    return <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.changeParams(state[listKey], action),
    };
  },
  clearParamsById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    return <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.clearParams(state[listKey]),
    };
  },
  clearDataById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>,
    action: any
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey(action);
    return <ByIdState<ListState<P, M>>>{
      ...state,
      [listKey]: listReducerUtil.clearData(state[listKey]),
    };
  },
};

