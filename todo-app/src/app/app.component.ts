import { Component, OnInit } from '@angular/core';
import { Todo, TodoLight } from './model/Todo';
import { LoggingService } from './logging.service';
import { WebApi } from './webapi/web-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todos: Todo[];

  ngOnInit(): void {
    this.todos = this.webapi.getTodos();
  }

  onAddTodo(todo: TodoLight): void {
    this.logger.log('App: adding a new todo -> ', todo);
    const newTodo = this.webapi.addTodo(todo);
    this.todos.push(newTodo);
  }

  onTaskStateChanged(taskId: number) {
    this.logger.log('App: received changed event -> ', taskId);
    const modifiedTodo = this.webapi.todoStateChanged(taskId);
    this.todos.splice(this.getTodoIndex(taskId), 1, modifiedTodo);
  }

  onTaskRemoved(taskId: number) {
    this.logger.log('App: received remove event -> ', taskId);
    this.webapi.deleteTodo(taskId);
    this.todos.splice(this.getTodoIndex(taskId), 1);
  }

  getTodoIndex(taskId: number) {
    return this.todos.findIndex(t => t.id === taskId);
  }

  constructor(
    private readonly logger: LoggingService,
    private readonly webapi: WebApi
  ) {}
}
