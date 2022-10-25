export const CARDIO_HELPERS: any = {

  tsSourceRaisedbutton: `
 		import { MatCardioModule } from '@angular/material/cardio';

	  	@NgModule({
		  imports: [
		    MatCardioModule,
		})
		export class AppModule { }

		import { Component, OnInit } from '@angular/core';

        @Component({
          selector: 'cdk-cardio',
          templateUrl: './cardio.component.html',
          styleUrls: ['./cardio.component.scss']
        })
        export class CardioComponent implements OnInit {
        }

		`.trim(),

  htmlSourceRaisedbutton: `
  		
		  <button mat-raised-button>Basic</button>
		  <button mat-button color="primary">Primary</button>
		  <button mat-icon-button color="accent">
                <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
                </button>
		  <button mat-raised-button disabled>Disabled</button>
                <button mat-mini-fab>
                <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
                </button>
		  <a mat-button routerLink=".">Link</a>
		`.trim(),

};

