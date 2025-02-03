import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobPostingsComponent } from './admin-job-postings.component';

describe('AdminJobPostingsComponent', () => {
  let component: AdminJobPostingsComponent;
  let fixture: ComponentFixture<AdminJobPostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminJobPostingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
