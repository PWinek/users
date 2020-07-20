import { ItemState } from './item-state';
import { ListMeta } from '../list-meta';

export interface ListState<P = { [key: string]: any }, M = ListMeta> extends ItemState {
  data: any;
  params: P;
  meta: M;
}
