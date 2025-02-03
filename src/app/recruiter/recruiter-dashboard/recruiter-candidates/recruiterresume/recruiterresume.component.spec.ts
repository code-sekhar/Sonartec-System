import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterresumeComponent } from './recruiterresume.component';

describe('RecruiterresumeComponent', () => {
  let component: RecruiterresumeComponent;
  let fixture: ComponentFixture<RecruiterresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterresumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
