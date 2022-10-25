import { Component, OnInit } from '@angular/core';
import { CARDIO_HELPERS } from './helpers.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';
// import { fadeAnimation } from '../animation';

@Component({
  selector: 'cdk-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.scss']
  // animations: [fadeAnimation]
})
export class CardioComponent implements OnInit {
  cardioHelpers: any = CARDIO_HELPERS;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  http: any;
  constructor(
    private _formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
