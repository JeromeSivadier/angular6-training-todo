import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Todo } from '../model/Todo';
import { WebApi } from '../webapi/web-api';
import { LoggingService } from '../utils/logging.service';
import { AuthenticationService } from '../login/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoResolver implements Resolve<Todo[]> {

  constructor(
    readonly api: WebApi,
    readonly logger: LoggingService
  ) {}

  resolve(): Observable<Todo[]> {
    this.logger.log('Todo-resolver: resolving todos');
    return this.api.getTodos();
  }
}

@Injectable()
export class MyTodoResolver extends TodoResolver {

  constructor(
    readonly api: WebApi,
    readonly logger: LoggingService,
    readonly authService: AuthenticationService
  ) {
    super(api, logger);
  }

  resolve(): Observable<Todo[]> {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.logger.log('Todo-resolver: resolving todos for current user -> ', currentUser);
      return this.api.getTodos(currentUser.userId).pipe(
        map(todos => todos.filter(t => t.completed === false))
      );
    }
    return null;
  }
}
