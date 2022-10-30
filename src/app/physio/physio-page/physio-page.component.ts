import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable, of, Subject } from 'rxjs';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap
} from 'rxjs/operators';
import { Department, getAgeInYears, User, UserRoles } from '../../core/models';
import { DepartmentService } from '../../core/services/department/department.service';
import { ErrorHandlerService } from '../../core/services/error-handler/error-handler.service';
import { PatientService } from '../../patients/patients.service';
import { PhysioFormService } from '../services/physio-form/physio-form.service';
import { PhysioService } from '../services/physio-service/physio.service';

@Component({
  selector: 'app-physio-page',
  templateUrl: './physio-page.component.html',
  styleUrls: ['./physio-page.component.scss']
})
export class PhysioPageComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper;
  patientId$ = new BehaviorSubject('');
  therapistId$ = new BehaviorSubject('');
  form: FormGroup = new FormGroup({});
  department$: Observable<Department> = EMPTY;
  patientOptions$: Observable<User[] | unknown> = EMPTY;
  loadingPatients$ = new BehaviorSubject(false);
  therapistOptions$: Observable<User[] | unknown> = EMPTY;
  loadingTherapists$ = new BehaviorSubject(false);
  unsubscribe = new Subject();
  constructor(
    private physioFormService: PhysioFormService,
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private patientService: PatientService,
    private physioService: PhysioService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.patientId$
      .pipe(
        takeUntil(this.unsubscribe),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((name: string) => {
        if (!name?.trim()?.length) {
          return;
        }
        this.patientOptions$ = this.patientService
          .getByTerm(name)
          .pipe(tap(data => this.loadingPatients$.next(!data)));
      });

    this.therapistId$
      .pipe(
        takeUntil(this.unsubscribe),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((name: string) => {
        if (!name?.trim()?.length) {
          return;
        }
        this.therapistOptions$ = this.patientService
          .getByTerm(name, UserRoles.DOCTOR)
          .pipe(tap(data => this.loadingTherapists$.next(!data)));
      });

    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ params }: any) => {
        if (!params || !params.deptId) {
          return;
        }
        this.form = this.physioFormService.getPhysioForm();
        this.department$ = this.departmentService
          .getById(params.deptId)
          .pipe(concatMap(({ data }) => of(data)));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onNavigate(event: any): void {}

  onPatientSearch(patientId: string): void {
    const { patientDetails } = this.form.controls;
    if (!patientDetails) {
      return;
    }
    patientDetails.reset({
      patientId
    });
    this.loadingPatients$.next(true);
    this.patientId$.next(patientId);
  }

  onPatientSelect(patient: User, department: Department): void {
    const { patientDetails } = this.form.controls;
    if (!patientDetails) {
      return;
    }
    patientDetails.patchValue({
      patientName: `${patient.firstName} ${patient.lastName ?? ''}`,
      patientId: patient.userId,
      deptId: department.deptId,
      nationality: patient.nationality,
      language: patient.language,
      age: patient.dateOfBirth ? getAgeInYears(patient.dateOfBirth) : null,
      gender: patient.gender
    });
  }

  onTherapistSearch(treatingTherapist: string): void {
    const { patientDetails } = this.form.controls;
    if (!patientDetails) {
      return;
    }
    this.loadingTherapists$.next(true);
    this.patientId$.next(treatingTherapist);
  }

  onTherapistSelect({ userId: treatingTherapist }: User): void {
    const { patientDetails } = this.form.controls;
    if (!patientDetails) {
      return;
    }
    patientDetails.patchValue({
      treatingTherapist
    });
  }

  onReset(): void {
    console.log(`onNext Stepper:`, this.stepper);
    this.form.reset();
  }

  onPrevious(): void {
    console.log(`onPrevious Stepper:`, this.stepper);
  }
  onNext(): void {
    console.log(`onNext Stepper:`, this.stepper);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.physioService
      .createAssessment(this.form.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ messages, data }) => {
          this.errorHandler.openSnackBar(messages.join(', '));
          this.router.navigate(['/main/patients']);
        },
        (error: HttpErrorResponse) => {
          this.errorHandler.openSnackBar(
            error?.error?.message ?? error.message ?? error
          );
        }
      );
  }
}
