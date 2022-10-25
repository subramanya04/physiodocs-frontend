import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../core/models';
import { PatientService } from '../patients.service';
import { ErrorHandlerService } from '../../core/services/error-handler/error-handler.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  user: User | undefined;
  unsubscribe = new Subject();
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private errorHandler: ErrorHandlerService
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
    this.patientService
      .getById(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ data, messages }) => {
          this.user = data;
          this.errorHandler.openSnackBar(messages.join(', '));
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
