import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEducationInformationComponent } from './personal-education-information.component';

describe('PersonalEducationInformationComponent', () => {
  let component: PersonalEducationInformationComponent;
  let fixture: ComponentFixture<PersonalEducationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalEducationInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalEducationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
