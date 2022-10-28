import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ErrorHandlerService } from '../core/services/error-handler/error-handler.service';
import { UserService } from '../core/services/user/user.service';
import {
  GenderTypes,
  LanguageTypes,
  NationalityTypes,
  SelectOptions,
  toSelectOptions
} from '../core/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  unsubscribe = new Subject();
  form: FormGroup;
  formErrors = {
    firstName: '',
    email: '',
    password: ''
  };
  validationMessages = {
    firstName: {
      required: 'Please enter your email',
      email: 'Please enter your valid email'
    },
    email: {
      required: 'Please enter your email',
      email: 'Please enter your valid email'
    },
    password: {
      required: 'Please enter your password',
      pattern: 'The password must contain numbers and letters',
      minlength: 'Please enter more than 4 characters',
      maxlength: 'Please enter less than 25 characters'
    }
  };
  genderOptions: SelectOptions[] = [];
  languageOptions: SelectOptions[] = [];
  nationalityOptions: SelectOptions[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.genderOptions = toSelectOptions(GenderTypes);
    this.languageOptions = toSelectOptions(LanguageTypes);
    this.nationalityOptions = toSelectOptions(NationalityTypes);
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  buildForm() {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      middleName: [null],
      lastName: [null],
      dateOfBirth: [null],
      gender: [null],
      nationality: [null],
      language: [null],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.pattern('^d{10}')]],
      password: [
        '',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  register() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const payload = {
      ...this.form.value,
      dateOfBirth: this.form.value.dateOfBirth
        ? new Date(this.form.value.dateOfBirth)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ')
        : null
    };
    this.authService
      .register(payload)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ messages, data }) => {
          this.submitted = false;
          this.errorHandler.openSnackBar(messages.join(', '));
          this.userService.setUserDetails(data);
          this.router.navigate(['/login']);
        },
        (error: HttpErrorResponse) => {
          this.submitted = false;
          this.errorHandler.openSnackBar(
            error?.error?.message ?? error.message ?? error
          );
        }
      );
  }
}
