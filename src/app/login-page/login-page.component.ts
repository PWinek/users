import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { login } from '../core/login/actions/login.actions';
import { Store, select } from '@ngrx/store';
import { State } from '../core';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import {
  selectAuth,
  selectIsLogin,
} from '../core/login/selectors/login.selector';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  login$: Observable<boolean>;
  auth$: Observable<boolean>;
  profileForm: FormGroup;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
    this.login$ = this.store.pipe(select(selectIsLogin));
    this.auth$ = this.store.pipe(select(selectAuth));

    combineLatest([this.login$, this.auth$])
      .pipe(
        filter(([isLogin, isAuth]) => !_.isNil(isLogin) && !_.isNil(isAuth))
      )
      .subscribe(([isLogin, isAuth]) => {
        // console.log({ isLogin, isAuth });
        isLogin && isAuth
          ? this.router.navigate(['users'])
          : !isLogin && isAuth
          ? this.router.navigate(['/'])
          : isLogin && !isAuth
          ? this.wrongLoginData()
          : console.log('cos nie tak');
      });
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

  wrongLoginData() {
    let input = document.querySelectorAll('input');
    let fail = document.querySelectorAll('.fail');
    input.forEach((input) => (input.style.border = '1.7px solid red'));
    fail[0].setAttribute('style', 'display:block');
  }
}
