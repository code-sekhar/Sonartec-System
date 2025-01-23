import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftJobComponent } from './draft-job.component';

describe('DraftJobComponent', () => {
  let component: DraftJobComponent;
  let fixture: ComponentFixture<DraftJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
