import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsTrendComponent } from './earnings-trend.component';

describe('EarningsTrendComponent', () => {
  let component: EarningsTrendComponent;
  let fixture: ComponentFixture<EarningsTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningsTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
