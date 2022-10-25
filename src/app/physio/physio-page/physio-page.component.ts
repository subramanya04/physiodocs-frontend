import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartmentService } from '../../core/services/department/department.service';
import { PhysioFormService } from '../services/physio-form/physio-form.service';

@Component({
  selector: 'app-physio-page',
  templateUrl: './physio-page.component.html',
  styleUrls: ['./physio-page.component.scss']
})
export class PhysioPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  department$: Observable<any> = EMPTY;
  constructor(
    private physioFormService: PhysioFormService,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {
    this.route.paramMap.subscribe(({ params }: any) => {
      if (!params || !params.deptId) {
        return;
      }
      this.form = this.physioFormService.getPhysioForm(+params.deptId);
      this.department$ = this.departmentService
        .getById(params.deptId)
        .pipe(map(({ data }) => data));
    });
  }

  ngOnInit(): void {
    this.form = this.physioFormService.getPhysioForm();
  }
}
