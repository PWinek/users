/*

/api/auth/login - usługa do logowania
/api/auth/me - usługa do pobierania danych zalogowanego użytkownika

/api/users/ - lista użytkowników
/api/users/123 - szczegóły wybranego użytkownika

 */

// export const testState = {
//   common: {
//     auth: {
//       login: {
//         success: false,
//         loading: false,
//         error: {
//           status: 400,
//           error: {errorCode: 'LOGIN_ERROR', message: "Niepoprawne login lub hasło"}
//         }
//       },
//       loggedUser: {
//         id: 321,
//         username: 'Adam'
//       }
//     }
//   },
// //   users: {
//     selectedId: 123,
//     list: {
//       items: [{id:1, imie: 'asdas'}, {}, {}],
//       success: true,
//       loading: false,
//       error: null
//     },
//     user: {
//       id: 123,
//       data: {}
//       success: true,
//       loading: false,
//       error: null
//     },
//     userById: {
//       123: {
//         id: 123,
//         data: {...},
//         success: true,
//         loading: false,
//         error: null
//       },
//       124: {
//         id: 123,
//         data: {...},
//         success: true,
//         loading: false,
//         error: null
//       },
//     }
//
//   }
// };
//
//
// getCommonState = createSelector();
// getCommonAuthState = createSelector();
// getCommonAuthLoginState = createSelector();
//
//
// getCommonAuthLoginSuccess
// getCommonAuthLoginLoading
// getCommonAuthLoginError
//
//
// getUsersState = createSelector();
// getUsersListState =
//
// getUsersSelectedData = createSelector(
//   getUsersSelectedId,
//   getUsersById,
//   (usersById, id) => usersById[id]
// )

state: {
  Auth: {},
  User: {
    userDetails: {
    20 : {

      }
    },
    userList: {
      1: {
        loading: false,
          success: true,
          data: [{
          id: 1,
          name :'Adam'
        },
          {
            id: 2,
            name :'Adam'
          }]
      },
          meta: {
          totalCount: 2,
            UserCOunt: 2,
        }, params: {
          PageSize: 20,
            Pageofset:0,
            Name: 'Adam'
        }
      }
      }
    }
  }
}


