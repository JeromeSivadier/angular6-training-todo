import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { Todo, TodoLight } from '../model/Todo';
import { LoggingService } from '../utils/logging.service';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService extends WebApi {
  todos: Todo[] = this.createInitialList();

  getTodos(userId?: number): Observable<Todo[]> {
    if (typeof(userId) !== 'undefined') {
      this.logger.log('Mock: returning filtered tasks for user -> ', userId);
      return of(this.todos.filter(t => t.userId === userId));
    }
    return of([...this.todos]); // copy the whole list
  }

  getNextId(): number {
    return this.todos.length;
  }

  addTodo(todo: TodoLight): Observable<Todo> {
    this.logger.log('Mock: adding a new todo -> ', todo);
    const currentId = this.getNextId();
    const newTodo = {id: currentId, userId: todo.userId, title: todo.title, completed: false};
    this.todos.push(newTodo);
    return of(newTodo);
  }

  todoStateChanged(id: number): Observable<Todo> {
    this.logger.log('Mock: received changed event -> ', id);
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return of(todo);
  }

  deleteTodo(id: number): Observable<void> {
    this.logger.log('Mock: received remove event -> ', id);
    const todoIndex = this.getTodoIndex(id);
    if (todoIndex > 0) {
      this.todos.splice(todoIndex, 1);
    }
    return of();
  }

  getTodo(id: number): Observable<Todo> {
    return of(this.todos.find(t => t.id === id));
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
