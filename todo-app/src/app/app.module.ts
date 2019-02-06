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
import { RestWebApiService } from './webapi/restwebapi.service';
import { TodosComponent } from './todos/todos.component';
import { PlaygroundComponent } from './playground/playground.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadinginterceptorService } from './utils/loadinginterceptor.service';


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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    [
      { provide: WebApi, useClass: RestWebApiService },
      { provide: HTTP_INTERCEPTORS, useClass: LoadinginterceptorService, multi: true }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
