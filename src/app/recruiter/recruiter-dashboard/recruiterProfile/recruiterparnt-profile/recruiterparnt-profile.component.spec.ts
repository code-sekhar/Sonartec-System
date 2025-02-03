import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterparntProfileComponent } from './recruiterparnt-profile.component';

describe('RecruiterparntProfileComponent', () => {
  let component: RecruiterparntProfileComponent;
  let fixture: ComponentFixture<RecruiterparntProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterparntProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterparntProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
