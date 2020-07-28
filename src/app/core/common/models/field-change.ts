export interface FieldChange<T = any> {
  key?: string;
  keyRenderer?: Function | string;
  oldVal?: T;
  newVal?: T;
}
