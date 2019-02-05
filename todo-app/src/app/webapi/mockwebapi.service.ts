import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { Todo, TodoLight } from '../model/Todo';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService extends WebApi {
  todos: Todo[] = this.createInitialList();

  getTodos(): Todo[] {
    return [...this.todos];
  }

  getNextId(): number {
    return this.todos.length;
  }

  addTodo(todo: TodoLight): Todo {
    this.logger.log('Mock: adding a new todo -> ', todo);
    const currentId = this.getNextId();
    const newTodo = {id: currentId, userId: todo.userId, title: todo.title, completed: false};
    this.todos.push(newTodo);
    return newTodo;
  }

  todoStateChanged(id: number) {
    this.logger.log('Mock: received changed event -> ', id);
    const todo = this.getTodo(id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  deleteTodo(id: number) {
    this.logger.log('Mock: received remove event -> ', id);
    const todoIndex = this.getTodoIndex(id);
    if (todoIndex > 0) {
      this.todos.splice(todoIndex, 1);
    }
  }

  getTodo(id: number) {
    return this.todos.find(t => t.id === id);
  }

  getTodoIndex(id: number) {
    return this.todos.findIndex(t => t.id === id);
  }

  createInitialList(): Todo[] {
    return [
      {id: 0, userId: 0, title: 'Eat vegetables', completed: false},
      {id: 1, userId: 0, title: 'Do laundry', completed: false},
      {id: 2, userId: 0, title: 'Watch a movie', completed: false},
      {id: 3, userId: 0, title: 'Throw a party', completed: false},
      {id: 4, userId: 0, title: 'Work', completed: false}
    ];
  }

  constructor(
    private readonly logger: LoggingService
  ) {
    super();
  }
}
