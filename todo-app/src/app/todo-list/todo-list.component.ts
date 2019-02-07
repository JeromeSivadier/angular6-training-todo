import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodoLight } from '../model/Todo';
import { LoggingService } from '../utils/logging.service';
import { MatDialog } from '@angular/material';
import { CreateTodoDialogComponent } from '../todo-creator/create-todo-dialog.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodo: Todo = null;
  todoInput = new FormControl('');
  filteredTodos$: Observable<Todo[]>;

  @Input() todos: Todo[];
  @Output() taskStateChanged = new EventEmitter<number>();
  @Output() taskRemoved = new EventEmitter<number>();
  @Output() generateTodo = new EventEmitter<TodoLight>();

  displayFn(todo?: Todo): string | undefined {
    return todo ? todo.title : undefined;
  }

  getSelectedTodo(): Todo {
    return this.selectedTodo;
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(t => t.completed === true);
  }

  onAddTodo(): void {
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
  ) {
    this.filteredTodos$ = this.todoInput.valueChanges.pipe(
      debounceTime(100),
      startWith(''),
      map(value => {
        if (typeof(value) === 'string') {
          const filterValue = value.toLowerCase();
          return this.todos.filter(todo => todo.title.toLowerCase().includes(filterValue));
        }
      })
    );

    // Full rx approach, no mapping in template anymore https://angular.io/api/forms/FormControlDirective#use-with-ngmodel
    this.todoInput.valueChanges.subscribe(todo => {
      this.selectedTodo = todo;
    });
  }

  ngOnInit() {
  }
}
