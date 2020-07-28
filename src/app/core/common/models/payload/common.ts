import { ListMeta } from '../list-meta';

interface SendPayload<D> {
  data: D;
}

interface SuccessPayload<R> {
  res: R;
}

interface FailPayload<E = Error> {
  errors: E;
}

interface ChangeParamsPayload<P = { [key: string]: any }> {
  params: P;
}

interface ChangeMetaPayload<M = ListMeta> {
  meta: M;
}

export { SendPayload, SuccessPayload, FailPayload, ChangeParamsPayload, ChangeMetaPayload };
