import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../core';
import { loadUsers } from '../core/user/actions/user.actions';
import {login, loginInfoClear} from '../core/login/actions/login.actions';
import { Router } from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {logout, logoutInfoClear} from "../core/login/actions/logout.actions";
import {selectLogoutSucces} from "../core/login/selectors/logout.selector";
import {UserInfoClear} from "../core/login/actions/loggedUser.actions";
import {selectUserId} from "../core/login/selectors/user.selector";
import {selectLoginSucces} from "../core/login/selectors/login.selector";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  login$: Observable<any>;
  logout$: Observable<boolean>;
  userId$: Observable<number>;
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.logout$ =this.store.pipe(select(selectLogoutSucces));
    this.userId$ =this.store.pipe(select(selectUserId));
    this.login$ =this.store.pipe(select(selectLoginSucces));

    combineLatest([this.login$, this.logout$]).subscribe(([login, logout])=>{
      (logout) && (login) ? this.clearInfo() : console.log('cos nie tak');
    });
    this.userId$.subscribe((id)=>{
      (id === null) ? this.router.navigate(['/']) : console.log('cos nie tak');
    });

  }
  getUser() {
    this.store.dispatch(loadUsers({ payload: { id: 1 } }));
  }
  logOut() {
    this.store.dispatch(logout({}));
  }
  clearInfo(){

    this.store.dispatch(UserInfoClear({}));
    this.store.dispatch(loginInfoClear({}));
    this.store.dispatch(logoutInfoClear({}));
  }
}
