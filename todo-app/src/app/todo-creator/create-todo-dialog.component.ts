import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TodoLight } from '../model/Todo';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.html',
  styleUrls: []
})
export class CreateTodoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateTodoDialogComponent>,
    private readonly logger: LoggingService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onGenerateTodo(todo: TodoLight) {
    this.logger.log('Create-todo-dialog: returns a new todo -> ', todo);
    this.dialogRef.close(todo);
  }
}
