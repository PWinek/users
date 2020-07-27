import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {UserModule} from './user/user.module';
import { authModule } from './login/auth.module';
import {UserModule} from "./user/user.module";
import { ContainersDirective } from './containers.directive';
import { LoggedPageComponent } from './containers/logged-page/logged-page.component';

@NgModule({
  imports: [CommonModule, authModule, UserModule],
  providers: [],
  declarations: [ContainersDirective, LoggedPageComponent],
})
export class AppStoreModule {}
