import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterpipelineComponent } from './recruiterpipeline.component';

describe('RecruiterpipelineComponent', () => {
  let component: RecruiterpipelineComponent;
  let fixture: ComponentFixture<RecruiterpipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterpipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterpipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
