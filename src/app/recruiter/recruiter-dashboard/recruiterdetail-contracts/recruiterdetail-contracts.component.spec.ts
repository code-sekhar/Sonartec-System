import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterdetailContractsComponent } from './recruiterdetail-contracts.component';

describe('RecruiterdetailContractsComponent', () => {
  let component: RecruiterdetailContractsComponent;
  let fixture: ComponentFixture<RecruiterdetailContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterdetailContractsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterdetailContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
