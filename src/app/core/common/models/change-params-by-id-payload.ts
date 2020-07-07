/** @deprecated use ChangeParamsByIdPayload from src/app/store/common/models/payload/by-id.ts instead */
export interface ChangeParamsByIdPayload<P = any> {
  id: string;
  params: P;
}
