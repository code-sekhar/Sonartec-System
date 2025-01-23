import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishJobComponent } from './publish-job.component';

describe('PublishJobComponent', () => {
  let component: PublishJobComponent;
  let fixture: ComponentFixture<PublishJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
