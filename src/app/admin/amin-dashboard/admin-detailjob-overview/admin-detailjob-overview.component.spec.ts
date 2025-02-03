import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailjobOverviewComponent } from './admin-detailjob-overview.component';

describe('AdminDetailjobOverviewComponent', () => {
  let component: AdminDetailjobOverviewComponent;
  let fixture: ComponentFixture<AdminDetailjobOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailjobOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailjobOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
