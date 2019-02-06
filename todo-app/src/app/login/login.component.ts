import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../utils/logging.service';
import { AuthenticationService } from './authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { WebApi } from '../webapi/web-api';
import { Todo } from '../model/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  myTodos: Todo[];

  constructor(
    private readonly logger: LoggingService,
    private readonly authService: AuthenticationService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {todos: Todo[]}) => {
      this.logger.log('Login: done initial loading of my todos', data.todos);
      this.myTodos = data.todos;
    });
  }

  onLogin(): void {
    const login = this.login.value;
    if (!this.authService.isValidLogin(login)) {
      this.login.setErrors({ invalidLogin: {value: login} });
      return;
    }
    this.authService.authenticate(login);
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getCurrentUser(): User {
    return this.authService.getCurrentUser();
  }

  getMyTodos(): Todo[] {
    return this.myTodos;
  }
 }
