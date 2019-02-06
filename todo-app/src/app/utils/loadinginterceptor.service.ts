import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class LoadinginterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.displaySpinner();
    return next.handle(req).pipe(
      delay(2000),
      finalize(() => this.spinner.hideSpinner())
    );
  }

  constructor(
    private readonly spinner: SpinnerService
  ) { }
}
