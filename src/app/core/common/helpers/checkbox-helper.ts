import { MatPseudoCheckboxState } from '@angular/material/core/typings/selection/pseudo-checkbox/pseudo-checkbox';
import * as _ from 'lodash';

export class CheckboxHelper {
  static getCheckBoxSinglePageState(listIDs: number[], checkedIDs: number[]): MatPseudoCheckboxState {
    if (!checkedIDs || !listIDs || _.difference(listIDs, checkedIDs).length === listIDs.length) {
      return 'unchecked';
    } else if (_.difference(listIDs, checkedIDs).length === 0) {
      return 'checked';
    } else {
      return 'indeterminate';
    }
  }
}
