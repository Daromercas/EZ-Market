import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestortComponent } from './investort.component';

describe('InvestortComponent', () => {
  let component: InvestortComponent;
  let fixture: ComponentFixture<InvestortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
