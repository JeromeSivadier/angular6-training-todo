import { Todo, TodoLight } from '../model/Todo';

export abstract class WebApi {
  abstract getTodos(userId?: number): Todo[];
  abstract deleteTodo(id: number): void;
  abstract todoStateChanged(id: number): Todo;
  abstract addTodo(todo: TodoLight): Todo;
}
