import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { LoggingService } from '../utils/logging.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Todo, TodoLight } from '../model/Todo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestWebApiService extends WebApi {
  private readonly REMOTE_ROOT = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(userId?: number): Observable<Todo[]> {
    if (typeof(userId) !== 'undefined') {
      this.logger.log('REST: returning filtered tasks for user -> ', userId);
      return this.http.get<Todo[]>(this.REMOTE_ROOT, { params: { userId: userId.toString() } });
    }
    return this.http.get<Todo[]>(this.REMOTE_ROOT);
  }

  deleteTodo(id: number): Observable<void> {
    this.logger.log('REST: deleting todo -> ', id);
    return this.http.delete<void>(`${this.REMOTE_ROOT}/${id}`);
  }

  getTodo(id: number): Observable<Todo> {
    this.logger.log('REST: returning todo -> ', id);
    return this.http.get<Todo>(`${this.REMOTE_ROOT}/${id}`);
  }

  todoStateChanged(id: number): Observable<Todo> {
    return this.getTodo(id).pipe(
      mergeMap(todo => {
        this.logger.log('REST: patching todo (change completed state) -> ', id);
        return this.http.patch<Todo>(`${this.REMOTE_ROOT}/${id}`, { completed: !todo.completed }, { headers: this.getHeaders() });
      })
    );
  }

  addTodo(todo: TodoLight): Observable<Todo> {
    const newTodo = {userId: todo.userId, title: todo.title, completed: false};
    this.logger.log('REST: adding todo -> ', newTodo);
    return this.http.post<Todo>(this.REMOTE_ROOT, newTodo, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'Application/json; charset=UTF-8');
    return headers;
  }

  constructor(
    private readonly logger: LoggingService,
    private readonly http: HttpClient
  ) {
    super();
  }
}
