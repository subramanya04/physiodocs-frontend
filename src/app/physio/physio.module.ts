import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PhysioPageComponent } from './physio-page/physio-page.component';
import { PhysioRoutingModule } from './physio-routing.module';
import { PatientDetailsFormComponent } from './patient-details-form/patient-details-form.component';
import { SubjectiveFormComponent } from './subjective-form/subjective-form.component';
import { ObjectiveFormComponent } from './objective-form/objective-form.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { PlanFormComponent } from './plan-form/plan-form.component';

@NgModule({
  declarations: [PhysioPageComponent, PatientDetailsFormComponent, SubjectiveFormComponent, ObjectiveFormComponent, AssessmentFormComponent, PlanFormComponent],
  imports: [CommonModule, PhysioRoutingModule, ReactiveFormsModule]
})
export class PhysioModule {}
