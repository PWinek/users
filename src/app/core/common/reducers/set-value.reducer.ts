import * as _ from 'lodash';
import { ActionReducer } from '@ngrx/store';
import { PayloadAction } from '../models/payload-action';
import { ByIdPayload } from '../models/payload/by-id';
import { ByKey, IdType } from '../types/common.types';

export interface SetValuePayload<S = number> {
  value: S;
}

export interface SetValueByKeyPayload<S = number> extends ByIdPayload, SetValuePayload<S> {}

function defaultMapActionToValue<S = number>(action: PayloadAction<SetValuePayload>): S {
  return <S>_.get(action, 'payload.value', null);
}

function defaultMapActionToKey<S = number>(action: PayloadAction<SetValueByKeyPayload>): IdType {
  return <IdType>_.get(action, 'payload.id', null);
}

export interface SetValueReducerTypes {
  setValue?: string;
  clearValue?: string;
}

interface SetValueReducerParams<F = number> {
  types: SetValueReducerTypes;
  mapActionToValue?: (action) => F;
}

interface SetValueByKeyReducerParams<F = number> extends SetValueReducerParams<F> {
  mapActionToKey?: (action) => IdType;
}

export function setValueReducer<S = number>(params: SetValueReducerParams<S>): ActionReducer<S> {
  return (state: S, action: PayloadAction): S => {
    switch (action.type) {
      case params.types.setValue:
        return params.mapActionToValue ? params.mapActionToValue(action) : defaultMapActionToValue<S>(action);
      case params.types.clearValue:
        return null;
      default:
        return state;
    }
  };
}

export function setValueByKeyReducer<S = number>(params: SetValueByKeyReducerParams<S>): ActionReducer<ByKey<S>> {
  return (state: ByKey<S>, action: PayloadAction): ByKey<S> => {
    if (
      Object.keys(params.types)
        .map((typeKey: string) => params.types[typeKey])
        .indexOf(action.type) !== -1
    ) {
      const key = (params.mapActionToKey || defaultMapActionToKey)(action);
      return <ByKey<S>>{
        ...state,
        [key]: setValueReducer<S>(params)(state[key], action)
      };
    } else {
      return state;
    }
  };
}
