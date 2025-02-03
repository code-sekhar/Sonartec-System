import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminUserComponent } from './amin-user.component';

describe('AminUserComponent', () => {
  let component: AminUserComponent;
  let fixture: ComponentFixture<AminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AminUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
