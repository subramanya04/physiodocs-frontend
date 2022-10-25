import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { DoctorsRouterModule } from './Doctors.router';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CardioComponent } from './cardio/cardio.component';
import { SportsComponent } from './sports/sports.component';
import { CoreModule } from '../core/core.module';
import { WomensHealthComponent } from './womens-health/womens-health.component';
import { OrthoSportsComponent } from './ortho-sports/ortho-sports.component';
import { NeuroComponent } from './neuro/neuro.component';
import { PediatricsComponent } from './pediatrics/pediatrics.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const highlightJsFactory = () => {
  return {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript')
    }
  };
};

export const highlightJsValue = {
  coreLibraryLoader: () => import('highlight.js/lib/core'),
  languages: {
    typescript: () => import('highlight.js/lib/languages/typescript')
  }
};

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    HighlightModule,
    DoctorsRouterModule,
    CoreModule
  ],
  declarations: [CardioComponent, SportsComponent, WomensHealthComponent, OrthoSportsComponent, NeuroComponent, PediatricsComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      // useValue: highlightJsValue
      useFactory: highlightJsFactory,
      deps: []
      // useValue: {
      //   coreLibraryLoader: () => import('highlight.js/lib/core'),
      //   languages: {
      //     typescript: () => import('highlight.js/lib/languages/typescript')}
      // }
    }
  ]
})
export class DoctorsModule {}
