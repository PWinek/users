import { LoginPageComponent } from '../login-page/login-page.component';
import { async, TestBed } from '@angular/core/testing';
import { CommonModule, Location } from '@angular/common';
import { BrowserModule, By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { AppStoreModule } from '../core/app-store.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';

describe('LoginPageComponent', () => {
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
    }).compileComponents();
  }));

  it('It should navigate to / when clicking logout ', () => {
    let component: LoginPageComponent;
    const fixture = TestBed.createComponent(LoginPageComponent);
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = link[1].nativeElement;
    nativeButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('');
    });
  });
});
