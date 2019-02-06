import { Injectable } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private countRequest = 0;
  private readonly displaySubject = new Subject<null>();
  private readonly hideSubject = new Subject<null>();
  isLoading: Observable<boolean>;

  constructor() {
      this.isLoading = merge(
          // defer update when requesting display to avoid ExpressionChangedAfterItHasBeenCheckedError
          // when doing an http request in the onNgInit of a component
          this.displaySubject.pipe(delay(0)),
          // debounce update when requesting hiding to avoid the screen to flicker when requesting display right after hiding
          this.hideSubject.pipe(debounceTime(50))
      ).pipe(map(() => this.countRequest > 0));

      /// This will generate an observable with booleans true/false everytime a next() event is called on display or hide
      /// true -> countRequest > 0 ==> display spinner
  }

  displaySpinner() {
      ++this.countRequest;
      this.displaySubject.next();
  }

  hideSpinner() {
      --this.countRequest;
      this.hideSubject.next();
  }
}
