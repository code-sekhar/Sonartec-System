import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningFiterCardComponent } from './screening-fiter-card.component';

describe('ScreeningFiterCardComponent', () => {
  let component: ScreeningFiterCardComponent;
  let fixture: ComponentFixture<ScreeningFiterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningFiterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningFiterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
