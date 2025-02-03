import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterinterviewComponent } from './recruiterinterview.component';

describe('RecruiterinterviewComponent', () => {
  let component: RecruiterinterviewComponent;
  let fixture: ComponentFixture<RecruiterinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterinterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
