import { ItemState } from './item-state';

export interface SingleState<I = number> extends ItemState {
  id?: I;
  res?: I;
}
