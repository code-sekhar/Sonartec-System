import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPersonalInformationComponent } from './recruiter-personal-information.component';

describe('RecruiterPersonalInformationComponent', () => {
  let component: RecruiterPersonalInformationComponent;
  let fixture: ComponentFixture<RecruiterPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterPersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
