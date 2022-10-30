import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOfTreatmentFormComponent } from './plan-of-treatment-form.component';

describe('PlanOfTreatmentFormComponent', () => {
  let component: PlanOfTreatmentFormComponent;
  let fixture: ComponentFixture<PlanOfTreatmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanOfTreatmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanOfTreatmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
