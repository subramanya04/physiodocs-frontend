import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { PhysioPageComponent } from './physio-page/physio-page.component';
import { PhysioRoutingModule } from './physio-routing.module';
import { PatientDetailsFormComponent } from './patient-details-form/patient-details-form.component';
import { SubjectiveFormComponent } from './subjective-form/subjective-form.component';
import { ObjectiveFormComponent } from './objective-form/objective-form.component';
import { PlanOfTreatmentFormComponent } from './plan-of-treatment-form/plan-of-treatment-form.component';
import { PhysioFormService } from './services/physio-form/physio-form.service';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    PhysioPageComponent,
    PatientDetailsFormComponent,
    SubjectiveFormComponent,
    ObjectiveFormComponent,
    PlanOfTreatmentFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatStepperModule,
    PhysioRoutingModule,
    ReactiveFormsModule,
    ImageDrawingModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    },
    PhysioFormService
  ]
})
export class PhysioModule {}
