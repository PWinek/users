import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { login } from '../core/login/actions/login.actions';
import { select, Store } from '@ngrx/store';
import { State } from '../core';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import {GetUserInfo} from '../core/login/actions/loggedUser.actions';
import {
  selectLoginSucces,
  sleectUserError,
} from '../core/login/selectors/login.selector';
import {selectUserInfoSucces, selectUserName} from '../core/login/selectors/user.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userName$:Observable<string>;
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
    this.auth$ = this.store.pipe(select(selectUserInfoSucces));
    this.userName$ = this.store.pipe(select(selectUserName));

    this.login$.subscribe((login) => {
      login ? this.infoGather() : console.log('cos nie tak');
    });

    combineLatest([this.auth$, this.userError$]).subscribe(
      ([isAuth, isError]) => {
        console.log({ isAuth, isError });
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
