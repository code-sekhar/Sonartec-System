import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPipelineComponent } from './hiring-pipeline.component';

describe('HiringPipelineComponent', () => {
  let component: HiringPipelineComponent;
  let fixture: ComponentFixture<HiringPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringPipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
