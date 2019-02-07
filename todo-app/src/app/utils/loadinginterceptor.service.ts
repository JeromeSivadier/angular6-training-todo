import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class LoadinginterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.displaySpinner();
    return next.handle(req).pipe(
      // delay(2000), -> uncomment if you wish to see the spinner spinning
      finalize(() => this.spinner.hideSpinner()),
      catchError(error => {
        this.notifications.addNotification(error.message);
        return throwError(error);
      })
    );
  }

  constructor(
    private readonly spinner: SpinnerService,
    private readonly notifications: NotificationsService
  ) { }
}
