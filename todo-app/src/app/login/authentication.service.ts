import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, mergeAll, defaultIfEmpty } from 'rxjs/operators';
import { LoggingService } from '../utils/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  private readonly REMOTE_ROOT = 'https://jsonplaceholder.typicode.com/users';

  currentUser: User;

  authenticate(login: string): Observable<User> {
    this.logger.log('Auth: tring to get user -> ', login);
    return this.findUser(login).pipe(
      defaultIfEmpty(null),
      // if an user is found with this login, it's OK we're registered
      tap(user => {
          if (user) {
            this.logger.log('Auth: found user: -> ', user);
            this.currentUser = user;
          } else {
            throw new Error('Invalid login');
          }
      })
    );
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  isValidLogin(login: string) {
    return typeof(this.findUser(login)) !== 'undefined';
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  private findUser(login: string): Observable<User> {
    // mergeAll will flatten Array returned by the remote API
    return this.http.get<User[]>(this.REMOTE_ROOT, {params: {username: login}}).pipe(mergeAll());
  }

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly logger: LoggingService
  ) { }
}
