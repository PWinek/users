import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export const stateFeatureKey = 'state';

export interface State {}

export const reducers: ActionReducerMap<State> = {};
export function getReducers(): ActionReducerMap<State, Action> {
  return reducers;
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
