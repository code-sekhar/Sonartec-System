import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterdashboardscoreComponent } from './recruiterdashboardscore.component';

describe('RecruiterdashboardscoreComponent', () => {
  let component: RecruiterdashboardscoreComponent;
  let fixture: ComponentFixture<RecruiterdashboardscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterdashboardscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterdashboardscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
