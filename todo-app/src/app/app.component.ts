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
  todos: Todo[] = this.createInitialList();

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

  onTaskStateChanged(taskId: number) {
    const todo = this.todos.find(t => t.id === taskId);
    if (todo) {
      todo.completed = !todo.completed;
    }
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
