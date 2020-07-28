export type IdType = string | number;

export type ByKey<D = any> = {
  [key in IdType]: D;
};
