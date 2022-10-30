import { Component } from '@angular/core';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-plan-of-treatment-form',
  templateUrl: './plan-of-treatment-form.component.html',
  styleUrls: ['./plan-of-treatment-form.component.scss']
})
export class PlanOfTreatmentFormComponent extends PhysioFormBase {
  constructor() {
    super();
  }
}
