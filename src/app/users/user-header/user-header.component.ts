import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUserName } from '../../core/login/selectors/user.selector';
import { State } from '../../core';
import {logout, logoutInfoClear} from '../../core/login/actions/logout.actions';
import {
  userClearData,
  userClearParams,
} from '../../core/user/actions/user.actions';
import { profilEnum } from '../../core/login/models/profil.enum';
import { Router } from '@angular/router';
import {loginInfoClear} from "../../core/login/actions/login.actions";
import {UserInfoClear} from "../../core/login/actions/loggedUser.actions";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit, OnDestroy {
  userName$: Observable<string>;
  profil = profilEnum;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.userName$ = this.store.pipe(select(selectUserName));
  }
  ngOnDestroy() {
    this.store.dispatch(userClearData({ id: this.profil.admin }));
    this.store.dispatch(userClearParams({ id: this.profil.admin }));
    this.store.dispatch(logoutInfoClear({}));
  }

  logOut() {
    this.store.dispatch(loginInfoClear({}));
    this.store.dispatch(logout({}));
    this.store.dispatch(UserInfoClear({}));
    this.store.dispatch(logoutInfoClear({}));
    this.router.navigate(['/']);
  }
}
