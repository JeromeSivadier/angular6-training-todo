import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AuthenticationService } from './authentication.service';
import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormControl('', [Validators.required]);

  constructor(
    private readonly logger: LoggingService,
    private readonly authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    const login = this.login.value;
    if (!this.authService.isValidLogin(login)) {
      this.login.setErrors({ invalidLogin: {value: login} });
      return;
    }
    this.authService.authenticate(login);
  }

  onLogout(): void {
    this.authService.logout();
  }

  getCurrentUser(): User {
    return this.authService.getCurrentUser();
  }
}
