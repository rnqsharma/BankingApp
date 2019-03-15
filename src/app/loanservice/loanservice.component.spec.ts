import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanserviceComponent } from './loanservice.component';

describe('LoanserviceComponent', () => {
  let component: LoanserviceComponent;
  let fixture: ComponentFixture<LoanserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
