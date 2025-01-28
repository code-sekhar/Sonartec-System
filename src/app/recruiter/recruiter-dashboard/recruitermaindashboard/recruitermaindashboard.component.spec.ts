import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitermaindashboardComponent } from './recruitermaindashboard.component';

describe('RecruitermaindashboardComponent', () => {
  let component: RecruitermaindashboardComponent;
  let fixture: ComponentFixture<RecruitermaindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitermaindashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitermaindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
