import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterProfessionalInformationComponent } from './recruiter-professional-information.component';

describe('RecruiterProfessionalInformationComponent', () => {
  let component: RecruiterProfessionalInformationComponent;
  let fixture: ComponentFixture<RecruiterProfessionalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterProfessionalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterProfessionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
