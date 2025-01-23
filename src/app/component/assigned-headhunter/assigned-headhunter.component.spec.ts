import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedHeadhunterComponent } from './assigned-headhunter.component';

describe('AssignedHeadhunterComponent', () => {
  let component: AssignedHeadhunterComponent;
  let fixture: ComponentFixture<AssignedHeadhunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedHeadhunterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedHeadhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
