import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAsideComponent } from './search-aside.component';

describe('SearchAsideComponent', () => {
  let component: SearchAsideComponent;
  let fixture: ComponentFixture<SearchAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
