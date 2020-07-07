import { ChangeMetaPayload, ChangeParamsPayload, FailPayload, SendPayload, SuccessPayload } from './common';
import { ListMeta } from '../list-meta';

interface ByIdPayload {
  id?: number | string;
}

interface SendByIdPayload<D> extends ByIdPayload, SendPayload<D> {}

interface SuccessByIdPayload<R> extends ByIdPayload, SuccessPayload<R> {}

interface FailByIdPayload<E = Error> extends ByIdPayload, FailPayload<E> {}

interface ChangeParamsByIdPayload<P = { [key: string]: any }> extends ByIdPayload, ChangeParamsPayload<P> {}

interface ChangeMetaByIdPayload<M = ListMeta> extends ByIdPayload, ChangeMetaPayload<M> {}

export {
  ByIdPayload,
  SendByIdPayload,
  SuccessByIdPayload,
  FailByIdPayload,
  ChangeParamsByIdPayload,
  ChangeMetaByIdPayload
};
