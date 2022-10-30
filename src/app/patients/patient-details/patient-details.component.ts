import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of, Subject, combineLatest } from 'rxjs';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { Patient } from '../../core/models';
import { PatientService } from '../patients.service';
import { ErrorHandlerService } from '../../core/services/error-handler/error-handler.service';
import { AssessmentService } from '../../physio/services/assessment/assessment.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  user: Patient | undefined;
  unsubscribe = new Subject();
  public displayedColumns = ['userId', 'firstName', 'lastName', 'email'];
  public dataSource: Patient[] = [];
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private errorHandler: ErrorHandlerService,
    private assessmentService: AssessmentService
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params ?? {};
    if (!id) {
      return;
    }
    this.loadUserDetails(+id);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadUserDetails(userId: number): void {
    const patientDetails$ = this.patientService.getById(userId);

    const patientAssessments$ =
      this.assessmentService.getUserAssessments(userId);

    combineLatest(patientDetails$, patientAssessments$)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ([{ data: user }, { data: assessments }]) => {
          this.user = { ...user, assessments };
        },
        (error: HttpErrorResponse) => {
          this.user = null;
          this.errorHandler.openSnackBar(
            error?.error?.message ?? error.message ?? error
          );
        }
      );
  }
}
