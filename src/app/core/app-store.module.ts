import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {UserModule} from "./user/user.module";

@NgModule({
  imports: [CommonModule, UserModule],
  providers: [],
})
export class AppStoreModule {}
