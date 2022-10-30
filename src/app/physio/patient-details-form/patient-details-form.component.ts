import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  GenderTypes,
  LanguageTypes,
  ModeOfPaymentTypes,
  SelectOptions,
  toSelectOptions,
  User
} from '../../core/models';
import { PhysioFormBase } from '../base/physio-form.base';

@Component({
  selector: 'app-patient-details-form',
  templateUrl: './patient-details-form.component.html',
  styleUrls: ['./patient-details-form.component.scss']
})
export class PatientDetailsFormComponent extends PhysioFormBase {
  @Input() loading = false;
  @Input() patientOptions = [];
  @Input() therapistOptions = [];
  @Output() patientSearch = new EventEmitter<string>();
  @Output() patientSelect = new EventEmitter<User>();
  @Output() therapistSearch = new EventEmitter<string>();
  @Output() therapistSelect = new EventEmitter<User>();
  genderOptions: SelectOptions[] = [];
  languageOptions: SelectOptions[] = [];
  modeOfPaymentOptions: SelectOptions[] = [];
  constructor() {
    super();
    this.genderOptions = toSelectOptions(GenderTypes);
    this.languageOptions = toSelectOptions(LanguageTypes);
    this.modeOfPaymentOptions = toSelectOptions(ModeOfPaymentTypes);
  }

  onPatientSearch(term: string): void {
    this.patientSearch.emit(term);
  }

  onPatientSelect({ option }: MatAutocompleteSelectedEvent): void {
    this.patientSelect.emit(option.value);
  }

  onTherapistSearch(term: string): void {
    // this.therapistSearch.emit(term);
  }

  onTherapistSelect({ option }: MatAutocompleteSelectedEvent): void {
    // this.therapistSelect.emit(option.value);
  }
}
