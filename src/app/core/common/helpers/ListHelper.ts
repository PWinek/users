import * as _ from 'lodash';
import { ListHelperParams } from '../models/list-helper-params';

export class ListHelper {
  static filterList(items: any[], params: any[]) {
    let filteredList = items;
    if (!_.isNil(items) && !_.isNil(params)) {
      params.forEach(param => {
        if (!_.isNil(param.value)) {
          filteredList = ListHelper.filterArrayByParam(filteredList, param);
        }
      });
    }
    return filteredList;
  }

  static filterArrayByParam(items, param): any[] {
    return _.filter(items, function(item) {
      return _.includes(_.toLower(ListHelper.getValueByKey(item, param.key)), _.toLower(param.value));
    });
  }

  static getValueByKey(item, key) {
    return _.get(item, key);
  }

  static filterListById<T = any>(items: T[], params: ListHelperParams[]) {
    const selectedParams = _.chain(params)
      .filter((p: ListHelperParams) => !_.isNil(p.value))
      .value() as ListHelperParams[];
    return _.chain(items)
      .pickBy((item: any) => {
        return (
          _.chain(selectedParams)
            .pickBy(
              (p: ListHelperParams) =>
                _.chain(item)
                  .get(p.key)
                  .value() === p.value
            )
            .map()
            .size()
            .value() === selectedParams.length
        );
      })
      .map(item => item)
      .value() as any[];
  }
}
