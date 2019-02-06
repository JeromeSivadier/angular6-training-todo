import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Todo } from '../model/Todo';
import { WebApi } from '../webapi/web-api';
import { LoggingService } from '../logging.service';

@Injectable()
export class TodoResolver implements Resolve<Todo[]> {

  constructor(
    private readonly api: WebApi,
    private readonly logger: LoggingService
  ) {}

  resolve(): Todo[] {
    this.logger.log('Todo-resolver: resolving todos');
    return this.api.getTodos();
  }
}
