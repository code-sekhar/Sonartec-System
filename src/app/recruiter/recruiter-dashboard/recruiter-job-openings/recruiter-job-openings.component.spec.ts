import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterJobOpeningsComponent } from './recruiter-job-openings.component';

describe('RecruiterJobOpeningsComponent', () => {
  let component: RecruiterJobOpeningsComponent;
  let fixture: ComponentFixture<RecruiterJobOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterJobOpeningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterJobOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
