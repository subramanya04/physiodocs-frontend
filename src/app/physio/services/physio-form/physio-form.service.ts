import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PhysioFormService {
  constructor(private fb: FormBuilder) {}

  getPhysioForm(deptId?: number): FormGroup {
    const group = this.fb.group({
      patientDetails: this.getPatientDetailsForm(),
      subjective: {},
      objective: {},
      assessment: {},
      plan: {}
    });

    return group;
  }

  getPatientDetailsForm(): FormGroup {
    const group = this.fb.group({});
    return group;
  }

  getSubjectiveForm(): FormGroup {
    const group = this.fb.group({});
    return group;
  }

  getObjectiveForm(): FormGroup {
    const group = this.fb.group({});
    return group;
  }

  getAssessmentForm(): FormGroup {
    const group = this.fb.group({});
    return group;
  }

  getPlanForm(): FormGroup {
    const group = this.fb.group({});
    return group;
  }
}
