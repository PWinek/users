import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { State } from '../../core';
import { profilEnum } from '../../core/login/models/profil.enum';
import {
  loadUsers,
  userChangeParams,
} from '../../core/user/actions/user.actions';
import _ from 'lodash';
import { UserParams } from '../../core/user/models/user.params';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectParams } from '../../core/user/selectors/user.selectors';
import { distinctUntilChanged, filter, first } from 'rxjs/operators';
import { OuterSubscriber } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-search-aside',
  templateUrl: './search-aside.component.html',
  styleUrls: ['./search-aside.component.scss'],
})
export class SearchAsideComponent implements OnInit {
  @Output() userChangeParams = new EventEmitter();
  searchParams$: Observable<UserParams>;
  searchForm: FormGroup;
  profil = profilEnum;
  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.searchParams$ = this.store.pipe(select(selectParams));
    this.searchParams$.subscribe((p)=>{
      this.searchForm.patchValue(p);
    })
  }
  createForm() {
    this.searchForm = this.fb.group({
      name: null,
      username: null,
      email: null,
      phone: null,
    });
  }
  onSubmit() {
    this.userChangedParams();
  }
  clear() {
    this.searchForm.patchValue({
      name: null,
      username: null,
      email: null,
      phone: null,
    });
    this.userChangedParams();
  }

  userChangedParams() {
    console.log('tests');
    this.userChangeParams.emit(this.searchForm.value);
  }
}
