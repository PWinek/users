import { ListState } from '../../models/state/list-state';
import { PayloadAction } from '../../models/payload-action';
import { ListMeta } from '../../models/list-meta';
import { FailPayload, SuccessPayload } from '../../models/payload/common';
import { NormalizedList } from '../../models/normalized';
import _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { ListUtil } from '../../../util/list.util';
import { login } from '../../../login/actions/login.actions';

/**
 * Reducer do obsługi list.
 * 'get' ustawia flagę loading na 'true'
 * 'getFail' ustawia błędy jakie wystąpiły podczas pobierania
 * 'getSuccess' ustawia listę id, parametry, oraz metadane
 * 'changeParams' zmienia parametry listy
 * 'changeMeta' zmienia metadane listy
 * 'clearParams' czyści parametry listy
 * 'clearMeta' czyści metadane listy
 * 'clear' czyści stan listy
 * */
export let listReducerUtil = {
  get: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>
  ): ListState<P, M> {
    return <ListState<P, M>>{
      ...state,
      loading: true,
      success: false,
      errors: null,
    };
  },
  getSuccess: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
    action: any
  ): ListState<P, M> {
    const successPayload: NormalizedList<P, M> = action.data;
    return <ListState<P, M>>{
      ...state,
      data: successPayload,
      loading: false,
      success: true,
      errors: null,
    };
  },
  getFailure: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
    action: any
  ): ListState<P, M> {
    const failPayload: any = action.error;
    return <ListState<P, M>>{
      ...state,
      data: [],
      loading: false,
      errors: failPayload.message,
      success: false,
    };
  },
  changeParams: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
    action: any
  ): ListState<P, M> {
    const params: P = action.params;
    return <ListState<P, M>>{
      ...state,
      params,
    };
  },
  clearParams: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
  ): ListState<P, M> {
    return <ListState<P, M>>{
      ...state,
      params: {},
    };
  },
  clearData: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
  ): ListState<P, M> {
    return <ListState<P, M>>{
      ...state,
      data: {},
    };
  },
};

// function createListIdsSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.data
//   );
// }
//
// function createListParamsSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.params
//   );
// }
//
// function createListMetaSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.meta
//   );
// }
//
// function createListLoadingSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.loading
//   );
// }
//
// function createListSuccessSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.success
//   );
// }
//
// function createListErrorsSelector<P = { [key: string]: any }, M = ListMeta>(
//   listStateSelector
// ) {
//   return createSelector(
//     listStateSelector,
//     (state: ListState<P, M>) => state && state.errors
//   );
// }
//
// function createListTotalCountSelector<P = { [key: string]: any }>(
//   listStateSelector
// ) {
//   return createSelector(
//     createListMetaSelector<P, ListMeta>(listStateSelector),
//     (meta: ListMeta) => meta && meta.TotalCount
//   );
// }
