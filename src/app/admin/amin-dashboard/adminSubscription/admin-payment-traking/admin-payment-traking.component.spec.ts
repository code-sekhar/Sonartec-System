import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentTrakingComponent } from './admin-payment-traking.component';

describe('AdminPaymentTrakingComponent', () => {
  let component: AdminPaymentTrakingComponent;
  let fixture: ComponentFixture<AdminPaymentTrakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPaymentTrakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPaymentTrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
