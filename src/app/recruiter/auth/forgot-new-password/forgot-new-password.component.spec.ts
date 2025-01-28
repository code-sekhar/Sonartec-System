import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotNewPasswordComponent } from './forgot-new-password.component';

describe('ForgotNewPasswordComponent', () => {
  let component: ForgotNewPasswordComponent;
  let fixture: ComponentFixture<ForgotNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotNewPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
