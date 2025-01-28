import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDetailpipelineComponent } from './recruiter-detailpipeline.component';

describe('RecruiterDetailpipelineComponent', () => {
  let component: RecruiterDetailpipelineComponent;
  let fixture: ComponentFixture<RecruiterDetailpipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterDetailpipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterDetailpipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
