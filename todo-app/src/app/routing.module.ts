import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { TodosComponent } from './todos/todos.component';
import { TodoResolver } from './todos/todo.resolver';

const routes: Routes = [
 {
   path: 'playground',
   component: PlaygroundComponent
  },
 {
   path: 'todos',
   component: TodosComponent,
   resolve: { todos: TodoResolver }
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
  exports: [RouterModule]
})
export class RoutingModule { }
