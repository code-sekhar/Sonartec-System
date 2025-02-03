import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommissionsComponent } from './admin-commissions.component';

describe('AdminCommissionsComponent', () => {
  let component: AdminCommissionsComponent;
  let fixture: ComponentFixture<AdminCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
