import { Component } from '@angular/core';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-subjective-form',
  templateUrl: './subjective-form.component.html',
  styleUrls: ['./subjective-form.component.scss']
})
export class SubjectiveFormComponent extends PhysioFormBase {
  imageUrl: string = '';
  constructor() {
    super();
    this.imageUrl = './assets/body-chart.jpg';
  }

  saveBodyChart(subjectBodyAssessment: Blob): void {
    this.form.patchValue({
      subjectBodyAssessment
    });
  }

  cancelBodyChart(): void {
    this.form.controls.subjectBodyAssessment.reset();
  }
}
