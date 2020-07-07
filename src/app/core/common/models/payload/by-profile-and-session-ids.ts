import { ChangeMetaPayload, ChangeParamsPayload, FailPayload, SendPayload, SuccessPayload } from './common';
import { ListMeta } from '../list-meta';

export interface ByProfileAndSessionIdsPayload {
  profileId?: number;
  sessionId?: number;
}

interface SendByProfileAndSessionIdsPayload<D> extends ByProfileAndSessionIdsPayload, SendPayload<D> {}

interface SuccessByProfileAndSessionIdsPayload<R> extends ByProfileAndSessionIdsPayload, SuccessPayload<R> {}

interface FailByProfileAndSessionIdsPayload<E = Error> extends ByProfileAndSessionIdsPayload, FailPayload<E> {}

interface ChangeParamsByProfileAndSessionIdsPayload<P = { [key: string]: any }>
  extends ByProfileAndSessionIdsPayload,
    ChangeParamsPayload<P> {}

interface ChangeMetaByProfileAndSessionIdsPayload<M = ListMeta>
  extends ByProfileAndSessionIdsPayload,
    ChangeMetaPayload<M> {}

export {
  SendByProfileAndSessionIdsPayload,
  SuccessByProfileAndSessionIdsPayload,
  FailByProfileAndSessionIdsPayload,
  ChangeParamsByProfileAndSessionIdsPayload,
  ChangeMetaByProfileAndSessionIdsPayload
};
