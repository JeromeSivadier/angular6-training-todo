import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Todo } from '../model/Todo';
import { WebApi } from '../webapi/web-api';
import { LoggingService } from '../logging.service';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class TodoResolver implements Resolve<Todo[]> {

  constructor(
    readonly api: WebApi,
    readonly logger: LoggingService
  ) {}

  resolve(): Todo[] {
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

  resolve(): Todo[] {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.logger.log('Todo-resolver: resolving todos for current user -> ', currentUser);
      return this.api.getTodos(currentUser.userId);
    }
    return null;
  }
}
