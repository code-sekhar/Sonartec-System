import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNotificationCenterComponent } from './support-notification-center.component';

describe('SupportNotificationCenterComponent', () => {
  let component: SupportNotificationCenterComponent;
  let fixture: ComponentFixture<SupportNotificationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportNotificationCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportNotificationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
