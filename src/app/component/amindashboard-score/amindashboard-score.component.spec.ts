import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmindashboardScoreComponent } from './amindashboard-score.component';

describe('AmindashboardScoreComponent', () => {
  let component: AmindashboardScoreComponent;
  let fixture: ComponentFixture<AmindashboardScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmindashboardScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmindashboardScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
