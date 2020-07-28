import { HistoryEntity } from '../models/history-entity';

export class HistoryHelper {
  /**
   * ID atrybut danych historycznych
   *
   * Generuje na podstawie elementu `HistoryEntity` id atrybut. Przykład:
   *
   * ```
   * const item: {
   *   ID: 1,
   *   StartTime: '11-11-2000T22:00:00Z',
   *   EndTime: '22-22-2000T22:00:00Z
   * }
   *
   * const res = HistoryHelper.getIdAttribute(item);
   *
   * console.log(res); // '1/11-11-2000T22:00:00Z/22-22-2000T22:00:00Z'
   * ```
   *
   * @param item
   */
  static getIdAttribute(item: HistoryEntity): string {
    return [item.ID, item.StartTime || '', item.EndTime || ''].join('/');
  }
}
