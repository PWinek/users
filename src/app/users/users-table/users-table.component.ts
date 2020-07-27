import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatest, observable, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MatSort } from '@angular/material/sort';
import {
  selectParams,
  selectSuccesStatus,
  selectUserData,
} from '../../core/user/selectors/user.selectors';
import { State } from '../../core';
import { distinctUntilChanged, filter, first } from 'rxjs/operators';
import { UserParams } from '../../core/user/models/user.params';
import { ActivatedRoute, Router } from '@angular/router';
import {
  loadUsers,
  userChangeParams,
} from '../../core/user/actions/user.actions';
import _ from 'lodash';
import { profilEnum } from '../../core/login/models/profil.enum';
import { query } from '@angular/animations';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  @Output() sortParams = new EventEmitter();
  TableParams$: Observable<UserParams>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  usersTable$: Observable<any>;
  usersSucces$: Observable<any>;
  dataSource = new MatTableDataSource();
  profil = profilEnum;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usersTable$ = this.store.pipe(select(selectUserData));
    this.usersSucces$ = this.store.pipe(select(selectSuccesStatus));
    this.TableParams$ = this.store.pipe(select(selectParams));
    combineLatest([this.usersTable$, this.TableParams$]).subscribe(
      ([usersTable, params]) => {
        this.dataSource = new MatTableDataSource<any>(usersTable);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.sort.direction = params?.IsDesending;
        this.sort.active = params?.OrderBy;
        this.paginator.pageSize = params?.PageSize;
        this.paginator.pageIndex = params?.PageIndex;
      }
    );
  }
  onPageChange(customParams?) {
    this.userChangedParams(customParams);
  }
  userChangedParams(customParams?) {
    this.sortParams.emit({ ...customParams });
  }
}
