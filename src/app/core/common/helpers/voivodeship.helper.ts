import * as _ from 'lodash';
import { Voivodeship } from '../../location/models/voivodeship';

export class VoivodeshipHelper {
  static mapDictionaryResponseToItem(item: Voivodeship): Voivodeship {
    return _.pick(item, ['ID', 'Nazwa', 'KodTeryt', 'Oke.ID']) as Voivodeship;
  }
}
