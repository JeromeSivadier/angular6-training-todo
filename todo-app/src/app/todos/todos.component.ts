import { Component, OnInit } from '@angular/core';
import { Todo, TodoLight } from '../model/Todo';
import { WebApi } from '../webapi/web-api';
import { LoggingService } from '../utils/logging.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  ngOnInit(): void {
    this.route.data.subscribe((data: {todos: Todo[]}) => {
      this.logger.log('Todos: done initial loading todos', data.todos);
      this.todos = data.todos;
    });
  }

  onAddTodo(todo: TodoLight): void {
    this.logger.log('Todos: adding a new todo -> ', todo);
    this.webapi.addTodo(todo).subscribe((newTodo: Todo) => {
      this.todos.push(newTodo);
    });
  }

  onTaskStateChanged(taskId: number) {
    this.logger.log('Todos: received changed event -> ', taskId);
    this.webapi.todoStateChanged(taskId).subscribe((updatedTodo: Todo) => {
      this.todos.splice(this.getTodoIndex(taskId), 1, updatedTodo);
    });
  }

  onTaskRemoved(taskId: number) {
    this.logger.log('Todos: received remove event -> ', taskId);
    this.webapi.deleteTodo(taskId).subscribe(_ => {
      this.todos.splice(this.getTodoIndex(taskId), 1);
    });
  }

  getTodoIndex(taskId: number) {
    return this.todos.findIndex(t => t.id === taskId);
  }

  constructor(
    private readonly logger: LoggingService,
    private readonly webapi: WebApi,
    private readonly route: ActivatedRoute
  ) {}
}
