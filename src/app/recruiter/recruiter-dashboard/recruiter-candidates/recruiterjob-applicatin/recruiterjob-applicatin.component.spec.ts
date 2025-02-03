import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterjobApplicatinComponent } from './recruiterjob-applicatin.component';

describe('RecruiterjobApplicatinComponent', () => {
  let component: RecruiterjobApplicatinComponent;
  let fixture: ComponentFixture<RecruiterjobApplicatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterjobApplicatinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterjobApplicatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
