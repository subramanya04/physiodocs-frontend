import { Component, Input, OnInit } from '@angular/core';
import { SPORTS_HELPERS } from './helpers.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable, Subscription, throwError } from 'rxjs';
import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';
import { fadeAnimation } from '../animation';
import { DepartmentService } from '../../core/services/department/department.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'cdk-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  animations: [fadeAnimation]
})
export class SportsComponent implements OnInit {
  fileName = '';

  isLinear = false;
  sportsHelpers: any = SPORTS_HELPERS;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  department$: Observable<any> = EMPTY;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
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
      fifthCtrl: ['', Validators.required]
    });

    this.route.paramMap.subscribe(({ params }: any) => {
      if (!params || !params.deptId) {
        return;
      }
      this.department$ = this.departmentService
        .getById(params.deptId)
        .pipe(map(({ data }) => data));
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post('/api/thumbnail-upload', formData);

      upload$.subscribe();
    }
  }
}
