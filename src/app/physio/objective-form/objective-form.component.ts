import { Component } from '@angular/core';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-objective-form',
  templateUrl: './objective-form.component.html',
  styleUrls: ['./objective-form.component.scss']
})
export class ObjectiveFormComponentextends extends PhysioFormBase {
  constructor() {
    super();
  }
}
