import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCandidatesMoveStageComponent } from './screening-candidates-move-stage.component';

describe('ScreeningCandidatesMoveStageComponent', () => {
  let component: ScreeningCandidatesMoveStageComponent;
  let fixture: ComponentFixture<ScreeningCandidatesMoveStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningCandidatesMoveStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningCandidatesMoveStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
