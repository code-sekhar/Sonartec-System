import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportModerationComponent } from './support-moderation.component';

describe('SupportModerationComponent', () => {
  let component: SupportModerationComponent;
  let fixture: ComponentFixture<SupportModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportModerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
