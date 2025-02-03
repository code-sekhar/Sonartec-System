import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterContractsComponent } from './recruiter-contracts.component';

describe('RecruiterContractsComponent', () => {
  let component: RecruiterContractsComponent;
  let fixture: ComponentFixture<RecruiterContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterContractsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
