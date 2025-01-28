import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterforgotYourPasswordComponent } from './recruiterforgot-your-password.component';

describe('RecruiterforgotYourPasswordComponent', () => {
  let component: RecruiterforgotYourPasswordComponent;
  let fixture: ComponentFixture<RecruiterforgotYourPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterforgotYourPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterforgotYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
