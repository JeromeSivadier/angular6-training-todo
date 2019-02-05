import { Component, OnInit } from '@angular/core';
import { TodoLight } from '../model/Todo';
import { LoggingService } from '../logging.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  userId = new FormControl(0, [Validators.required]);

  generateTodo(): TodoLight {
    const todo = {userId: this.userId.value, title: this.title.value};
    this.logger.log('Todo-creator: creating -> ', todo);
    return todo;
  }

  isValid(): boolean {
    return this.title.valid && this.userId.valid;
  }

  constructor(
    private readonly logger: LoggingService
  ) { }

  ngOnInit() {
  }

}
