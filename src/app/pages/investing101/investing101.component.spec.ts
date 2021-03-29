import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Investing101Component } from './investing101.component';

describe('Investing101Component', () => {
  let component: Investing101Component;
  let fixture: ComponentFixture<Investing101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Investing101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Investing101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
