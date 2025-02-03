import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailContractPipelineComponent } from './admindetail-contract-pipeline.component';

describe('AdmindetailContractPipelineComponent', () => {
  let component: AdmindetailContractPipelineComponent;
  let fixture: ComponentFixture<AdmindetailContractPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmindetailContractPipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailContractPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
