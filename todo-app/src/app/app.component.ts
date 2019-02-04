import { Component } from '@angular/core';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  selectedTodoId: string;
  todos: Todo[] = [];

  addTodo(): void {
    const currentId = this.getNextId();
    this.todos.push({id: currentId, userId: 0, title: `TODO ${currentId}`, completed: false});
  }

  getNextId(): number {
    return this.todos.length;
  }

  getSelectedTodo(): Todo {
    return this.todos.find(t => t.id === +this.selectedTodoId);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(t => t.completed === true);
  }
}
