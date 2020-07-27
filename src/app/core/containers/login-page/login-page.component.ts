import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { login } from '../../login/actions/login.actions';
import { select, Store } from '@ngrx/store';
import { State } from '../../index';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import {GetUserInfo} from '../../login/actions/loggedUser.actions';
import {
  selectLoginSucces,
  sleectUserError,
} from '../../login/selectors/login.selector';
import {selectUserInfoSucces, selectUserName} from '../../login/selectors/user.selector';
import {selectLogoutSucces} from "../../login/selectors/logout.selector";
import {distinctUntilChanged, first} from "rxjs/operators";
import _ from 'lodash';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userName$:Observable<string>;
  logout$:Observable<boolean>;
  login$: Observable<boolean>;
  auth$: Observable<any>;
  userError$: Observable<string>;
  profileForm: FormGroup;
  hide = true;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
    this.userError$ = this.store.pipe(select(sleectUserError));
    this.login$ = this.store.pipe(select(selectLoginSucces));
    this.logout$ = this.store.pipe(select(selectLogoutSucces));
    this.auth$ = this.store.pipe(select(selectUserInfoSucces));
    this.userName$ = this.store.pipe(select(selectUserName));

    combineLatest([this.login$, this.logout$]).pipe(distinctUntilChanged((q,p)=>_.isEqual(q,p))).subscribe(([login,logout]) => {
      login ? this.infoGather() : console.log('cos nie tak');
    });

    combineLatest([this.auth$, this.userError$]).subscribe(
      ([isAuth, isError]) => {
        console.log('alive');
        isAuth ? this.router.navigate(['users']) : console.log('cos nie tak');
      }
    );
  }

  createForm() {
    this.profileForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.store.dispatch(
      login({
        username: this.profileForm.value.login,
        password: this.profileForm.value.password,
      })
    );
  }
  infoGather() {
    this.store.dispatch(
      GetUserInfo({
        username: this.profileForm.value.login,
      })
    );
  }
}
