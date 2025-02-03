import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforgotNewPasswordComponent } from './adminforgot-new-password.component';

describe('AdminforgotNewPasswordComponent', () => {
  let component: AdminforgotNewPasswordComponent;
  let fixture: ComponentFixture<AdminforgotNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminforgotNewPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminforgotNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
