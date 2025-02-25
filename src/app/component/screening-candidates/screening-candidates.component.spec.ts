import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCandidatesComponent } from './screening-candidates.component';

describe('ScreeningCandidatesComponent', () => {
  let component: ScreeningCandidatesComponent;
  let fixture: ComponentFixture<ScreeningCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
