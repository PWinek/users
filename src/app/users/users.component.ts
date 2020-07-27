import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../core';
import { login, loginInfoClear } from '../core/login/actions/login.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { logout, logoutInfoClear } from '../core/login/actions/logout.actions';
import { selectLogoutSucces } from '../core/login/selectors/logout.selector';
import { UserInfoClear } from '../core/login/actions/loggedUser.actions';
import { selectUserId } from '../core/login/selectors/user.selector';
import { selectLoginSucces } from '../core/login/selectors/login.selector';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { loadUsers, userChangeParams } from '../core/user/actions/user.actions';
import {
  selectParams,
  selectUserData,
} from '../core/user/selectors/user.selectors';
import { profilEnum } from '../core/login/models/profil.enum';
import { distinctUntilChanged, first } from 'rxjs/operators';
import { UserParams } from '../core/user/models/user.params';
import _ from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  searchParams$: Observable<UserParams>;
  login$: Observable<any>;
  logout$: Observable<boolean>;
  userId$: Observable<number>;
  data$: Observable<any>;
  mobileQuery: MediaQueryList;
  profil = profilEnum;

  private _mobileQueryListener: () => void;
  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.searchParams$ = this.store.pipe(select(selectParams));
    this.logout$ = this.store.pipe(select(selectLogoutSucces));
    this.userId$ = this.store.pipe(select(selectUserId));
    this.login$ = this.store.pipe(select(selectLoginSucces));
    this.data$ = this.store.pipe(select(selectUserData));
    this.route.queryParams.pipe(distinctUntilChanged((q,p)=>_.isEqual(q,p))).subscribe((qP) => {
      this.store.dispatch(
        userChangeParams({
          id: this.profil.admin,
          params: qP,
        })
      );
      this.store.dispatch(loadUsers({ id: this.profil.admin }));
    });
    this.updateQueryParams();
    combineLatest([this.login$, this.logout$, this.data$])
      .pipe(first())
      .subscribe(([login, logout, data]) => {
        logout && login ? this.clearInfo() : console.log('cos nie tak');
      });
  }
  clearInfo() {
    this.store.dispatch(UserInfoClear({}));
    this.store.dispatch(loginInfoClear({}));
    this.store.dispatch(logoutInfoClear({}));
  }

  @ViewChild('snav') snav: MatSidenav;
  @ViewChild('snav1') snav1: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1100) {
      this.snav.close();
      this.snav1.close();
    } else if (event.target.innerWidth > 1100) {
      this.snav.open();
      this.snav1.open();
    }
  }
  changeParams(params?) {
    this.updateQueryParams(params);
  }
  sortParams(params?) {
    this.updateQueryParams(params);
  }
  private updateQueryParams(qParams?) {
    const res = _.omit(qParams, [
      'active',
      'direction',
      'previousPageIndex',
      'pageIndex',
      'pageSize',
      'length',
    ]);
    this.searchParams$.pipe(first()).subscribe((params) => {
      return this.router.navigate(['/users'], {
        queryParamsHandling: 'merge',
        queryParams: {
          ...params,
          ...res,
          IsDesending: qParams?.direction,
          OrderBy: qParams?.active,
          PageSize: qParams?.pageSize,
          PageIndex: qParams?.pageIndex,
        },
      });
    });
  }
}
