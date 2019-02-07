import { NgModule } from '@angular/core';
import {
  MatListModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule,
  MatGridListModule, MatDialogModule, MatInputModule, MatSidenavModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatAutocompleteModule
} from '@angular/material';

/**
 * NgModule that includes all the Material modules used by the app.
 */
@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
