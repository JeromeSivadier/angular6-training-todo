import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message?: any, ...optionalParams: any[]): void {
    console.log(message, optionalParams);
  }

  constructor() { }
}
