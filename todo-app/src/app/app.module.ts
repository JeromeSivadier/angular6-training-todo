import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { CreateTodoDialogComponent } from './todo-creator/create-todo-dialog.component';

import { WebApi } from './webapi/web-api';
import { MockWebApiService } from './webapi/mockwebapi.service';
import { TodosComponent } from './todos/todos.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TodoResolver } from './todos/todo.resolver';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoCreatorComponent,
    CreateTodoDialogComponent,
    TodosComponent,
    PlaygroundComponent,
    LoginComponent
  ],
  entryComponents: [
    CreateTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      { provide: WebApi, useClass: MockWebApiService },
      TodoResolver
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
