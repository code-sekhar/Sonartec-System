import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesRatingsCardComponent } from './candidates-ratings-card.component';

describe('CandidatesRatingsCardComponent', () => {
  let component: CandidatesRatingsCardComponent;
  let fixture: ComponentFixture<CandidatesRatingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesRatingsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesRatingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
