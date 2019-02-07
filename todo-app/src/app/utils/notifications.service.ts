import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly notificationsSubject = new Subject<string>();
  notifications: Observable<string>;

  constructor() {
    this.notifications = this.notificationsSubject.pipe(
      debounceTime(200)
    );
   }

   addNotification(message: string) {
     this.notificationsSubject.next(message);
   }
}
