import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforgotYourPasswordComponent } from './adminforgot-your-password.component';

describe('AdminforgotYourPasswordComponent', () => {
  let component: AdminforgotYourPasswordComponent;
  let fixture: ComponentFixture<AdminforgotYourPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminforgotYourPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminforgotYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
