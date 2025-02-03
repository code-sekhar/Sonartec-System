import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterEarningsOverviewComponent } from './recruiter-earnings-overview.component';

describe('RecruiterEarningsOverviewComponent', () => {
  let component: RecruiterEarningsOverviewComponent;
  let fixture: ComponentFixture<RecruiterEarningsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterEarningsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterEarningsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
