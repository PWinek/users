import * as _ from 'lodash';
import { createSelector } from 'reselect';
import { PayloadAction } from '../models/payload-action';
import { ItemState } from '../models/item-state';
import { State } from '../../index';
import { ByIdState } from '../models/state/by-id-state';
import { SingleState } from '../models/state/single-state';

export type ID = number | string;

export interface OperationTypes {
  request?: string;
  requestFail?: string;
  requestSuccess?: string;
  requestClear?: string;
  requestClearErrors?: string;
}

export type Operations<T> = { [key in keyof T]: OperationTypes };

export type OperationsState<T, D = number> = { [key in keyof T]: SingleState<D> };

export interface OperationsByIdParams<T, D = number> {
  mapActionToId: (action: PayloadAction) => D;
  operations: Operations<T>;
}

/**
 * Reducer do obsługi operacji obiektu i utrzymania ich stanów
 *
 * `mapActionToId` funkcja mapująca Id
 * `operations` tablica operacji;
 *
 */
export const operationsByIdReducer = <T, D extends ID = number>({
  mapActionToId,
  operations
}: OperationsByIdParams<T, D>): ((
  state: ByIdState<OperationsState<T, D>>,
  action: PayloadAction
) => ByIdState<OperationsState<T, D>>) => {
  let types = [];

  // scalenie typów akcji ze wszystkich operacji w jedną tablicę
  _.forEach(operations, (val: OperationTypes) => {
    const operationTypes = _.values(val);
    types = [...types, ...operationTypes];
  });

  return (state: ByIdState<OperationsState<T, D>>, action: PayloadAction): ByIdState<OperationsState<T, D>> => {
    if (types.indexOf(action.type) > -1) {
      state = state || {};
      const id: D = mapActionToId(action);
      if (_.isNil(id)) {
        console.error(new Error(`[operationsByIdReducer] 'id' is invalid, action type: ${action.type}, key: ${id}`));
        return state;
      }

      // lodash workaround for `Type 'D' cannot be used to index type 'ByIdState<T>'` error
      const operationsState: OperationsState<T, D> = _.get(state, `${id}`, {}) as OperationsState<T, D>;

      const newOperationsState: OperationsState<T, D> = <OperationsState<T, D>>_.mapValues(operations, (val, key) => {
        return itemOperationStateReducer<D>(val)(operationsState[key], action);
      });
      return {
        ...state,
        [id]: <OperationsState<T, D>>Object.assign({}, operationsState, newOperationsState)
      };
    } else {
      return state;
    }
  };
};

/**
 * Reducer do obsługi pojedynczej operacji i obłsugi jej stanu
 *
 * `request` ustawia flagę loading na true;
 * `requestSuccess`  ustawia flagi loading na false oraz success na true
 * `requestFail` ustawia flagi loading na false, success na false oraz ustawia przekazane przez zdarzenia błędy na errors
 * `requestClear` ustawia początkowy stan
 *
 */
export const itemOperationStateReducer = <I = number>(
  types: OperationTypes
): ((state: SingleState<I>, action: PayloadAction) => SingleState<I>) => {
  const { request, requestSuccess, requestFail, requestClear, requestClearErrors } = types;
  return (state: SingleState<I>, action: PayloadAction): SingleState<I> => {
    switch (action.type) {
      case request:
        return <SingleState<I>>{
          ...state,
          loading: true,
          success: false,
          errors: null
        };
      case requestSuccess:
        return <SingleState<I>>{
          ...state,
          id: _.get(action, 'payload.res.result') as I,
          res: !_.get(action, 'payload.res.entities') && (_.get(action, 'payload.res') as I),
          loading: false,
          success: true,
          errors: null
        };
      case requestFail:
        return <SingleState<I>>{
          ...state,
          loading: false,
          success: false,
          errors: action.payload && action.payload.errors
        };
      case requestClear:
        return <SingleState<I>>{
          loading: false,
          success: false,
          errors: null
        };
      case requestClearErrors:
        return <SingleState<I>>{
          errors: null
        };
      default:
        return state;
    }
  };
};

export const createSingleStateIdSelector = <I = number>(getItemState: (state: State) => SingleState<I>) => {
  return createSelector(
    getItemState,
    (state: SingleState<I>) => state && state.id
  );
};

export const createItemStateLoadingSelector = (getItemState: (state: State) => ItemState) => {
  return createSelector(
    getItemState,
    (state: ItemState) => (state && state.loading) || false
  );
};

export const createItemStateErrorsSelector = (getItemState: (state: State) => ItemState) => {
  return createSelector(
    getItemState,
    (state: ItemState) => (state && state.errors) || null
  );
};

export const createItemStateSuccessSelector = (getItemState: (state: State) => ItemState) => {
  return createSelector(
    getItemState,
    (state: ItemState) => (state && state.success) || false
  );
};

export const createItemStateResSelector = <I = number>(getItemState: (state: State) => SingleState<I>) => {
  return createSelector(
    getItemState,
    (state: SingleState<I>) => state && state.res
  );
};
