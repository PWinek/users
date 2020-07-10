import * as fromLogin from './reducer/login.reducers';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from './effect/login.effect';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.checkingReducer),
    EffectsModule.forFeature([LoginEffect]),
  ],
  providers: [],
})
export class LoginModule {}
