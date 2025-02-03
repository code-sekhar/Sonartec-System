import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailPipelineComponent } from './admin-detail-pipeline.component';

describe('AdminDetailPipelineComponent', () => {
  let component: AdminDetailPipelineComponent;
  let fixture: ComponentFixture<AdminDetailPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailPipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
