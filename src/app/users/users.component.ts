import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../core';
import { loadUsers } from '../core/user/actions/user.actions';
import { login, loginLogout } from '../core/login/actions/login.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectIsLogin } from '../core/login/selectors/login.selector';
import { logout } from '../core/login/actions/logout.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  login$: Observable<boolean>;
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.login$ = this.store.pipe(select(selectIsLogin));
    this.login$.subscribe((login) => {
      if (login === null) {
        this.router.navigate(['']);
      }
    });
  }
  getUser() {
    this.store.dispatch(loadUsers({ payload: { id: 1 } }));
  }
  logOut() {
    this.store.dispatch(logout({ id: 1 }));
  }
}
