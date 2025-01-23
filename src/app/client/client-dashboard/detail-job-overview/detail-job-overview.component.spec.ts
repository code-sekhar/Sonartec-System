import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobOverviewComponent } from './detail-job-overview.component';

describe('DetailJobOverviewComponent', () => {
  let component: DetailJobOverviewComponent;
  let fixture: ComponentFixture<DetailJobOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailJobOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailJobOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
