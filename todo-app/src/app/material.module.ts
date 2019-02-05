import { NgModule } from '@angular/core';
import {
  MatListModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule, MatGridListModule
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
    MatGridListModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
