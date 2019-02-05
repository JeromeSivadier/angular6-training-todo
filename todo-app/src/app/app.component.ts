import { Component } from '@angular/core';
import { Todo, TodoLight } from './model/Todo';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  constructor(
    private readonly logger: LoggingService
  ) {}

  todos: Todo[] = this.createInitialList();

  getNextId(): number {
    return this.todos.length;
  }

  onAddTodo(todo: TodoLight): void {
    this.logger.log('App: adding a new todo -> ', todo);
    const currentId = this.getNextId();
    this.todos.push({id: currentId, userId: todo.userId, title: todo.title, completed: false});
  }

  onTaskStateChanged(taskId: number) {
    this.logger.log('App: received changed event -> ', taskId);
    const todo = this.getTask(taskId);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  onTaskRemoved(taskId: number) {
    this.logger.log('App: received remove event -> ', taskId);
    const task = this.getTask(taskId);
    const taskPosition = this.todos.indexOf(task);
    if (taskPosition > 0) {
      this.todos.splice(taskPosition, 1);
    }
  }

  getTask(taskId: number) {
    return this.todos.find(t => t.id === taskId);
  }

  createInitialList(): Todo[] {
    return [
      {id: 0, userId: 0, title: 'Eat vegetables', completed: false},
      {id: 1, userId: 0, title: 'Do laundry', completed: false},
      {id: 2, userId: 0, title: 'Watch a movie', completed: false},
      {id: 3, userId: 0, title: 'Throw a party', completed: false},
      {id: 4, userId: 0, title: 'Work', completed: false}
    ];
  }
}
