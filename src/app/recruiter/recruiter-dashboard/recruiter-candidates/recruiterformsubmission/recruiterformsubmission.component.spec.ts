import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterformsubmissionComponent } from './recruiterformsubmission.component';

describe('RecruiterformsubmissionComponent', () => {
  let component: RecruiterformsubmissionComponent;
  let fixture: ComponentFixture<RecruiterformsubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterformsubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterformsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
