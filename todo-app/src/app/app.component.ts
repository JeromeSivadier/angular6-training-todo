import { Component, OnInit } from '@angular/core';
import { Todo, TodoLight } from './model/Todo';
import { LoggingService } from './utils/logging.service';
import { WebApi } from './webapi/web-api';
import { AuthenticationService } from './login/authentication.service';
import { SpinnerService } from './utils/spinner.service';
import { NotificationsService } from './utils/notifications.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  isLoading: boolean;

  ngOnInit(): void {
    this.spinner.isLoading.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  constructor(
    public readonly authService: AuthenticationService,
    private readonly spinner: SpinnerService,
    private readonly notificationService: NotificationsService,
    private readonly snackbar: MatSnackBar
  ) {
    this.notificationService.notifications.subscribe(message => {
      this.snackbar.open(message, 'Dismiss', {
        duration: 5000
      });
    });
  }
}
