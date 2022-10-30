import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export class PhysioFormBase {
  @Input() form = new FormGroup({});
  @Output() reset = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() submit = new EventEmitter();
  constructor() {}

  onReset(): void {
    this.reset.emit();
  }

  onPrevious(): void {
    this.previous.emit();
  }

  onNext(): void {
    this.next.emit();
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
