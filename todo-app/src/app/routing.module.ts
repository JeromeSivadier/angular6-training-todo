import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { TodosComponent } from './todos/todos.component';
import { TodoResolver } from './todos/todo.resolver';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './login/authentication.service';

const routes: Routes = [
  {
   path: 'playground',
   component: PlaygroundComponent,
   canActivate: [AuthenticationService]
  },
  {
   path: 'todos',
   component: TodosComponent,
   resolve: { todos: TodoResolver },
   canActivate: [AuthenticationService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
   path: '**',
   redirectTo: '/playground',
   pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthenticationService]
})
export class RoutingModule { }
