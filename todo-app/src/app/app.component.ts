import { Component, OnInit } from '@angular/core';
import { Todo, TodoLight } from './model/Todo';
import { LoggingService } from './logging.service';
import { WebApi } from './webapi/web-api';
import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  ngOnInit(): void {
  }

  constructor(
    public readonly authService: AuthenticationService
  ) {}
}
