import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCandidateComponent } from './recruiter-candidate.component';

describe('RecruiterCandidateComponent', () => {
  let component: RecruiterCandidateComponent;
  let fixture: ComponentFixture<RecruiterCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
