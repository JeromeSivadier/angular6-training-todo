import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  users: User[] = [
    { login: 'John', userId: 0},
    { login: 'Jack', userId: 1},
    { login: 'Paul', userId: 2}
  ];

  currentUser: User;

  authenticate(login: string): User {
    const user = this.findUser(login);
    if (user) {
      this.currentUser = user;
    }
    return user;
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

  private findUser(login: string): User {
    return this.users.find(u => u.login === login);
  }

  constructor(
    private readonly router: Router
  ) { }
}
