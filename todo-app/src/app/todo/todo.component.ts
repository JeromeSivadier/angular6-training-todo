import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() taskStateChanged = new EventEmitter<number>();

  onTaskStateChanged() {
    this.taskStateChanged.emit(this.todo.id);
  }

  constructor() {}

  ngOnInit() {
  }

}
