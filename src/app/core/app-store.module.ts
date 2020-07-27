import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {UserModule} from './user/user.module';
import { authModule } from './login/auth.module';
import {UserModule} from "./user/user.module";
import { ContainersDirective } from './containers.directive';

@NgModule({
  imports: [CommonModule, authModule, UserModule],
  providers: [],
  declarations: [ContainersDirective],
})
export class AppStoreModule {}
