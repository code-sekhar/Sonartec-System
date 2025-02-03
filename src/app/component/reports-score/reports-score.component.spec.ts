import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsScoreComponent } from './reports-score.component';

describe('ReportsScoreComponent', () => {
  let component: ReportsScoreComponent;
  let fixture: ComponentFixture<ReportsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
