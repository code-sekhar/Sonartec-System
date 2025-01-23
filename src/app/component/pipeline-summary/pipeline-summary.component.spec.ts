import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineSummaryComponent } from './pipeline-summary.component';

describe('PipelineSummaryComponent', () => {
  let component: PipelineSummaryComponent;
  let fixture: ComponentFixture<PipelineSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelineSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
