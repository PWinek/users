import { PayloadAction } from '../../models/payload-action';
import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { ListMeta } from '../../models/list-meta';
import { listReducerUtil } from './common.reducer';
import { ByIdState } from '../../models/state/by-id-state';
import { ListState } from '../../models/state/list-state';

const defaultMapActionToKey = (action?: any): any =>
  _.get(action, 'payload.id', 0) || 0;

export const listByIdReducerUtil = {
  getById: function <P = { [key: string]: any }, M = ListMeta>(
    state: ByIdState<ListState<P, M>>
  ): ByIdState<ListState<P, M>> {
    const listKey = defaultMapActionToKey();
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
      [listKey]: listReducerUtil.getFailure(),
    };
  },
};
const createListByIdSelector = (stateSelector, id) =>
  createSelector(
    stateSelector,
    (state: ByIdState<ListState>) => state && state[id]
  );
