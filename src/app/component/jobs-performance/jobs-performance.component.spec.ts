import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPerformanceComponent } from './jobs-performance.component';

describe('JobsPerformanceComponent', () => {
  let component: JobsPerformanceComponent;
  let fixture: ComponentFixture<JobsPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
