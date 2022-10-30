import { Component, Input, OnInit } from '@angular/core';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-objective-form',
  templateUrl: './objective-form.component.html',
  styleUrls: ['./objective-form.component.scss']
})
export class ObjectiveFormComponent extends PhysioFormBase implements OnInit {
  @Input() set isAssessment(isAssessmentForm: boolean) {
    this.isAssessmentForm = isAssessmentForm;
    this.checkAssessmentControl();
  }
  get isAssessment() {
    return this.isAssessmentForm;
  }
  isAssessmentForm = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(`OnInit:`, this.form, this.isAssessment);
  }

  checkAssessmentControl(): void {
    if (this.isAssessment) {
    }
    const { totalAssessment } = this.form.controls;
    console.log(`FOrm :`, this.form);
  }
}
