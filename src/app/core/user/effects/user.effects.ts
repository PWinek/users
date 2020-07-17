// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, concatMap, map } from 'rxjs/operators';
// import { of } from 'rxjs';
//
// import * as UserActions from '../actions/user.actions';
// import * as UserEntityActions from '../actions/user-entity.actions';
// import { UserService } from '../service/user.service';
//
//
// @Injectable()
// export class UserEffects {
//   loadUsers$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(UserActions.loadUsers),
//       concatMap((action) =>
//         this.service.getHeroes().pipe(
//           map((res) =>
//             UserActions.loadUsersSuccess({
//               data: {
//                 id: 1,
//                 res,
//               },
//             })
//           ),
//           catchError((error) => of(UserActions.loadUsersFailure({ error })))
//         )
//       )
//     );
//   });
//   loadUsersSuccess$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.loadUsersSuccess),
//       map((action) => action.data.res.entities),
//       map((data) => {
//         console.log ( data.userEntities );
//        return  UserEntityActions.addUserEntities({
//           userEntities: data.userEntities,
//         }); }
//       )
//     )
//   );
//
//   constructor(private actions$: Actions, private service: UserService) {}
// }
