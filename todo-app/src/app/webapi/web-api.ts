import { Todo, TodoLight } from '../model/Todo';
import { Observable } from 'rxjs';

export abstract class WebApi {
  abstract getTodo(id: number): Observable<Todo>;
  abstract getTodos(userId?: number): Observable<Todo[]>;
  abstract deleteTodo(id: number): Observable<void>;
  abstract todoStateChanged(id: number): Observable<Todo>;
  abstract addTodo(todo: TodoLight): Observable<Todo>;
}
