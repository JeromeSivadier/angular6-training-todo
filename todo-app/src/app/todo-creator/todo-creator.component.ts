import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TodoLight } from '../model/Todo';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  title: string;
  userId: number;

  generateTodo(): TodoLight {
    const todo = {userId: this.userId, title: this.title};
    this.logger.log('Todo-creator: creating -> ', todo);
    return todo;
  }

  constructor(
    private readonly logger: LoggingService
  ) { }

  ngOnInit() {
  }

}
