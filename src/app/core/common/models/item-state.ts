export interface ItemState<T = number | string, P = any> {
  data?: T;
  loading?: boolean;
  success?: boolean;
  errors?: any;
  params?: P;
}
