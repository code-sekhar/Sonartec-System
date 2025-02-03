import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterAccountSettingsComponent } from './recruiter-account-settings.component';

describe('RecruiterAccountSettingsComponent', () => {
  let component: RecruiterAccountSettingsComponent;
  let fixture: ComponentFixture<RecruiterAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterAccountSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
