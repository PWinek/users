import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../index';
import { SetAppTitleAction } from '../../template/actions/set-app-title.actions';
import * as _ from 'lodash';

@Injectable()
export class TitleGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(
      new SetAppTitleAction({
        value:
          `${_.get(route, 'data.title', '') ? '' + _.get(route, 'data.title', '') : ' - '}` +
          ' - System Informatyczny Obsługi Egzaminów Ogólnokształcących'
      })
    );
    return true;
  }
}
