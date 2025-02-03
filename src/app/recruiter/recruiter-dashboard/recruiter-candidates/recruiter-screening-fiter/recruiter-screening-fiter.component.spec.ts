import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterScreeningFiterComponent } from './recruiter-screening-fiter.component';

describe('RecruiterScreeningFiterComponent', () => {
  let component: RecruiterScreeningFiterComponent;
  let fixture: ComponentFixture<RecruiterScreeningFiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterScreeningFiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterScreeningFiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
