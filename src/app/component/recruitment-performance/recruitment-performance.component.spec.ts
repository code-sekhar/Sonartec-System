import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentPerformanceComponent } from './recruitment-performance.component';

describe('RecruitmentPerformanceComponent', () => {
  let component: RecruitmentPerformanceComponent;
  let fixture: ComponentFixture<RecruitmentPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
