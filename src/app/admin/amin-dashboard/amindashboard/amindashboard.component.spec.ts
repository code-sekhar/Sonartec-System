import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmindashboardComponent } from './amindashboard.component';

describe('AmindashboardComponent', () => {
  let component: AmindashboardComponent;
  let fixture: ComponentFixture<AmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmindashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
