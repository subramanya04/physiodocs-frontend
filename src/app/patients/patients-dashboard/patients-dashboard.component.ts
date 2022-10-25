import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../core/models';
import { PatientService } from '../patients.service';
import { ErrorHandlerService } from '../../core/services/error-handler/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-dashboard',
  templateUrl: './patients-dashboard.component.html',
  styleUrls: ['./patients-dashboard.component.scss']
})
export class PatientsDashboardComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  public displayedColumns = ['userId', 'firstName', 'lastName', 'email'];
  public dataSource: User[] = [];
  public count: number = 0;
  constructor(
    private readonly patientService: PatientService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly router: Router
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.patientService
      .get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ data, count, messages }) => {
          this.dataSource = data;
          this.count = count;
          this.errorHandler.openSnackBar(messages.join(', '));
        },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this.count = 0;
          this.errorHandler.openSnackBar(
            error?.error?.message ?? error.message ?? error
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onPatientClick({ userId }: User): void {
    this.router.navigate([`/main/patients/${userId}`]);
  }
}
