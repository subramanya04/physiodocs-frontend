import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Objective,
  PatientDetails,
  PhysioForm,
  PlanOfTreatment,
  Subjective
} from '../../models';

@Injectable()
export class PhysioFormService {
  constructor(private fb: FormBuilder) {}

  getPhysioForm(physioDetails?: PhysioForm): FormGroup {
    const group = this.fb.group({
      patientDetails: this.getPatientDetailsForm(physioDetails?.patientDetails),
      subjective: this.getSubjectiveForm(physioDetails?.subjective),
      objective: this.getObjectiveForm(physioDetails?.objective),
      planOfTreatment: this.getPlanOfTreatmentForm(
        physioDetails?.planOfTreatment
      )
    });

    return group;
  }

  getPatientDetailsForm(patientDetails?: PatientDetails): FormGroup {
    const group = this.fb.group({
      assessmentId: [patientDetails?.assessmentId],
      patientId: [patientDetails?.patientId, [Validators.required]],
      patientName: [patientDetails?.patientName],
      age: [patientDetails?.age],
      gender: [patientDetails?.gender],
      nationality: [patientDetails?.nationality],
      language: [patientDetails?.language],
      deptId: [patientDetails?.deptId, [Validators.required]],
      diagnosis: [patientDetails?.diagnosis],
      vitalsLastRecorded: [patientDetails?.vitalsLastRecorded],
      referringPhysician: [patientDetails?.referringPhysician],
      modeOfPayment: [patientDetails?.modeOfPayment],
      treatingTherapist: [
        patientDetails?.treatingTherapist,
        [Validators.required]
      ]
    });
    return group;
  }

  getSubjectiveForm(subjective?: Subjective): FormGroup {
    const group = this.fb.group({
      assessmentId: [subjective?.assessmentId],
      medicalDiagnosis: [
        subjective?.medicalDiagnosis,
        [Validators.required, Validators.maxLength(1000)]
      ],
      treatingDiagnosis: [
        subjective?.treatingDiagnosis,
        [Validators.required, Validators.maxLength(1000)]
      ],
      subjectBodyAssessment: [
        subjective?.subjectBodyAssessment,
        [Validators.required]
      ],
      historyOfPresentComplaints: [
        subjective?.historyOfPresentComplaints,
        [Validators.required, Validators.maxLength(1000)]
      ],
      currentOrPastTreatment: [subjective?.currentOrPastTreatment],
      medicalAndFamilyHistory: [subjective?.medicalAndFamilyHistory],
      surgicalHistory: [subjective?.surgicalHistory],
      familyHistory: [subjective?.familyHistory],
      socialHistory: [subjective?.socialHistory],
      medicationAndAllergies: [subjective?.medicationAndAllergies],
      otherSymptoms: [subjective?.otherSymptoms]
    });
    return group;
  }

  getObjectiveForm(objective?: Objective): FormGroup {
    const group = this.fb.group({
      assessmentId: [objective?.assessmentId],
      releventManualMuscleTesting: [objective?.releventManualMuscleTesting],
      releventSoftTissueTesting: [
        objective?.releventSoftTissueTesting,
        [Validators.required]
      ],
      totalAssessment: [objective?.totalAssessment]
    });
    return group;
  }

  getPlanOfTreatmentForm(planOfTreatment?: PlanOfTreatment): FormGroup {
    const group = this.fb.group({
      assessmentId: [planOfTreatment?.assessmentId],
      longTermGoals: [planOfTreatment?.longTermGoals],
      shortTermGoals: [planOfTreatment?.shortTermGoals, [Validators.required]],
      treatmentGiven: [planOfTreatment?.treatmentGiven, [Validators.required]],
      finalComments: [planOfTreatment?.finalComments, [Validators.required]]
    });
    return group;
  }
}
