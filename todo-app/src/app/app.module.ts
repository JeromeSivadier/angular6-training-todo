import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { CreateTodoDialogComponent } from './todo-creator/create-todo-dialog.component';
import { MatDialogModule } from '@angular/material';

import { WebApi } from './webapi/web-api';
import { MockWebApiService } from './webapi/mockwebapi.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoCreatorComponent,
    CreateTodoDialogComponent
  ],
  entryComponents: [
    CreateTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    [{ provide: WebApi, useClass: MockWebApiService }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
