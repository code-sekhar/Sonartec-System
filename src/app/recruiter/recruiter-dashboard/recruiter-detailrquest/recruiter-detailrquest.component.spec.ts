import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDetailrquestComponent } from './recruiter-detailrquest.component';

describe('RecruiterDetailrquestComponent', () => {
  let component: RecruiterDetailrquestComponent;
  let fixture: ComponentFixture<RecruiterDetailrquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterDetailrquestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterDetailrquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
