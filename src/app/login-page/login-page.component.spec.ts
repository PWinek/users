import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppStoreModule } from '../core/app-store.module';
import { EffectsModule, EffectSources, EffectsRootModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { Location } from '@angular/common';
import { State } from '../core';



describe('LoginPageComponent', () => {
  let store: Store<State>;
  let fixture: ComponentFixture<LoginPageComponent>;
  let login: LoginPageComponent;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        [StoreModule.forRoot({})],
        CommonModule,
        EffectsModule.forRoot(),
        EffectsRootModule,
        AppStoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        RouterTestingModule.withRoutes([
          { path: 'users', component: UsersComponent },
          { path: ' ', component: LoginPageComponent },
        ]),
        ReactiveFormsModule,
      ],
      providers: [Store],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    login = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  }));

  it('Should create Login page', () => {
    expect(login).toBeTruthy();
  });
  it('Should have `hide` set as `true` ', () => {
    expect(login.hide).toBe(true);
  });
  it('Should contain login button` ', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    // debugger;
    expect(buttonElement.nativeElement).toBeTruthy();
  });
  it('It should have minimum two input elements` ', () => {
    const input = fixture.debugElement.queryAll(By.css('input'));
    expect(input.length >= 2).toBeTruthy();
  });
  it('It should navigate to / before clicking into link` ', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

  it('Clicking on button should dispatch an action', () => {
    const link = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = link[0].nativeElement;
    nativeButton.click();
    fixture.detectChanges();
    expect(store.dispatch).toBeTruthy();
  });
});
