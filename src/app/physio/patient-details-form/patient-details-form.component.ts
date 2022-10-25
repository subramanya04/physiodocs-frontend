import { Component } from '@angular/core';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-patient-details-form',
  templateUrl: './patient-details-form.component.html',
  styleUrls: ['./patient-details-form.component.scss']
})
export class PatientDetailsFormComponent extends PhysioFormBase {
  constructor() {
    super();
  }
}
