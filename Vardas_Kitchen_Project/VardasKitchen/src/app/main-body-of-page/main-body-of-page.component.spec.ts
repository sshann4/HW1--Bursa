import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyOfPageComponent } from './main-body-of-page.component';

describe('MainBodyOfPageComponent', () => {
  let component: MainBodyOfPageComponent;
  let fixture: ComponentFixture<MainBodyOfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyOfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
