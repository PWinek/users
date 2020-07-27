import { PaginationParams } from '../../common/models/pagination.params';
import { SortingParams } from '../../common/models/sorting.params';

export interface UserParams extends PaginationParams, SortingParams {
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
}
