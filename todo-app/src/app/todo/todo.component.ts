import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {
  }

}
