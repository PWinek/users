/** Domyślne meta dane listy */
import { ListMeta } from '../common/models/list-meta';
import { ListState } from '../common/models/state/list-state';
/** Domyślne parametry listy */
const defaultListParams = {};

/** Domyślne meta dane listy */
const defaultListMeta = {
  TotalCount: 0,
};

/** Narzędzie do generowania domyślnych stanów list */
export class ListUtil {
  /** Metoda zwraca domyślny stan listy */
  static getDefaultListState<P = { [key: string]: any }, M = ListMeta>(
    params?: P
  ): ListState<P, M> {
    return {
      data: null,
      loading: false,
      success: false,
      errors: null,
      params: ListUtil.getDefaultListParams<P>(params),
      meta: ListUtil.getDefaultListMeta() as M,
    };
  }

  /** Zwraca domyślne parametry listy */
  static getDefaultListParams<P = { [key: string]: any }>(params?: P): P {
    return <P>Object.assign({}, <P>defaultListParams, params || {});
  }

  /** Zwraca domyślny stan metadanych listy */
  static getDefaultListMeta(meta?: ListMeta): ListMeta {
    return { ...defaultListMeta, ...meta };
  }
}
