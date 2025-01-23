import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsfromHeadhuntersComponent } from './requestsfrom-headhunters.component';

describe('RequestsfromHeadhuntersComponent', () => {
  let component: RequestsfromHeadhuntersComponent;
  let fixture: ComponentFixture<RequestsfromHeadhuntersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsfromHeadhuntersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsfromHeadhuntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
