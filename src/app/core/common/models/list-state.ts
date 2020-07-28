import { ListParams } from './list-params';

/** @deprecated */
export interface ListState<T, R = ListParams> {
  items: T[];
  params?: R;
  loading?: boolean;
  errors?: any;
}
