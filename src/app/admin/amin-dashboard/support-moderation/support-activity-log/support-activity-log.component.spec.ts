import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportActivityLogComponent } from './support-activity-log.component';

describe('SupportActivityLogComponent', () => {
  let component: SupportActivityLogComponent;
  let fixture: ComponentFixture<SupportActivityLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportActivityLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
