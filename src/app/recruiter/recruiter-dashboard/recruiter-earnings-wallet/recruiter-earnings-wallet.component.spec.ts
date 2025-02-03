import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterEarningsWalletComponent } from './recruiter-earnings-wallet.component';

describe('RecruiterEarningsWalletComponent', () => {
  let component: RecruiterEarningsWalletComponent;
  let fixture: ComponentFixture<RecruiterEarningsWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterEarningsWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterEarningsWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
