import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterInformationComponent } from './recruiter-information.component';

describe('RecruiterInformationComponent', () => {
  let component: RecruiterInformationComponent;
  let fixture: ComponentFixture<RecruiterInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
