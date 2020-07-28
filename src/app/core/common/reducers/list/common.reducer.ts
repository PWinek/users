import { ListState } from '../../models/state/list-state';
import { PayloadAction } from '../../models/payload-action';
import { ListMeta } from '../../models/list-meta';
import { FailPayload, SuccessPayload } from '../../models/payload/common';
import { NormalizedList } from '../../models/normalized';
import { createSelector } from '@ngrx/store';
import { ListUtil } from '../../../util/list.util';

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
    };
  },
  getSuccess: function <P = { [key: string]: any }, M = ListMeta>(
    state: ListState<P, M>,
    action: any
  ): ListState<P, M> {
    const successPayload: SuccessPayload<NormalizedList<P, M>> = action.data;
    console.log(successPayload);
    return <ListState<P, M>>{
      ...state,
      ids: successPayload.res.result,
      loading: false,
      success: true,
      errors: null,
    };
  },
  getFailure: function <P = { [key: string]: any }, M = ListMeta>(): (
    state: ListState<P, M>,
    action: PayloadAction
  ) => ListState<P, M> {
    return (state: ListState<P, M>, action: PayloadAction): ListState<P, M> => {
      const failPayload: FailPayload = action.payload;
      return <ListState<P, M>>{
        ...state,
        ids: [],
        loading: false,
        errors: failPayload.errors,
        success: false,
      };
    };
  },
};

function createListIdsSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.ids
  );
}

function createListParamsSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.params
  );
}

function createListMetaSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.meta
  );
}

function createListLoadingSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.loading
  );
}

function createListSuccessSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.success
  );
}

function createListErrorsSelector<P = { [key: string]: any }, M = ListMeta>(
  listStateSelector
) {
  return createSelector(
    listStateSelector,
    (state: ListState<P, M>) => state && state.errors
  );
}

function createListTotalCountSelector<P = { [key: string]: any }>(
  listStateSelector
) {
  return createSelector(
    createListMetaSelector<P, ListMeta>(listStateSelector),
    (meta: ListMeta) => meta && meta.TotalCount
  );
}
