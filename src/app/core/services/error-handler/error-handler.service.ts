import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message, duration = 2000, action = null) {
    this.snackBar.open(message, action, {
      duration
    });
  }
}
