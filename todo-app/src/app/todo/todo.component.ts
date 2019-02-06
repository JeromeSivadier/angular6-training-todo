import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { LoggingService } from '../utils/logging.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() taskStateChanged = new EventEmitter<number>();
  @Output() taskRemoved = new EventEmitter<number>();

  onTaskStateChanged() {
    this.logger.log('Todo: sent changed event -> ', this.todo.id);
    this.taskStateChanged.emit(this.todo.id);
  }

  onTaskRemoved() {
    this.logger.log('Todo: sent removed event -> ', this.todo.id);
    this.taskRemoved.emit(this.todo.id);
  }

  constructor(
    private readonly logger: LoggingService
  ) {}

  ngOnInit() {
  }

}
