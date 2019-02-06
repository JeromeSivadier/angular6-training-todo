import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { TodosComponent } from './todos/todos.component';
import { TodoResolver, MyTodoResolver } from './todos/todo.resolver';
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
    resolve: { todos: MyTodoResolver },
    component: LoginComponent,
    runGuardsAndResolvers: 'always'
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
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  providers: [AuthenticationService, TodoResolver, MyTodoResolver]
})
export class RoutingModule { }
