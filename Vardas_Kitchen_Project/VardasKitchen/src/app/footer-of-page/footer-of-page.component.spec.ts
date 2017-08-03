import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOfPageComponent } from './footer-of-page.component';

describe('FooterOfPageComponent', () => {
  let component: FooterOfPageComponent;
  let fixture: ComponentFixture<FooterOfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
