import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminmainDashboardComponent } from './aminmain-dashboard.component';

describe('AminmainDashboardComponent', () => {
  let component: AminmainDashboardComponent;
  let fixture: ComponentFixture<AminmainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AminmainDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminmainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
