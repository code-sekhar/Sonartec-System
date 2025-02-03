import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPipelineComponent } from './admin-pipeline.component';

describe('AdminPipelineComponent', () => {
  let component: AdminPipelineComponent;
  let fixture: ComponentFixture<AdminPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
