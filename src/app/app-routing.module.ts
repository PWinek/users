import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './core/containers/login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full', canActivate: [], component: LoginPageComponent },
  // { path: 'users', canActivate: [], component: UsersComponent },
  { path: 'users',
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

