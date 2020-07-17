import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducer/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from '../login/effect/login.effect';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
// import {InMemoryDataService} from "../user/service/in-memory-data.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromLogin.commonFeatureKey, fromLogin.commonReducer),
    EffectsModule.forFeature([LoginEffect]),
  ],
  providers: [],
})
export class authModule {}
