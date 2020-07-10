import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {UserModule} from './user/user.module';
import {LoginModule} from './login/login.module';

@NgModule({
  imports: [CommonModule, UserModule, LoginModule],
  providers: [],
})
export class AppStoreModule {}
