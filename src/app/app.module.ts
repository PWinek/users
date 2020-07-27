import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './core/app-store.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginPageComponent } from './core/containers/login-page/login-page.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AppMaterialModule } from './material-module';
import { SideNavComponent } from './users/side-nav/side-nav.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { SearchAsideComponent } from './users/search-aside/search-aside.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';


@NgModule({
  declarations: [AppComponent, UsersComponent, LoginPageComponent, SideNavComponent, UsersTableComponent, SearchAsideComponent, UserHeaderComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),

    StoreDevtoolsModule.instrument(),
    MatFormFieldModule,
    AppMaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
