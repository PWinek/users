import { PayloadAction } from '../models/payload-action';
import { ActionReducer } from '@ngrx/store';
import * as _ from 'lodash';

function defaultMapActionToKey<S = number>(action: PayloadAction) {
  return <S>_.get(action, 'payload.id', null);
}

export interface SelectIdReducerTypes {
  select?: string;
  clear?: string;
}

interface SelectIdReducerParams<F = number> {
  types: SelectIdReducerTypes;
  mapActionToKey?: (action) => F;
}

function selectIdReducer<S = number>(params: SelectIdReducerParams<S>): ActionReducer<S> {
  return (state: S, action: PayloadAction): S => {
    switch (action.type) {
      case params.types.select:
        return params.mapActionToKey ? params.mapActionToKey(action) : defaultMapActionToKey<S>(action);
      case params.types.clear:
        return null;
      default:
        return state;
    }
  };
}

export { selectIdReducer };
