import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodoLight } from '../model/Todo';
import { LoggingService } from '../utils/logging.service';
import { MatDialog } from '@angular/material';
import { CreateTodoDialogComponent } from '../todo-creator/create-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodoId: string;
  @Input() todos: Todo[];
  @Output() taskStateChanged = new EventEmitter<number>();
  @Output() taskRemoved = new EventEmitter<number>();
  @Output() generateTodo = new EventEmitter<TodoLight>();

  getSelectedTodo(): Todo {
    return this.todos.find(t => t.id === +this.selectedTodoId);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(t => t.completed === true);
  }

  onAddTodo(todo: TodoLight): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('Todo-list: received generate todo -> ', result);
      if (result) {
        this.generateTodo.emit(result);
      }
    });
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
    private readonly logger: LoggingService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
}
