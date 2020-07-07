import { HttpErrorResponse } from '@angular/common/http';

/** Model danych nie powielonej akcji
 * @deprecated use from @deprecated use from common/models/payload/common.ts */
export interface FailPayload {
  id?: string;
  errors: HttpErrorResponse;
}
