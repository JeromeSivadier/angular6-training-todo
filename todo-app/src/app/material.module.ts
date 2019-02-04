import { NgModule } from '@angular/core';
import {
  MatListModule, MatIconModule, MatCheckboxModule,
} from '@angular/material';

/**
 * NgModule that includes all the Material modules used by the app.
 */
@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
