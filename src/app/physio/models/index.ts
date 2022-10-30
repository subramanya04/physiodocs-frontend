import { GenderTypes, LanguageTypes } from '../../core/models';

export interface PatientDetails {
  assessmentId?: number;
  patientId: number;
  patientName?: string;
  age?: number;
  gender?: GenderTypes;
  nationality?: string;
  language?: LanguageTypes;
  deptId?: number;
  diagnosis?: string;
  vitalsLastRecorded?: string;
  referringPhysician?: string;
  modeOfPayment?: string;
  treatingTherapist?: string;
}

export interface Subjective {
  assessmentId?: number;
  medicalDiagnosis: string;
  treatingDiagnosis: string;
  subjectBodyAssessment: Blob;
  historyOfPresentComplaints: string;
  currentOrPastTreatment?: string;
  medicalAndFamilyHistory?: string;
  surgicalHistory?: string;
  familyHistory?: string;
  socialHistory?: string;
  medicationAndAllergies?: string;
  otherSymptoms?: string;
}

export interface Objective {
  assessmentId?: number;
  releventManualMuscleTesting?: string;
  releventSoftTissueTesting: string;
  totalAssessment: string;
}

export interface Assessment {
  assessmentId?: number;
  totalAssessment: string;
}

export interface PlanOfTreatment {
  assessmentId?: number;
  longTermGoals?: string;
  shortTermGoals: string;
  treatmentGiven: string;
  finalComments: string;
}
export interface PhysioForm {
  patientDetails: PatientDetails;
  subjective: Subjective;
  objective: Objective;
  planOfTreatment: PlanOfTreatment;
}
