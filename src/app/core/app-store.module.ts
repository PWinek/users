import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {UserModule} from './user/user.module';
import { authModule } from './login/auth.module';

@NgModule({
  imports: [CommonModule, authModule],
  providers: [],
})
export class AppStoreModule {}
