import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWalletComponent } from './dashboard-wallet.component';

describe('DashboardWalletComponent', () => {
  let component: DashboardWalletComponent;
  let fixture: ComponentFixture<DashboardWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
