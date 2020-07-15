import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../core';
import { loadUsers } from '../core/user/actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
  getUser() {
    this.store.dispatch(loadUsers({ id: 1 }));
  }
}
