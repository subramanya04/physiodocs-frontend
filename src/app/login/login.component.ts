import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../core/services/user/user.service';
import { ErrorHandlerService } from '../core/services/error-handler/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  unsubscribe = new Subject();
  userForm: FormGroup;
  formErrors = {
    email: '',
    password: ''
  };
  validationMessages = {
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        '',
        [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  login() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    this.authService
      .login(this.userForm.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        ({ data }) => {
          this.userService.setUserDetails(data);
          this.router.navigate(['/main/dashboard']);
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
