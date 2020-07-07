import { ListMeta } from './list-meta';

interface Normalized {
  entities?: { [id: string]: any };
}

interface NormalizedSingle extends Normalized {
  result: number | string;
}

interface NormalizedList<P = { [key: string]: any }, M = ListMeta> extends Normalized {
  result: number[] | string[];
  params?: P;
  meta?: M;
}

export { Normalized, NormalizedSingle, NormalizedList };
