import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotYourNewPasswordComponent } from './forgot-your-new-password.component';

describe('ForgotYourNewPasswordComponent', () => {
  let component: ForgotYourNewPasswordComponent;
  let fixture: ComponentFixture<ForgotYourNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotYourNewPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotYourNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
