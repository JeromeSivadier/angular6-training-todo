import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodoId: string;
  @Input() todos: Todo[];
  @Output() addTask = new EventEmitter<void>();
  @Output() taskStateChanged = new EventEmitter<number>();
  @Output() taskRemoved = new EventEmitter<number>();

  getSelectedTodo(): Todo {
    return this.todos.find(t => t.id === +this.selectedTodoId);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(t => t.completed === true);
  }

  onAddTask(): void {
    this.addTask.emit();
  }

  onTaskStateChanged(taskId: number) {
    this.logger.log('Todo-list: received changed event -> ', taskId);
    this.taskStateChanged.emit(taskId);
  }

  onTaskRemoved(taskId: number) {
    this.logger.log('Todo-list: received removed event  -> ', taskId);
    this.taskRemoved.emit(taskId);
  }

  constructor(
    private readonly logger: LoggingService
  ) { }

  ngOnInit() {
  }
}
