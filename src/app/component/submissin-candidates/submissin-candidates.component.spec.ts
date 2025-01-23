import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissinCandidatesComponent } from './submissin-candidates.component';

describe('SubmissinCandidatesComponent', () => {
  let component: SubmissinCandidatesComponent;
  let fixture: ComponentFixture<SubmissinCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissinCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissinCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
